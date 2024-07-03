// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "com/soulfiremc/grpc/generated/attack.proto" (package "com.soulfiremc.grpc.generated", syntax proto3)
// tslint:disable
import {ServiceType} from "@protobuf-ts/runtime-rpc";
import {MessageType} from "@protobuf-ts/runtime";
import {MinecraftAccountProto, ProxyProto} from "./common";
import {Struct} from "../../../../google/protobuf/struct";

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.SettingsEntry
 */
export interface SettingsEntry {
  /**
   * @generated from protobuf field: string key = 1;
   */
  key: string;
  /**
   * @generated from protobuf field: google.protobuf.Struct value = 2;
   */
  value?: Struct;
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.SettingsNamespace
 */
export interface SettingsNamespace {
  /**
   * @generated from protobuf field: string namespace = 1;
   */
  namespace: string;
  /**
   * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.SettingsEntry entries = 2;
   */
  entries: SettingsEntry[];
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackStartRequest
 */
export interface AttackStartRequest {
  /**
   * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.SettingsNamespace settings = 7;
   */
  settings: SettingsNamespace[];
  /**
   * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.MinecraftAccountProto accounts = 2;
   */
  accounts: MinecraftAccountProto[];
  /**
   * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.ProxyProto proxies = 3;
   */
  proxies: ProxyProto[];
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackStartResponse
 */
export interface AttackStartResponse {
  /**
   * @generated from protobuf field: int32 id = 1;
   */
  id: number;
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackStateToggleRequest
 */
export interface AttackStateToggleRequest {
  /**
   * @generated from protobuf field: int32 id = 1;
   */
  id: number;
  /**
   * @generated from protobuf field: com.soulfiremc.grpc.generated.AttackStateToggleRequest.State newState = 2;
   */
  newState: AttackStateToggleRequest_State;
}

/**
 * @generated from protobuf enum com.soulfiremc.grpc.generated.AttackStateToggleRequest.State
 */
export enum AttackStateToggleRequest_State {
  /**
   * @generated from protobuf enum value: PAUSE = 0;
   */
  PAUSE = 0,
  /**
   * @generated from protobuf enum value: RESUME = 1;
   */
  RESUME = 1
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackStateToggleResponse
 */
export interface AttackStateToggleResponse {
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackStopRequest
 */
export interface AttackStopRequest {
  /**
   * @generated from protobuf field: int32 id = 1;
   */
  id: number;
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackStopResponse
 */
export interface AttackStopResponse {
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackListRequest
 */
export interface AttackListRequest {
}

/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.AttackListResponse
 */
export interface AttackListResponse {
  /**
   * @generated from protobuf field: repeated int32 ids = 1;
   */
  ids: number[];
}

// @generated message type with reflection information, may provide speed optimized methods
class SettingsEntry$Type extends MessageType<SettingsEntry> {
  constructor() {
    super("com.soulfiremc.grpc.generated.SettingsEntry", [
      {no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/},
      {no: 2, name: "value", kind: "message", T: () => Struct}
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.SettingsEntry
 */
export const SettingsEntry = new SettingsEntry$Type();

// @generated message type with reflection information, may provide speed optimized methods
class SettingsNamespace$Type extends MessageType<SettingsNamespace> {
  constructor() {
    super("com.soulfiremc.grpc.generated.SettingsNamespace", [
      {no: 1, name: "namespace", kind: "scalar", T: 9 /*ScalarType.STRING*/},
      {no: 2, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SettingsEntry}
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.SettingsNamespace
 */
export const SettingsNamespace = new SettingsNamespace$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackStartRequest$Type extends MessageType<AttackStartRequest> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackStartRequest", [
      {no: 7, name: "settings", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SettingsNamespace},
      {no: 2, name: "accounts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MinecraftAccountProto},
      {no: 3, name: "proxies", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProxyProto}
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackStartRequest
 */
export const AttackStartRequest = new AttackStartRequest$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackStartResponse$Type extends MessageType<AttackStartResponse> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackStartResponse", [
      {no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/}
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackStartResponse
 */
export const AttackStartResponse = new AttackStartResponse$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackStateToggleRequest$Type extends MessageType<AttackStateToggleRequest> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackStateToggleRequest", [
      {no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/},
      {
        no: 2,
        name: "newState",
        kind: "enum",
        T: () => ["com.soulfiremc.grpc.generated.AttackStateToggleRequest.State", AttackStateToggleRequest_State]
      }
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackStateToggleRequest
 */
export const AttackStateToggleRequest = new AttackStateToggleRequest$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackStateToggleResponse$Type extends MessageType<AttackStateToggleResponse> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackStateToggleResponse", []);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackStateToggleResponse
 */
export const AttackStateToggleResponse = new AttackStateToggleResponse$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackStopRequest$Type extends MessageType<AttackStopRequest> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackStopRequest", [
      {no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/}
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackStopRequest
 */
export const AttackStopRequest = new AttackStopRequest$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackStopResponse$Type extends MessageType<AttackStopResponse> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackStopResponse", []);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackStopResponse
 */
export const AttackStopResponse = new AttackStopResponse$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackListRequest$Type extends MessageType<AttackListRequest> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackListRequest", []);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackListRequest
 */
export const AttackListRequest = new AttackListRequest$Type();

// @generated message type with reflection information, may provide speed optimized methods
class AttackListResponse$Type extends MessageType<AttackListResponse> {
  constructor() {
    super("com.soulfiremc.grpc.generated.AttackListResponse", [
      {no: 1, name: "ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/}
    ]);
  }
}

/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.AttackListResponse
 */
export const AttackListResponse = new AttackListResponse$Type();
/**
 * @generated ServiceType for protobuf service com.soulfiremc.grpc.generated.AttackService
 */
export const AttackService = new ServiceType("com.soulfiremc.grpc.generated.AttackService", [
  {name: "startAttack", options: {}, I: AttackStartRequest, O: AttackStartResponse},
  {name: "toggleAttackState", options: {}, I: AttackStateToggleRequest, O: AttackStateToggleResponse},
  {name: "stopAttack", options: {}, I: AttackStopRequest, O: AttackStopResponse},
  {name: "listAttacks", options: {}, I: AttackListRequest, O: AttackListResponse}
]);
