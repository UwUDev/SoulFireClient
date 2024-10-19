use crate::cast::{connect_cast, discover_casts, get_casts, CastRunningState};
use crate::discord::load_discord_rpc;
use crate::sf_loader::{run_integrated_server, IntegratedServerState};
use crate::utils::kill_child_process;
use std::ops::Deref;
use std::sync::atomic::AtomicBool;
use std::sync::Arc;
use std::{env, thread};
use log::{error, info};
use tauri::async_runtime::Mutex;
use tauri::{Emitter, Listener, Manager};
use tauri_plugin_log::fern::colors::Color;
#[cfg(desktop)]
use tauri_plugin_updater;

#[cfg(desktop)]
mod tray;
#[cfg(desktop)]
mod updater;
mod cast;
mod discord;
mod sf_loader;
mod utils;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  #[cfg(desktop)]
  {
    rustls::crypto::ring::default_provider().install_default().expect("Failed to install rustls crypto provider");
  }

  thread::spawn(|| load_discord_rpc());

  tauri::Builder::default()
    .plugin(tauri_plugin_log::Builder::new()
      .level(log::LevelFilter::Info)
      .with_colors(tauri_plugin_log::fern::colors::ColoredLevelConfig {
        error: Color::Red,
        warn: Color::Yellow,
        debug: Color::Cyan,
        info: Color::Green,
        trace: Color::Blue,
      })
      .target(tauri_plugin_log::Target::new(
        tauri_plugin_log::TargetKind::Webview,
      ))
      .max_file_size(50_000)
      .rotation_strategy(tauri_plugin_log::RotationStrategy::KeepAll)
      .build())
    .plugin(tauri_plugin_process::init())
    .plugin(tauri_plugin_clipboard_manager::init())
    .plugin(tauri_plugin_shell::init())
    .plugin(tauri_plugin_os::init())
    .plugin(tauri_plugin_fs::init())
    .plugin(tauri_plugin_dialog::init())
    .manage(CastRunningState {
      running: AtomicBool::new(false),
      announced_devices: Mutex::new(Vec::new()),
    })
    .manage(IntegratedServerState {
      starting: Arc::new(AtomicBool::new(false)),
      child_process: Arc::new(Mutex::new(None)),
    })
    .invoke_handler(tauri::generate_handler![
            run_integrated_server,
            discover_casts,
            connect_cast,
            get_casts
        ])
    .setup(|app| {
      #[cfg(desktop)]
      {
        let handle = app.handle();
        tray::create_tray(handle)?;
      }

      #[cfg(desktop)]
      {
        let main_window = app.get_webview_window("main").unwrap();
        let app_version = &app.package_info().version;
        let _ = main_window.set_title(format!("SoulFireClient {app_version}").as_str());
      }

      let app_handle = app.handle().clone();
      app.listen("kill-integrated-server", move |_event| {
        kill_child_process(app_handle.state::<IntegratedServerState>().deref());
        app_handle.emit("integrated-server-killed", ()).unwrap();
      });

      #[cfg(desktop)]
      {
        app.handle().plugin(tauri_plugin_updater::Builder::new().build()).unwrap();
        let handle = app.handle().clone();
        tauri::async_runtime::spawn(async move {
          match updater::update(handle).await {
            Ok(()) => {
              info!("Updater finished");
            }
            Err(error) => {
              error!("An updater error occurred! {error}");
            }
          }
        });
      }
      Ok(())
    })
    .on_window_event(move |window, event| {
      if let tauri::WindowEvent::CloseRequested { .. } = event {
        kill_child_process(window.state::<IntegratedServerState>().deref());
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
