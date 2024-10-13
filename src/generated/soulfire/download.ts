// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "soulfire/download.proto" (package "soulfire.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { ProxyProto } from "./common";
/**
 * @generated from protobuf message soulfire.v1.HeaderPair
 */
export interface HeaderPair {
    /**
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf field: string value = 2;
     */
    value: string;
}
/**
 * @generated from protobuf message soulfire.v1.DownloadRequest
 */
export interface DownloadRequest {
    /**
     * @generated from protobuf field: string uri = 1;
     */
    uri: string;
    /**
     * @generated from protobuf field: repeated soulfire.v1.HeaderPair headers = 2;
     */
    headers: HeaderPair[];
    /**
     * @generated from protobuf field: optional soulfire.v1.ProxyProto proxy = 3;
     */
    proxy?: ProxyProto;
}
/**
 * @generated from protobuf message soulfire.v1.DownloadResponse
 */
export interface DownloadResponse {
    /**
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from protobuf field: repeated soulfire.v1.HeaderPair headers = 2;
     */
    headers: HeaderPair[];
    /**
     * @generated from protobuf field: int32 statusCode = 3;
     */
    statusCode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HeaderPair$Type extends MessageType<HeaderPair> {
    constructor() {
        super("soulfire.v1.HeaderPair", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.HeaderPair
 */
export const HeaderPair = new HeaderPair$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DownloadRequest$Type extends MessageType<DownloadRequest> {
    constructor() {
        super("soulfire.v1.DownloadRequest", [
            { no: 1, name: "uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderPair },
            { no: 3, name: "proxy", kind: "message", T: () => ProxyProto }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.DownloadRequest
 */
export const DownloadRequest = new DownloadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DownloadResponse$Type extends MessageType<DownloadResponse> {
    constructor() {
        super("soulfire.v1.DownloadResponse", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderPair },
            { no: 3, name: "statusCode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message soulfire.v1.DownloadResponse
 */
export const DownloadResponse = new DownloadResponse$Type();
/**
 * @generated ServiceType for protobuf service soulfire.v1.DownloadService
 */
export const DownloadService = new ServiceType("soulfire.v1.DownloadService", [
    { name: "download", options: {}, I: DownloadRequest, O: DownloadResponse }
]);
