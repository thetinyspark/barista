"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushVerticesInto = exports.createVertexArray = exports.createIndexArray = exports.VERTEX_SIZE = exports.VERTEX_ARRAY_SIZE = exports.NUM_VERTICES_PER_QUAD = exports.MAX_QUAD_PER_CALL = exports.INDICES_PER_QUAD = exports.WebGlConfig = exports.Webgl2DRenderer = exports.Default2DShader = void 0;
const Default2DShader_1 = require("./Default2DShader");
exports.Default2DShader = Default2DShader_1.default;
const Webgl2DRenderer_1 = require("./Webgl2DRenderer");
exports.Webgl2DRenderer = Webgl2DRenderer_1.default;
const WebGlConfig_1 = require("./WebGlConfig");
exports.WebGlConfig = WebGlConfig_1.default;
Object.defineProperty(exports, "INDICES_PER_QUAD", { enumerable: true, get: function () { return WebGlConfig_1.INDICES_PER_QUAD; } });
Object.defineProperty(exports, "MAX_QUAD_PER_CALL", { enumerable: true, get: function () { return WebGlConfig_1.MAX_QUAD_PER_CALL; } });
Object.defineProperty(exports, "NUM_VERTICES_PER_QUAD", { enumerable: true, get: function () { return WebGlConfig_1.NUM_VERTICES_PER_QUAD; } });
Object.defineProperty(exports, "VERTEX_ARRAY_SIZE", { enumerable: true, get: function () { return WebGlConfig_1.VERTEX_ARRAY_SIZE; } });
Object.defineProperty(exports, "VERTEX_SIZE", { enumerable: true, get: function () { return WebGlConfig_1.VERTEX_SIZE; } });
Object.defineProperty(exports, "createIndexArray", { enumerable: true, get: function () { return WebGlConfig_1.createIndexArray; } });
Object.defineProperty(exports, "createVertexArray", { enumerable: true, get: function () { return WebGlConfig_1.createVertexArray; } });
Object.defineProperty(exports, "pushVerticesInto", { enumerable: true, get: function () { return WebGlConfig_1.pushVerticesInto; } });
