// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "com/soulfiremc/grpc/generated/config.proto" (package "com.soulfiremc.grpc.generated", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ConfigService } from "./config";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ClientDataResponse } from "./config";
import type { ClientDataRequest } from "./config";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.ConfigService
 */
export interface IConfigServiceClient {
    /**
     * @generated from protobuf rpc: getClientData(com.soulfiremc.grpc.generated.ClientDataRequest) returns (com.soulfiremc.grpc.generated.ClientDataResponse);
     */
    getClientData(input: ClientDataRequest, options?: RpcOptions): UnaryCall<ClientDataRequest, ClientDataResponse>;
}
/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.ConfigService
 */
export class ConfigServiceClient implements IConfigServiceClient, ServiceInfo {
    typeName = ConfigService.typeName;
    methods = ConfigService.methods;
    options = ConfigService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: getClientData(com.soulfiremc.grpc.generated.ClientDataRequest) returns (com.soulfiremc.grpc.generated.ClientDataResponse);
     */
    getClientData(input: ClientDataRequest, options?: RpcOptions): UnaryCall<ClientDataRequest, ClientDataResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ClientDataRequest, ClientDataResponse>("unary", this._transport, method, opt, input);
    }
}