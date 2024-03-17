// source: com/soulfiremc/grpc/generated/logs.proto
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

goog.exportSymbol('proto.com.soulfiremc.grpc.generated.LogRequest', null, global);
goog.exportSymbol('proto.com.soulfiremc.grpc.generated.LogResponse', null, global);
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
proto.com.soulfiremc.grpc.generated.LogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.soulfiremc.grpc.generated.LogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.soulfiremc.grpc.generated.LogRequest.displayName = 'proto.com.soulfiremc.grpc.generated.LogRequest';
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
proto.com.soulfiremc.grpc.generated.LogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.soulfiremc.grpc.generated.LogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.soulfiremc.grpc.generated.LogResponse.displayName = 'proto.com.soulfiremc.grpc.generated.LogResponse';
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
proto.com.soulfiremc.grpc.generated.LogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.soulfiremc.grpc.generated.LogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.soulfiremc.grpc.generated.LogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.LogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    previous: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.com.soulfiremc.grpc.generated.LogRequest}
 */
proto.com.soulfiremc.grpc.generated.LogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.soulfiremc.grpc.generated.LogRequest;
  return proto.com.soulfiremc.grpc.generated.LogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.soulfiremc.grpc.generated.LogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.soulfiremc.grpc.generated.LogRequest}
 */
proto.com.soulfiremc.grpc.generated.LogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrevious(value);
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
proto.com.soulfiremc.grpc.generated.LogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.soulfiremc.grpc.generated.LogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.soulfiremc.grpc.generated.LogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.LogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrevious();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 previous = 1;
 * @return {number}
 */
proto.com.soulfiremc.grpc.generated.LogRequest.prototype.getPrevious = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.soulfiremc.grpc.generated.LogRequest} returns this
 */
proto.com.soulfiremc.grpc.generated.LogRequest.prototype.setPrevious = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.com.soulfiremc.grpc.generated.LogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.soulfiremc.grpc.generated.LogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.soulfiremc.grpc.generated.LogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.LogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.com.soulfiremc.grpc.generated.LogResponse}
 */
proto.com.soulfiremc.grpc.generated.LogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.soulfiremc.grpc.generated.LogResponse;
  return proto.com.soulfiremc.grpc.generated.LogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.soulfiremc.grpc.generated.LogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.soulfiremc.grpc.generated.LogResponse}
 */
proto.com.soulfiremc.grpc.generated.LogResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.com.soulfiremc.grpc.generated.LogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.soulfiremc.grpc.generated.LogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.soulfiremc.grpc.generated.LogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.soulfiremc.grpc.generated.LogResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.com.soulfiremc.grpc.generated.LogResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.soulfiremc.grpc.generated.LogResponse} returns this
 */
proto.com.soulfiremc.grpc.generated.LogResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.com.soulfiremc.grpc.generated);
