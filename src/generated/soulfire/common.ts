// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "soulfire/common.proto" (package "soulfire.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Value } from "../google/protobuf/struct";
import { Struct } from "../google/protobuf/struct";
/**
 * @generated from protobuf message soulfire.v1.ProxyProto
 */
export interface ProxyProto {
    /**
     * @generated from protobuf field: soulfire.v1.ProxyProto.Type type = 1;
     */
    type: ProxyProto_Type;
    /**
     * @generated from protobuf field: string address = 2;
     */
    address: string;
    /**
     * @generated from protobuf field: optional string username = 3;
     */
    username?: string;
    /**
     * @generated from protobuf field: optional string password = 4;
     */
    password?: string;
}
/**
 * @generated from protobuf enum soulfire.v1.ProxyProto.Type
 */
export enum ProxyProto_Type {
    /**
     * @generated from protobuf enum value: HTTP = 0;
     */
    HTTP = 0,
    /**
     * @generated from protobuf enum value: SOCKS4 = 1;
     */
    SOCKS4 = 1,
    /**
     * @generated from protobuf enum value: SOCKS5 = 2;
     */
    SOCKS5 = 2
}
/**
 * @generated from protobuf message soulfire.v1.MinecraftAccountProto
 */
export interface MinecraftAccountProto {
    /**
     * @generated from protobuf field: soulfire.v1.MinecraftAccountProto.AccountTypeProto type = 1;
     */
    type: MinecraftAccountProto_AccountTypeProto;
    /**
     * @generated from protobuf field: string profileId = 2;
     */
    profileId: string;
    /**
     * @generated from protobuf field: string lastKnownName = 3;
     */
    lastKnownName: string;
    /**
     * @generated from protobuf oneof: accountData
     */
    accountData: {
        oneofKind: "onlineSimpleJavaData";
        /**
         * @generated from protobuf field: soulfire.v1.MinecraftAccountProto.OnlineSimpleJavaData onlineSimpleJavaData = 4;
         */
        onlineSimpleJavaData: MinecraftAccountProto_OnlineSimpleJavaData;
    } | {
        oneofKind: "onlineChainJavaData";
        /**
         * @generated from protobuf field: soulfire.v1.MinecraftAccountProto.OnlineChainJavaData onlineChainJavaData = 5;
         */
        onlineChainJavaData: MinecraftAccountProto_OnlineChainJavaData;
    } | {
        oneofKind: "offlineJavaData";
        /**
         * @generated from protobuf field: soulfire.v1.MinecraftAccountProto.OfflineJavaData offlineJavaData = 6;
         */
        offlineJavaData: MinecraftAccountProto_OfflineJavaData;
    } | {
        oneofKind: "bedrockData";
        /**
         * @generated from protobuf field: soulfire.v1.MinecraftAccountProto.BedrockData bedrockData = 7;
         */
        bedrockData: MinecraftAccountProto_BedrockData;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message soulfire.v1.MinecraftAccountProto.OnlineSimpleJavaData
 */
export interface MinecraftAccountProto_OnlineSimpleJavaData {
    /**
     * @generated from protobuf field: string authToken = 1;
     */
    authToken: string;
    /**
     * @generated from protobuf field: int64 tokenExpireAt = 2;
     */
    tokenExpireAt: string;
}
/**
 * @generated from protobuf message soulfire.v1.MinecraftAccountProto.OnlineChainJavaData
 */
export interface MinecraftAccountProto_OnlineChainJavaData {
    /**
     * @generated from protobuf field: string authToken = 1;
     */
    authToken: string;
    /**
     * @generated from protobuf field: int64 tokenExpireAt = 2;
     */
    tokenExpireAt: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct authChain = 3;
     */
    authChain?: Struct;
}
/**
 * @generated from protobuf message soulfire.v1.MinecraftAccountProto.OfflineJavaData
 */
export interface MinecraftAccountProto_OfflineJavaData {
}
/**
 * @generated from protobuf message soulfire.v1.MinecraftAccountProto.BedrockData
 */
export interface MinecraftAccountProto_BedrockData {
    /**
     * @generated from protobuf field: string mojangJwt = 1;
     */
    mojangJwt: string;
    /**
     * @generated from protobuf field: string identityJwt = 2;
     */
    identityJwt: string;
    /**
     * @generated from protobuf field: string publicKey = 3;
     */
    publicKey: string;
    /**
     * @generated from protobuf field: string privateKey = 4;
     */
    privateKey: string;
    /**
     * @generated from protobuf field: string deviceId = 5;
     */
    deviceId: string;
    /**
     * @generated from protobuf field: string playFabId = 6;
     */
    playFabId: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct authChain = 7;
     */
    authChain?: Struct;
}
/**
 * @generated from protobuf enum soulfire.v1.MinecraftAccountProto.AccountTypeProto
 */
export enum MinecraftAccountProto_AccountTypeProto {
    /**
     * @generated from protobuf enum value: MICROSOFT_JAVA = 0;
     */
    MICROSOFT_JAVA = 0,
    /**
     * @generated from protobuf enum value: MICROSOFT_BEDROCK = 1;
     */
    MICROSOFT_BEDROCK = 1,
    /**
     * @generated from protobuf enum value: EASY_MC = 2;
     */
    EASY_MC = 2,
    /**
     * @generated from protobuf enum value: THE_ALTENING = 3;
     */
    THE_ALTENING = 3,
    /**
     * @generated from protobuf enum value: OFFLINE = 4;
     */
    OFFLINE = 4
}
/**
 * @generated from protobuf message soulfire.v1.SettingsEntry
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
 * @generated from protobuf message soulfire.v1.SettingsNamespace
 */
export interface SettingsNamespace {
    /**
     * @generated from protobuf field: string namespace = 1;
     */
    namespace: string;
    /**
     * @generated from protobuf field: repeated soulfire.v1.SettingsEntry entries = 2;
     */
    entries: SettingsEntry[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ProxyProto$Type extends MessageType<ProxyProto> {
    constructor() {
        super("soulfire.v1.ProxyProto", [
            { no: 1, name: "type", kind: "enum", T: () => ["soulfire.v1.ProxyProto.Type", ProxyProto_Type] },
            { no: 2, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "username", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "password", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.ProxyProto
 */
export const ProxyProto = new ProxyProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MinecraftAccountProto$Type extends MessageType<MinecraftAccountProto> {
    constructor() {
        super("soulfire.v1.MinecraftAccountProto", [
            { no: 1, name: "type", kind: "enum", T: () => ["soulfire.v1.MinecraftAccountProto.AccountTypeProto", MinecraftAccountProto_AccountTypeProto] },
            { no: 2, name: "profileId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "lastKnownName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "onlineSimpleJavaData", kind: "message", oneof: "accountData", T: () => MinecraftAccountProto_OnlineSimpleJavaData },
            { no: 5, name: "onlineChainJavaData", kind: "message", oneof: "accountData", T: () => MinecraftAccountProto_OnlineChainJavaData },
            { no: 6, name: "offlineJavaData", kind: "message", oneof: "accountData", T: () => MinecraftAccountProto_OfflineJavaData },
            { no: 7, name: "bedrockData", kind: "message", oneof: "accountData", T: () => MinecraftAccountProto_BedrockData }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.MinecraftAccountProto
 */
export const MinecraftAccountProto = new MinecraftAccountProto$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MinecraftAccountProto_OnlineSimpleJavaData$Type extends MessageType<MinecraftAccountProto_OnlineSimpleJavaData> {
    constructor() {
        super("soulfire.v1.MinecraftAccountProto.OnlineSimpleJavaData", [
            { no: 1, name: "authToken", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "tokenExpireAt", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.MinecraftAccountProto.OnlineSimpleJavaData
 */
export const MinecraftAccountProto_OnlineSimpleJavaData = new MinecraftAccountProto_OnlineSimpleJavaData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MinecraftAccountProto_OnlineChainJavaData$Type extends MessageType<MinecraftAccountProto_OnlineChainJavaData> {
    constructor() {
        super("soulfire.v1.MinecraftAccountProto.OnlineChainJavaData", [
            { no: 1, name: "authToken", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "tokenExpireAt", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "authChain", kind: "message", T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.MinecraftAccountProto.OnlineChainJavaData
 */
export const MinecraftAccountProto_OnlineChainJavaData = new MinecraftAccountProto_OnlineChainJavaData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MinecraftAccountProto_OfflineJavaData$Type extends MessageType<MinecraftAccountProto_OfflineJavaData> {
    constructor() {
        super("soulfire.v1.MinecraftAccountProto.OfflineJavaData", []);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.MinecraftAccountProto.OfflineJavaData
 */
export const MinecraftAccountProto_OfflineJavaData = new MinecraftAccountProto_OfflineJavaData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MinecraftAccountProto_BedrockData$Type extends MessageType<MinecraftAccountProto_BedrockData> {
    constructor() {
        super("soulfire.v1.MinecraftAccountProto.BedrockData", [
            { no: 1, name: "mojangJwt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "identityJwt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "publicKey", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "privateKey", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "deviceId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "playFabId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "authChain", kind: "message", T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.MinecraftAccountProto.BedrockData
 */
export const MinecraftAccountProto_BedrockData = new MinecraftAccountProto_BedrockData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SettingsEntry$Type extends MessageType<SettingsEntry> {
    constructor() {
        super("soulfire.v1.SettingsEntry", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "message", T: () => Value }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.SettingsEntry
 */
export const SettingsEntry = new SettingsEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SettingsNamespace$Type extends MessageType<SettingsNamespace> {
    constructor() {
        super("soulfire.v1.SettingsNamespace", [
            { no: 1, name: "namespace", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SettingsEntry }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.SettingsNamespace
 */
export const SettingsNamespace = new SettingsNamespace$Type();
