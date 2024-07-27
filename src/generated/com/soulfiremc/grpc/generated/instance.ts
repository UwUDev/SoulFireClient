// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "com/soulfiremc/grpc/generated/instance.proto" (package "com.soulfiremc.grpc.generated", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { ProxyProto } from "./common";
import { MinecraftAccountProto } from "./common";
import { Value } from "../../../../google/protobuf/struct";
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.SettingsEntry
 */
export interface SettingsEntry {
    /**
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf field: google.protobuf.Value value = 2;
     */
    value?: Value;
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
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceConfig
 */
export interface InstanceConfig {
    /**
     * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.SettingsNamespace settings = 3;
     */
    settings: SettingsNamespace[];
    /**
     * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.MinecraftAccountProto accounts = 4;
     */
    accounts: MinecraftAccountProto[];
    /**
     * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.ProxyProto proxies = 5;
     */
    proxies: ProxyProto[];
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceCreateRequest
 */
export interface InstanceCreateRequest {
    /**
     * @generated from protobuf field: string friendlyName = 1;
     */
    friendlyName: string;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceCreateResponse
 */
export interface InstanceCreateResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceDeleteRequest
 */
export interface InstanceDeleteRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceDeleteResponse
 */
export interface InstanceDeleteResponse {
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceListRequest
 */
export interface InstanceListRequest {
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceListResponse
 */
export interface InstanceListResponse {
    /**
     * @generated from protobuf field: repeated com.soulfiremc.grpc.generated.InstanceListResponse.Instance instances = 1;
     */
    instances: InstanceListResponse_Instance[];
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceListResponse.Instance
 */
export interface InstanceListResponse_Instance {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string friendlyName = 2;
     */
    friendlyName: string;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceInfoRequest
 */
export interface InstanceInfoRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceInfoResponse
 */
export interface InstanceInfoResponse {
    /**
     * @generated from protobuf field: string friendlyName = 1;
     */
    friendlyName: string;
    /**
     * @generated from protobuf field: com.soulfiremc.grpc.generated.InstanceConfig config = 2;
     */
    config?: InstanceConfig;
    /**
     * @generated from protobuf field: com.soulfiremc.grpc.generated.InstanceState state = 3;
     */
    state: InstanceState;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameRequest
 */
export interface InstanceUpdateFriendlyNameRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string friendlyName = 2;
     */
    friendlyName: string;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameResponse
 */
export interface InstanceUpdateFriendlyNameResponse {
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceUpdateConfigRequest
 */
export interface InstanceUpdateConfigRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: com.soulfiremc.grpc.generated.InstanceConfig config = 2;
     */
    config?: InstanceConfig;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceUpdateConfigResponse
 */
export interface InstanceUpdateConfigResponse {
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceStateChangeRequest
 */
export interface InstanceStateChangeRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: com.soulfiremc.grpc.generated.InstanceState state = 2;
     */
    state: InstanceState;
}
/**
 * @generated from protobuf message com.soulfiremc.grpc.generated.InstanceStateChangeResponse
 */
export interface InstanceStateChangeResponse {
}
/**
 * @generated from protobuf enum com.soulfiremc.grpc.generated.InstanceState
 */
export enum InstanceState {
    /**
     * @generated from protobuf enum value: STOPPED = 0;
     */
    STOPPED = 0,
    /**
     * @generated from protobuf enum value: RUNNING = 1;
     */
    RUNNING = 1,
    /**
     * @generated from protobuf enum value: PAUSED = 2;
     */
    PAUSED = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class SettingsEntry$Type extends MessageType<SettingsEntry> {
    constructor() {
        super("com.soulfiremc.grpc.generated.SettingsEntry", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "message", T: () => Value }
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
            { no: 1, name: "namespace", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SettingsEntry }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.SettingsNamespace
 */
export const SettingsNamespace = new SettingsNamespace$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceConfig$Type extends MessageType<InstanceConfig> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceConfig", [
            { no: 3, name: "settings", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SettingsNamespace },
            { no: 4, name: "accounts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MinecraftAccountProto },
            { no: 5, name: "proxies", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ProxyProto }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceConfig
 */
export const InstanceConfig = new InstanceConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceCreateRequest$Type extends MessageType<InstanceCreateRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceCreateRequest", [
            { no: 1, name: "friendlyName", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceCreateRequest
 */
export const InstanceCreateRequest = new InstanceCreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceCreateResponse$Type extends MessageType<InstanceCreateResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceCreateResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceCreateResponse
 */
export const InstanceCreateResponse = new InstanceCreateResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceDeleteRequest$Type extends MessageType<InstanceDeleteRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceDeleteRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceDeleteRequest
 */
export const InstanceDeleteRequest = new InstanceDeleteRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceDeleteResponse$Type extends MessageType<InstanceDeleteResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceDeleteResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceDeleteResponse
 */
export const InstanceDeleteResponse = new InstanceDeleteResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceListRequest$Type extends MessageType<InstanceListRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceListRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceListRequest
 */
export const InstanceListRequest = new InstanceListRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceListResponse$Type extends MessageType<InstanceListResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceListResponse", [
            { no: 1, name: "instances", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InstanceListResponse_Instance }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceListResponse
 */
export const InstanceListResponse = new InstanceListResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceListResponse_Instance$Type extends MessageType<InstanceListResponse_Instance> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceListResponse.Instance", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "friendlyName", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceListResponse.Instance
 */
export const InstanceListResponse_Instance = new InstanceListResponse_Instance$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceInfoRequest$Type extends MessageType<InstanceInfoRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceInfoRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceInfoRequest
 */
export const InstanceInfoRequest = new InstanceInfoRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceInfoResponse$Type extends MessageType<InstanceInfoResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceInfoResponse", [
            { no: 1, name: "friendlyName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "config", kind: "message", T: () => InstanceConfig },
            { no: 3, name: "state", kind: "enum", T: () => ["com.soulfiremc.grpc.generated.InstanceState", InstanceState] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceInfoResponse
 */
export const InstanceInfoResponse = new InstanceInfoResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceUpdateFriendlyNameRequest$Type extends MessageType<InstanceUpdateFriendlyNameRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "friendlyName", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameRequest
 */
export const InstanceUpdateFriendlyNameRequest = new InstanceUpdateFriendlyNameRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceUpdateFriendlyNameResponse$Type extends MessageType<InstanceUpdateFriendlyNameResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameResponse
 */
export const InstanceUpdateFriendlyNameResponse = new InstanceUpdateFriendlyNameResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceUpdateConfigRequest$Type extends MessageType<InstanceUpdateConfigRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceUpdateConfigRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "config", kind: "message", T: () => InstanceConfig }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceUpdateConfigRequest
 */
export const InstanceUpdateConfigRequest = new InstanceUpdateConfigRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceUpdateConfigResponse$Type extends MessageType<InstanceUpdateConfigResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceUpdateConfigResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceUpdateConfigResponse
 */
export const InstanceUpdateConfigResponse = new InstanceUpdateConfigResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceStateChangeRequest$Type extends MessageType<InstanceStateChangeRequest> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceStateChangeRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "state", kind: "enum", T: () => ["com.soulfiremc.grpc.generated.InstanceState", InstanceState] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceStateChangeRequest
 */
export const InstanceStateChangeRequest = new InstanceStateChangeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstanceStateChangeResponse$Type extends MessageType<InstanceStateChangeResponse> {
    constructor() {
        super("com.soulfiremc.grpc.generated.InstanceStateChangeResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message com.soulfiremc.grpc.generated.InstanceStateChangeResponse
 */
export const InstanceStateChangeResponse = new InstanceStateChangeResponse$Type();
/**
 * @generated ServiceType for protobuf service com.soulfiremc.grpc.generated.InstanceService
 */
export const InstanceService = new ServiceType("com.soulfiremc.grpc.generated.InstanceService", [
    { name: "createInstance", options: {}, I: InstanceCreateRequest, O: InstanceCreateResponse },
    { name: "deleteInstance", options: {}, I: InstanceDeleteRequest, O: InstanceDeleteResponse },
    { name: "listInstances", options: {}, I: InstanceListRequest, O: InstanceListResponse },
    { name: "getInstanceInfo", options: {}, I: InstanceInfoRequest, O: InstanceInfoResponse },
    { name: "updateInstanceFriendlyName", options: {}, I: InstanceUpdateFriendlyNameRequest, O: InstanceUpdateFriendlyNameResponse },
    { name: "updateInstanceConfig", options: {}, I: InstanceUpdateConfigRequest, O: InstanceUpdateConfigResponse },
    { name: "changeInstanceState", options: {}, I: InstanceStateChangeRequest, O: InstanceStateChangeResponse }
]);
