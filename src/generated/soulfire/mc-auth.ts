// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "soulfire/mc-auth.proto" (package "soulfire.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { AccountTypeDeviceCode } from "./common";
import { MinecraftAccountProto } from "./common";
import { ProxyProto } from "./common";
import { AccountTypeCredentials } from "./common";
/**
 * @generated from protobuf message soulfire.v1.CredentialsAuthRequest
 */
export interface CredentialsAuthRequest {
    /**
     * @generated from protobuf field: soulfire.v1.AccountTypeCredentials service = 1;
     */
    service: AccountTypeCredentials;
    /**
     * @generated from protobuf field: optional soulfire.v1.ProxyProto proxy = 2;
     */
    proxy?: ProxyProto;
    /**
     * @generated from protobuf field: int32 maxConcurrency = 3;
     */
    maxConcurrency: number;
    /**
     * @generated from protobuf field: repeated string payload = 4;
     */
    payload: string[];
}
/**
 * @generated from protobuf message soulfire.v1.CredentialsAuthResponse
 */
export interface CredentialsAuthResponse {
    /**
     * @generated from protobuf field: repeated soulfire.v1.MinecraftAccountProto account = 1;
     */
    account: MinecraftAccountProto[];
}
/**
 * @generated from protobuf message soulfire.v1.DeviceCodeAuthRequest
 */
export interface DeviceCodeAuthRequest {
    /**
     * @generated from protobuf field: soulfire.v1.AccountTypeDeviceCode service = 1;
     */
    service: AccountTypeDeviceCode;
    /**
     * @generated from protobuf field: optional soulfire.v1.ProxyProto proxy = 2;
     */
    proxy?: ProxyProto;
}
/**
 * @generated from protobuf message soulfire.v1.DeviceCode
 */
export interface DeviceCode {
    /**
     * @generated from protobuf field: string deviceCode = 1;
     */
    deviceCode: string;
    /**
     * @generated from protobuf field: string userCode = 2;
     */
    userCode: string;
    /**
     * @generated from protobuf field: string verificationUri = 3;
     */
    verificationUri: string;
    /**
     * @generated from protobuf field: string directVerificationUri = 4;
     */
    directVerificationUri: string;
}
/**
 * @generated from protobuf message soulfire.v1.DeviceCodeAuthResponse
 */
export interface DeviceCodeAuthResponse {
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "account";
        /**
         * @generated from protobuf field: soulfire.v1.MinecraftAccountProto account = 1;
         */
        account: MinecraftAccountProto;
    } | {
        oneofKind: "deviceCode";
        /**
         * @generated from protobuf field: soulfire.v1.DeviceCode deviceCode = 2;
         */
        deviceCode: DeviceCode;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message soulfire.v1.RefreshRequest
 */
export interface RefreshRequest {
    /**
     * @generated from protobuf field: soulfire.v1.MinecraftAccountProto account = 1;
     */
    account?: MinecraftAccountProto;
    /**
     * @generated from protobuf field: optional soulfire.v1.ProxyProto proxy = 2;
     */
    proxy?: ProxyProto;
}
/**
 * @generated from protobuf message soulfire.v1.RefreshResponse
 */
export interface RefreshResponse {
    /**
     * @generated from protobuf field: soulfire.v1.MinecraftAccountProto account = 1;
     */
    account?: MinecraftAccountProto;
}
// @generated message type with reflection information, may provide speed optimized methods
class CredentialsAuthRequest$Type extends MessageType<CredentialsAuthRequest> {
    constructor() {
        super("soulfire.v1.CredentialsAuthRequest", [
            { no: 1, name: "service", kind: "enum", T: () => ["soulfire.v1.AccountTypeCredentials", AccountTypeCredentials] },
            { no: 2, name: "proxy", kind: "message", T: () => ProxyProto },
            { no: 3, name: "maxConcurrency", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "payload", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.CredentialsAuthRequest
 */
export const CredentialsAuthRequest = new CredentialsAuthRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CredentialsAuthResponse$Type extends MessageType<CredentialsAuthResponse> {
    constructor() {
        super("soulfire.v1.CredentialsAuthResponse", [
            { no: 1, name: "account", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MinecraftAccountProto }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.CredentialsAuthResponse
 */
export const CredentialsAuthResponse = new CredentialsAuthResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeviceCodeAuthRequest$Type extends MessageType<DeviceCodeAuthRequest> {
    constructor() {
        super("soulfire.v1.DeviceCodeAuthRequest", [
            { no: 1, name: "service", kind: "enum", T: () => ["soulfire.v1.AccountTypeDeviceCode", AccountTypeDeviceCode] },
            { no: 2, name: "proxy", kind: "message", T: () => ProxyProto }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.DeviceCodeAuthRequest
 */
export const DeviceCodeAuthRequest = new DeviceCodeAuthRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeviceCode$Type extends MessageType<DeviceCode> {
    constructor() {
        super("soulfire.v1.DeviceCode", [
            { no: 1, name: "deviceCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "userCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "verificationUri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "directVerificationUri", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.DeviceCode
 */
export const DeviceCode = new DeviceCode$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeviceCodeAuthResponse$Type extends MessageType<DeviceCodeAuthResponse> {
    constructor() {
        super("soulfire.v1.DeviceCodeAuthResponse", [
            { no: 1, name: "account", kind: "message", oneof: "data", T: () => MinecraftAccountProto },
            { no: 2, name: "deviceCode", kind: "message", oneof: "data", T: () => DeviceCode }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.DeviceCodeAuthResponse
 */
export const DeviceCodeAuthResponse = new DeviceCodeAuthResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshRequest$Type extends MessageType<RefreshRequest> {
    constructor() {
        super("soulfire.v1.RefreshRequest", [
            { no: 1, name: "account", kind: "message", T: () => MinecraftAccountProto },
            { no: 2, name: "proxy", kind: "message", T: () => ProxyProto }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.RefreshRequest
 */
export const RefreshRequest = new RefreshRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RefreshResponse$Type extends MessageType<RefreshResponse> {
    constructor() {
        super("soulfire.v1.RefreshResponse", [
            { no: 1, name: "account", kind: "message", T: () => MinecraftAccountProto }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.RefreshResponse
 */
export const RefreshResponse = new RefreshResponse$Type();
/**
 * @generated ServiceType for protobuf service soulfire.v1.MCAuthService
 */
export const MCAuthService = new ServiceType("soulfire.v1.MCAuthService", [
    { name: "loginCredentials", options: {}, I: CredentialsAuthRequest, O: CredentialsAuthResponse },
    { name: "loginDeviceCode", serverStreaming: true, options: {}, I: DeviceCodeAuthRequest, O: DeviceCodeAuthResponse },
    { name: "refresh", options: {}, I: RefreshRequest, O: RefreshResponse }
]);
