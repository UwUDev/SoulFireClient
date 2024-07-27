// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "com/soulfiremc/grpc/generated/instance.proto" (package "com.soulfiremc.grpc.generated", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { InstanceService } from "./instance";
import type { InstanceStateChangeResponse } from "./instance";
import type { InstanceStateChangeRequest } from "./instance";
import type { InstanceUpdateConfigResponse } from "./instance";
import type { InstanceUpdateConfigRequest } from "./instance";
import type { InstanceUpdateFriendlyNameResponse } from "./instance";
import type { InstanceUpdateFriendlyNameRequest } from "./instance";
import type { InstanceInfoResponse } from "./instance";
import type { InstanceInfoRequest } from "./instance";
import type { InstanceListResponse } from "./instance";
import type { InstanceListRequest } from "./instance";
import type { InstanceDeleteResponse } from "./instance";
import type { InstanceDeleteRequest } from "./instance";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { InstanceCreateResponse } from "./instance";
import type { InstanceCreateRequest } from "./instance";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.InstanceService
 */
export interface IInstanceServiceClient {
    /**
     * @generated from protobuf rpc: createInstance(com.soulfiremc.grpc.generated.InstanceCreateRequest) returns (com.soulfiremc.grpc.generated.InstanceCreateResponse);
     */
    createInstance(input: InstanceCreateRequest, options?: RpcOptions): UnaryCall<InstanceCreateRequest, InstanceCreateResponse>;
    /**
     * @generated from protobuf rpc: deleteInstance(com.soulfiremc.grpc.generated.InstanceDeleteRequest) returns (com.soulfiremc.grpc.generated.InstanceDeleteResponse);
     */
    deleteInstance(input: InstanceDeleteRequest, options?: RpcOptions): UnaryCall<InstanceDeleteRequest, InstanceDeleteResponse>;
    /**
     * @generated from protobuf rpc: listInstances(com.soulfiremc.grpc.generated.InstanceListRequest) returns (com.soulfiremc.grpc.generated.InstanceListResponse);
     */
    listInstances(input: InstanceListRequest, options?: RpcOptions): UnaryCall<InstanceListRequest, InstanceListResponse>;
    /**
     * @generated from protobuf rpc: getInstanceInfo(com.soulfiremc.grpc.generated.InstanceInfoRequest) returns (com.soulfiremc.grpc.generated.InstanceInfoResponse);
     */
    getInstanceInfo(input: InstanceInfoRequest, options?: RpcOptions): UnaryCall<InstanceInfoRequest, InstanceInfoResponse>;
    /**
     * @generated from protobuf rpc: updateInstanceFriendlyName(com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameRequest) returns (com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameResponse);
     */
    updateInstanceFriendlyName(input: InstanceUpdateFriendlyNameRequest, options?: RpcOptions): UnaryCall<InstanceUpdateFriendlyNameRequest, InstanceUpdateFriendlyNameResponse>;
    /**
     * @generated from protobuf rpc: updateInstanceConfig(com.soulfiremc.grpc.generated.InstanceUpdateConfigRequest) returns (com.soulfiremc.grpc.generated.InstanceUpdateConfigResponse);
     */
    updateInstanceConfig(input: InstanceUpdateConfigRequest, options?: RpcOptions): UnaryCall<InstanceUpdateConfigRequest, InstanceUpdateConfigResponse>;
    /**
     * @generated from protobuf rpc: changeInstanceState(com.soulfiremc.grpc.generated.InstanceStateChangeRequest) returns (com.soulfiremc.grpc.generated.InstanceStateChangeResponse);
     */
    changeInstanceState(input: InstanceStateChangeRequest, options?: RpcOptions): UnaryCall<InstanceStateChangeRequest, InstanceStateChangeResponse>;
}
/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.InstanceService
 */
export class InstanceServiceClient implements IInstanceServiceClient, ServiceInfo {
    typeName = InstanceService.typeName;
    methods = InstanceService.methods;
    options = InstanceService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: createInstance(com.soulfiremc.grpc.generated.InstanceCreateRequest) returns (com.soulfiremc.grpc.generated.InstanceCreateResponse);
     */
    createInstance(input: InstanceCreateRequest, options?: RpcOptions): UnaryCall<InstanceCreateRequest, InstanceCreateResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceCreateRequest, InstanceCreateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: deleteInstance(com.soulfiremc.grpc.generated.InstanceDeleteRequest) returns (com.soulfiremc.grpc.generated.InstanceDeleteResponse);
     */
    deleteInstance(input: InstanceDeleteRequest, options?: RpcOptions): UnaryCall<InstanceDeleteRequest, InstanceDeleteResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceDeleteRequest, InstanceDeleteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: listInstances(com.soulfiremc.grpc.generated.InstanceListRequest) returns (com.soulfiremc.grpc.generated.InstanceListResponse);
     */
    listInstances(input: InstanceListRequest, options?: RpcOptions): UnaryCall<InstanceListRequest, InstanceListResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceListRequest, InstanceListResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: getInstanceInfo(com.soulfiremc.grpc.generated.InstanceInfoRequest) returns (com.soulfiremc.grpc.generated.InstanceInfoResponse);
     */
    getInstanceInfo(input: InstanceInfoRequest, options?: RpcOptions): UnaryCall<InstanceInfoRequest, InstanceInfoResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceInfoRequest, InstanceInfoResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: updateInstanceFriendlyName(com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameRequest) returns (com.soulfiremc.grpc.generated.InstanceUpdateFriendlyNameResponse);
     */
    updateInstanceFriendlyName(input: InstanceUpdateFriendlyNameRequest, options?: RpcOptions): UnaryCall<InstanceUpdateFriendlyNameRequest, InstanceUpdateFriendlyNameResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceUpdateFriendlyNameRequest, InstanceUpdateFriendlyNameResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: updateInstanceConfig(com.soulfiremc.grpc.generated.InstanceUpdateConfigRequest) returns (com.soulfiremc.grpc.generated.InstanceUpdateConfigResponse);
     */
    updateInstanceConfig(input: InstanceUpdateConfigRequest, options?: RpcOptions): UnaryCall<InstanceUpdateConfigRequest, InstanceUpdateConfigResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceUpdateConfigRequest, InstanceUpdateConfigResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: changeInstanceState(com.soulfiremc.grpc.generated.InstanceStateChangeRequest) returns (com.soulfiremc.grpc.generated.InstanceStateChangeResponse);
     */
    changeInstanceState(input: InstanceStateChangeRequest, options?: RpcOptions): UnaryCall<InstanceStateChangeRequest, InstanceStateChangeResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstanceStateChangeRequest, InstanceStateChangeResponse>("unary", this._transport, method, opt, input);
    }
}
