import { CSSProperties, useContext, useEffect, useState } from 'react';
import { LogsServiceClient } from '@/generated/com/soulfiremc/grpc/generated/logs.client.ts';
import { TransportContext } from './providers/transport-context.tsx';
import { ansicolor, parse } from 'ansicolor';
import { ScrollArea } from './ui/scroll-area.tsx';
import { TerminalThemeContext } from '@/components/providers/terminal-theme-context.tsx';
import { flavorEntries } from '@catppuccin/palette';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace React {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> {
      // Sets raw CSS styles
      STYLE?: string;
    }
  }
}

const rgbToArray = (rgb: {
  r: number;
  g: number;
  b: number;
}): [number, number, number] => {
  return [rgb.r, rgb.g, rgb.b];
};

const hslToString = (rgb: { h: number; s: number; l: number }): string => {
  return `${Math.round(rgb.h)}, ${Math.round(rgb.s * 100)}%, ${Math.round(rgb.l * 100)}%`;
};

export const TerminalComponent = () => {
  const [gotPrevious, setGotPrevious] = useState(false);
  const [entries, setEntries] = useState<[string, string][]>([]);
  const serverConnection = useContext(TransportContext);
  const terminalTheme = useContext(TerminalThemeContext);
  const selectedTheme = flavorEntries.find(
    (entry) => entry[0] === terminalTheme.value,
  )![1];
  ansicolor.rgb = {
    black: [0, 0, 0],
    darkGray: rgbToArray(
      selectedTheme.dark
        ? selectedTheme.colors.surface1.rgb
        : selectedTheme.colors.subtext1.rgb,
    ),
    lightGray: rgbToArray(
      selectedTheme.dark
        ? selectedTheme.colors.surface2.rgb
        : selectedTheme.colors.subtext0.rgb,
    ),
    white: rgbToArray(selectedTheme.colors.text.rgb),

    red: rgbToArray(selectedTheme.colors.red.rgb),
    lightRed: rgbToArray(selectedTheme.colors.red.rgb),

    green: rgbToArray(selectedTheme.colors.green.rgb),
    lightGreen: rgbToArray(selectedTheme.colors.green.rgb),

    yellow: rgbToArray(selectedTheme.colors.yellow.rgb),
    lightYellow: rgbToArray(selectedTheme.colors.yellow.rgb),

    blue: rgbToArray(selectedTheme.colors.blue.rgb),
    lightBlue: rgbToArray(selectedTheme.colors.blue.rgb),

    magenta: rgbToArray(selectedTheme.colors.pink.rgb),
    lightMagenta: rgbToArray(selectedTheme.colors.pink.rgb),

    cyan: rgbToArray(selectedTheme.colors.teal.rgb),
    lightCyan: rgbToArray(selectedTheme.colors.teal.rgb),
  };

  useEffect(() => {
    if (gotPrevious) {
      return;
    }

    const abortController = new AbortController();
    const logsService = new LogsServiceClient(serverConnection);
    void logsService
      .getPrevious(
        {
          count: 300,
        },
        {
          abort: abortController.signal,
        },
      )
      .then((response) => {
        for (const line of response.response.messages) {
          const randomString = Math.random().toString(36).substring(7);
          setEntries((prev) => [...prev, [randomString, line] as const]);
        }
        setGotPrevious(true);
      });

    return () => {
      abortController.abort();
    };
  }, [gotPrevious, serverConnection]);

  useEffect(() => {
    const abortController = new AbortController();
    const logsService = new LogsServiceClient(serverConnection);
    logsService
      .subscribe(
        {},
        {
          abort: abortController.signal,
        },
      )
      .responses.onMessage((message) => {
        for (const line of message.message.split('\n')) {
          const randomString = Math.random().toString(36).substring(7);
          setEntries((prev) => [...prev, [randomString, line] as const]);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [serverConnection]);

  return (
    <ScrollArea
      className="md:h-[calc(100vh-8rem)] w-full pr-4 font-mono rounded-md"
      style={
        {
          backgroundColor: selectedTheme.colors.base.hex,
          '--border': hslToString(selectedTheme.colors.surface0.hsl),
        } as CSSProperties
      }
    >
      <div className="whitespace-pre-wrap pl-1 h-full">
        {entries.map((entry) => {
          return (
            <div key={entry[0]}>
              {parse(entry[1]).spans.map((span, index) => {
                return (
                  <span
                    STYLE={
                      span.css === ''
                        ? `color: hsl(${hslToString(selectedTheme.colors.text.hsl)})`
                        : span.css
                    }
                    key={index}
                  >
                    {span.text}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};
