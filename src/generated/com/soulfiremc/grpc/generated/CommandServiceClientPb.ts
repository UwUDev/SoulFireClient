/**
 * @fileoverview gRPC-Web generated client stub for com.soulfiremc.grpc.generated
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.0
// source: com/soulfiremc/grpc/generated/command.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as com_soulfiremc_grpc_generated_command_pb from '../../../../com/soulfiremc/grpc/generated/command_pb'; // proto import: "com/soulfiremc/grpc/generated/command.proto"


export class CommandServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorexecuteCommand = new grpcWeb.MethodDescriptor(
    '/com.soulfiremc.grpc.generated.CommandService/executeCommand',
    grpcWeb.MethodType.UNARY,
    com_soulfiremc_grpc_generated_command_pb.CommandRequest,
    com_soulfiremc_grpc_generated_command_pb.CommandResponse,
    (request: com_soulfiremc_grpc_generated_command_pb.CommandRequest) => {
      return request.serializeBinary();
    },
    com_soulfiremc_grpc_generated_command_pb.CommandResponse.deserializeBinary
  );

  executeCommand(
    request: com_soulfiremc_grpc_generated_command_pb.CommandRequest,
    metadata?: grpcWeb.Metadata | null): Promise<com_soulfiremc_grpc_generated_command_pb.CommandResponse>;

  executeCommand(
    request: com_soulfiremc_grpc_generated_command_pb.CommandRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: com_soulfiremc_grpc_generated_command_pb.CommandResponse) => void): grpcWeb.ClientReadableStream<com_soulfiremc_grpc_generated_command_pb.CommandResponse>;

  executeCommand(
    request: com_soulfiremc_grpc_generated_command_pb.CommandRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: com_soulfiremc_grpc_generated_command_pb.CommandResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/com.soulfiremc.grpc.generated.CommandService/executeCommand',
        request,
        metadata || {},
        this.methodDescriptorexecuteCommand,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/com.soulfiremc.grpc.generated.CommandService/executeCommand',
    request,
    metadata || {},
    this.methodDescriptorexecuteCommand);
  }

  methodDescriptortabCompleteCommand = new grpcWeb.MethodDescriptor(
    '/com.soulfiremc.grpc.generated.CommandService/tabCompleteCommand',
    grpcWeb.MethodType.UNARY,
    com_soulfiremc_grpc_generated_command_pb.CommandCompletionRequest,
    com_soulfiremc_grpc_generated_command_pb.CommandCompletionResponse,
    (request: com_soulfiremc_grpc_generated_command_pb.CommandCompletionRequest) => {
      return request.serializeBinary();
    },
    com_soulfiremc_grpc_generated_command_pb.CommandCompletionResponse.deserializeBinary
  );

  tabCompleteCommand(
    request: com_soulfiremc_grpc_generated_command_pb.CommandCompletionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<com_soulfiremc_grpc_generated_command_pb.CommandCompletionResponse>;

  tabCompleteCommand(
    request: com_soulfiremc_grpc_generated_command_pb.CommandCompletionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: com_soulfiremc_grpc_generated_command_pb.CommandCompletionResponse) => void): grpcWeb.ClientReadableStream<com_soulfiremc_grpc_generated_command_pb.CommandCompletionResponse>;

  tabCompleteCommand(
    request: com_soulfiremc_grpc_generated_command_pb.CommandCompletionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: com_soulfiremc_grpc_generated_command_pb.CommandCompletionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/com.soulfiremc.grpc.generated.CommandService/tabCompleteCommand',
        request,
        metadata || {},
        this.methodDescriptortabCompleteCommand,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/com.soulfiremc.grpc.generated.CommandService/tabCompleteCommand',
    request,
    metadata || {},
    this.methodDescriptortabCompleteCommand);
  }

  methodDescriptorgetCommandHistory = new grpcWeb.MethodDescriptor(
    '/com.soulfiremc.grpc.generated.CommandService/getCommandHistory',
    grpcWeb.MethodType.UNARY,
    com_soulfiremc_grpc_generated_command_pb.CommandHistoryRequest,
    com_soulfiremc_grpc_generated_command_pb.CommandHistoryResponse,
    (request: com_soulfiremc_grpc_generated_command_pb.CommandHistoryRequest) => {
      return request.serializeBinary();
    },
    com_soulfiremc_grpc_generated_command_pb.CommandHistoryResponse.deserializeBinary
  );

  getCommandHistory(
    request: com_soulfiremc_grpc_generated_command_pb.CommandHistoryRequest,
    metadata?: grpcWeb.Metadata | null): Promise<com_soulfiremc_grpc_generated_command_pb.CommandHistoryResponse>;

  getCommandHistory(
    request: com_soulfiremc_grpc_generated_command_pb.CommandHistoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: com_soulfiremc_grpc_generated_command_pb.CommandHistoryResponse) => void): grpcWeb.ClientReadableStream<com_soulfiremc_grpc_generated_command_pb.CommandHistoryResponse>;

  getCommandHistory(
    request: com_soulfiremc_grpc_generated_command_pb.CommandHistoryRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: com_soulfiremc_grpc_generated_command_pb.CommandHistoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/com.soulfiremc.grpc.generated.CommandService/getCommandHistory',
        request,
        metadata || {},
        this.methodDescriptorgetCommandHistory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/com.soulfiremc.grpc.generated.CommandService/getCommandHistory',
    request,
    metadata || {},
    this.methodDescriptorgetCommandHistory);
  }

}

