// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "com/soulfiremc/grpc/generated/logs.proto" (package "com.soulfiremc.grpc.generated", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { LogsService } from "./logs";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { LogResponse } from "./logs";
import type { LogRequest } from "./logs";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.LogsService
 */
export interface ILogsServiceClient {
    /**
     * @generated from protobuf rpc: subscribe(com.soulfiremc.grpc.generated.LogRequest) returns (stream com.soulfiremc.grpc.generated.LogResponse);
     */
    subscribe(input: LogRequest, options?: RpcOptions): ServerStreamingCall<LogRequest, LogResponse>;
}
/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.LogsService
 */
export class LogsServiceClient implements ILogsServiceClient, ServiceInfo {
    typeName = LogsService.typeName;
    methods = LogsService.methods;
    options = LogsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: subscribe(com.soulfiremc.grpc.generated.LogRequest) returns (stream com.soulfiremc.grpc.generated.LogResponse);
     */
    subscribe(input: LogRequest, options?: RpcOptions): ServerStreamingCall<LogRequest, LogResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<LogRequest, LogResponse>("serverStreaming", this._transport, method, opt, input);
    }
}
