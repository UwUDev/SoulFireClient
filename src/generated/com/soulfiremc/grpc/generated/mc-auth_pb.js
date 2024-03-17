// source: com/soulfiremc/grpc/generated/mc-auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var com_soulfiremc_grpc_generated_common_pb = require('../../../../com/soulfiremc/grpc/generated/common_pb.js');
goog.object.extend(proto, com_soulfiremc_grpc_generated_common_pb);
goog.exportSymbol('proto.com.soulfiremc.grpc.generated.AuthRequest', null, global);
goog.exportSymbol('proto.com.soulfiremc.grpc.generated.AuthResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.soulfiremc.grpc.generated.AuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.soulfiremc.grpc.generated.AuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.soulfiremc.grpc.generated.AuthRequest.displayName = 'proto.com.soulfiremc.grpc.generated.AuthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.soulfiremc.grpc.generated.AuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.soulfiremc.grpc.generated.AuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.soulfiremc.grpc.generated.AuthResponse.displayName = 'proto.com.soulfiremc.grpc.generated.AuthResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.soulfiremc.grpc.generated.AuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.soulfiremc.grpc.generated.AuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, 0),
    proxy: (f = msg.getProxy()) && com_soulfiremc_grpc_generated_common_pb.ProxyProto.toObject(includeInstance, f),
    payload: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.soulfiremc.grpc.generated.AuthRequest}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.soulfiremc.grpc.generated.AuthRequest;
  return proto.com.soulfiremc.grpc.generated.AuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.soulfiremc.grpc.generated.AuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.soulfiremc.grpc.generated.AuthRequest}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.soulfiremc.grpc.generated.MinecraftAccountProto.AccountTypeProto} */ (reader.readEnum());
      msg.setService(value);
      break;
    case 2:
      var value = new com_soulfiremc_grpc_generated_common_pb.ProxyProto;
      reader.readMessage(value,com_soulfiremc_grpc_generated_common_pb.ProxyProto.deserializeBinaryFromReader);
      msg.setProxy(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.soulfiremc.grpc.generated.AuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.soulfiremc.grpc.generated.AuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProxy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      com_soulfiremc_grpc_generated_common_pb.ProxyProto.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional MinecraftAccountProto.AccountTypeProto service = 1;
 * @return {!proto.com.soulfiremc.grpc.generated.MinecraftAccountProto.AccountTypeProto}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.getService = function() {
  return /** @type {!proto.com.soulfiremc.grpc.generated.MinecraftAccountProto.AccountTypeProto} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.soulfiremc.grpc.generated.MinecraftAccountProto.AccountTypeProto} value
 * @return {!proto.com.soulfiremc.grpc.generated.AuthRequest} returns this
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.setService = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ProxyProto proxy = 2;
 * @return {?proto.com.soulfiremc.grpc.generated.ProxyProto}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.getProxy = function() {
  return /** @type{?proto.com.soulfiremc.grpc.generated.ProxyProto} */ (
    jspb.Message.getWrapperField(this, com_soulfiremc_grpc_generated_common_pb.ProxyProto, 2));
};


/**
 * @param {?proto.com.soulfiremc.grpc.generated.ProxyProto|undefined} value
 * @return {!proto.com.soulfiremc.grpc.generated.AuthRequest} returns this
*/
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.setProxy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.soulfiremc.grpc.generated.AuthRequest} returns this
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.clearProxy = function() {
  return this.setProxy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.hasProxy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string payload = 3;
 * @return {string}
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.soulfiremc.grpc.generated.AuthRequest} returns this
 */
proto.com.soulfiremc.grpc.generated.AuthRequest.prototype.setPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.soulfiremc.grpc.generated.AuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.soulfiremc.grpc.generated.AuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && com_soulfiremc_grpc_generated_common_pb.MinecraftAccountProto.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.soulfiremc.grpc.generated.AuthResponse}
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.soulfiremc.grpc.generated.AuthResponse;
  return proto.com.soulfiremc.grpc.generated.AuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.soulfiremc.grpc.generated.AuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.soulfiremc.grpc.generated.AuthResponse}
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new com_soulfiremc_grpc_generated_common_pb.MinecraftAccountProto;
      reader.readMessage(value,com_soulfiremc_grpc_generated_common_pb.MinecraftAccountProto.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.soulfiremc.grpc.generated.AuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.soulfiremc.grpc.generated.AuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      com_soulfiremc_grpc_generated_common_pb.MinecraftAccountProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional MinecraftAccountProto account = 1;
 * @return {?proto.com.soulfiremc.grpc.generated.MinecraftAccountProto}
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.prototype.getAccount = function() {
  return /** @type{?proto.com.soulfiremc.grpc.generated.MinecraftAccountProto} */ (
    jspb.Message.getWrapperField(this, com_soulfiremc_grpc_generated_common_pb.MinecraftAccountProto, 1));
};


/**
 * @param {?proto.com.soulfiremc.grpc.generated.MinecraftAccountProto|undefined} value
 * @return {!proto.com.soulfiremc.grpc.generated.AuthResponse} returns this
*/
proto.com.soulfiremc.grpc.generated.AuthResponse.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.soulfiremc.grpc.generated.AuthResponse} returns this
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.soulfiremc.grpc.generated.AuthResponse.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.com.soulfiremc.grpc.generated);
