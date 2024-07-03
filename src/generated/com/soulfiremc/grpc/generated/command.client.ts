// @generated by protobuf-ts 2.9.4 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "com/soulfiremc/grpc/generated/command.proto" (package "com.soulfiremc.grpc.generated", syntax proto3)
// tslint:disable
import type {RpcOptions, RpcTransport, ServiceInfo, UnaryCall} from "@protobuf-ts/runtime-rpc";
import {stackIntercept} from "@protobuf-ts/runtime-rpc";
import type {CommandCompletionRequest, CommandCompletionResponse, CommandRequest, CommandResponse} from "./command";
import {CommandService} from "./command";

/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.CommandService
 */
export interface ICommandServiceClient {
  /**
   * @generated from protobuf rpc: executeCommand(com.soulfiremc.grpc.generated.CommandRequest) returns (com.soulfiremc.grpc.generated.CommandResponse);
   */
  executeCommand(input: CommandRequest, options?: RpcOptions): UnaryCall<CommandRequest, CommandResponse>;

  /**
   * @generated from protobuf rpc: tabCompleteCommand(com.soulfiremc.grpc.generated.CommandCompletionRequest) returns (com.soulfiremc.grpc.generated.CommandCompletionResponse);
   */
  tabCompleteCommand(input: CommandCompletionRequest, options?: RpcOptions): UnaryCall<CommandCompletionRequest, CommandCompletionResponse>;
}

/**
 * @generated from protobuf service com.soulfiremc.grpc.generated.CommandService
 */
export class CommandServiceClient implements ICommandServiceClient, ServiceInfo {
  typeName = CommandService.typeName;
  methods = CommandService.methods;
  options = CommandService.options;

  constructor(private readonly _transport: RpcTransport) {
  }

  /**
   * @generated from protobuf rpc: executeCommand(com.soulfiremc.grpc.generated.CommandRequest) returns (com.soulfiremc.grpc.generated.CommandResponse);
   */
  executeCommand(input: CommandRequest, options?: RpcOptions): UnaryCall<CommandRequest, CommandResponse> {
    const method = this.methods[0], opt = this._transport.mergeOptions(options);
    return stackIntercept<CommandRequest, CommandResponse>("unary", this._transport, method, opt, input);
  }

  /**
   * @generated from protobuf rpc: tabCompleteCommand(com.soulfiremc.grpc.generated.CommandCompletionRequest) returns (com.soulfiremc.grpc.generated.CommandCompletionResponse);
   */
  tabCompleteCommand(input: CommandCompletionRequest, options?: RpcOptions): UnaryCall<CommandCompletionRequest, CommandCompletionResponse> {
    const method = this.methods[1], opt = this._transport.mergeOptions(options);
    return stackIntercept<CommandCompletionRequest, CommandCompletionResponse>("unary", this._transport, method, opt, input);
  }
}
