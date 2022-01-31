"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIndexArray = exports.createVertexArray = exports.pushVerticesInto = exports.VERTEX_ARRAY_SIZE = exports.MAX_QUAD_PER_CALL = exports.MAX_TEXTURES_UNITS = exports.NUM_VERTICES_PER_QUAD = exports.INDICES_PER_QUAD = exports.VERTEX_SIZE = void 0;
const utils_1 = require("../../utils");
function getGlParam(param) {
    const ctx = utils_1.CanvasUtils.create().getContext("webgl");
    return ctx.getParameter(ctx[param]);
}
exports.VERTEX_SIZE = 12;
exports.INDICES_PER_QUAD = 6;
exports.NUM_VERTICES_PER_QUAD = 4;
exports.MAX_TEXTURES_UNITS = getGlParam('MAX_TEXTURE_IMAGE_UNITS');
// export const MAX_QUAD_PER_CALL:number = Math.floor( 65535 * 8 / VERTEX_SIZE / NUM_VERTICES_PER_QUAD );
exports.MAX_QUAD_PER_CALL = Math.floor(65535 / exports.INDICES_PER_QUAD);
exports.VERTEX_ARRAY_SIZE = exports.MAX_QUAD_PER_CALL * exports.NUM_VERTICES_PER_QUAD * exports.VERTEX_SIZE;
function pushVerticesInto(children, vertexArray) {
    let pos = 0;
    let wmat = null;
    let w0 = 0;
    let w1 = 0;
    let w2 = 0;
    let w3 = 0;
    let w4 = 0;
    let w5 = 0;
    let textureIndex = 0;
    let current = null;
    let width = 0;
    let height = 0;
    let tex = null;
    let opacity = 0;
    for (let i = 0; i < children.length; i++) {
        current = children[i];
        textureIndex = current.texture.data.texturePos;
        wmat = current.worldMatrix;
        width = current.width;
        height = current.height;
        tex = current.texture;
        opacity = current.worldOpacity;
        w0 = wmat[0];
        w1 = wmat[1];
        w2 = wmat[2];
        w3 = wmat[3];
        w4 = wmat[4];
        w5 = wmat[5];
        // topleft
        vertexArray[pos + 0] = 0; // x
        vertexArray[pos + 1] = 0; // y
        vertexArray[pos + 2] = tex.topLeftUv.u; // u
        vertexArray[pos + 3] = tex.topLeftUv.v; // v
        vertexArray[pos + 4] = w0; // a
        vertexArray[pos + 5] = w1; // a
        vertexArray[pos + 6] = w2; // a
        vertexArray[pos + 7] = w3; // a
        vertexArray[pos + 8] = w4; // a
        vertexArray[pos + 9] = w5; // a
        vertexArray[pos + 10] = opacity; // opacity
        vertexArray[pos + 11] = textureIndex; // textureIndex
        // topright
        vertexArray[pos + 12] = width; // x
        vertexArray[pos + 13] = 0; // y
        vertexArray[pos + 14] = tex.topRightUv.u; // u
        vertexArray[pos + 15] = tex.topRightUv.v; // v
        vertexArray[pos + 16] = w0; // a
        vertexArray[pos + 17] = w1; // a
        vertexArray[pos + 18] = w2; // a
        vertexArray[pos + 19] = w3; // a
        vertexArray[pos + 20] = w4; // a
        vertexArray[pos + 21] = w5; // a
        vertexArray[pos + 22] = opacity; //  opacity
        vertexArray[pos + 23] = textureIndex; // textureIndex
        // bottomleft
        vertexArray[pos + 24] = 0; // x
        vertexArray[pos + 25] = height; // y
        vertexArray[pos + 26] = tex.bottomLeftUv.u; // u
        vertexArray[pos + 27] = tex.bottomLeftUv.v; // v
        vertexArray[pos + 28] = w0; // a
        vertexArray[pos + 29] = w1; // a
        vertexArray[pos + 30] = w2; // a
        vertexArray[pos + 31] = w3; // a
        vertexArray[pos + 32] = w4; // a
        vertexArray[pos + 33] = w5; // a
        vertexArray[pos + 34] = opacity; // opacity
        vertexArray[pos + 35] = textureIndex; // textureIndex
        // bottomright
        vertexArray[pos + 36] = width; // x
        vertexArray[pos + 37] = height; // y
        vertexArray[pos + 38] = tex.bottomRightUv.u; // u
        vertexArray[pos + 39] = tex.bottomRightUv.v; // v
        vertexArray[pos + 40] = w0; // a
        vertexArray[pos + 41] = w1; // a
        vertexArray[pos + 42] = w2; // a
        vertexArray[pos + 43] = w3; // a
        vertexArray[pos + 44] = w4; // a
        vertexArray[pos + 45] = w5; // a
        vertexArray[pos + 46] = opacity; // opacity
        vertexArray[pos + 47] = textureIndex; // textureIndex
        pos += 48;
    }
}
exports.pushVerticesInto = pushVerticesInto;
function createVertexArray() {
    return new Float32Array(exports.MAX_QUAD_PER_CALL * exports.VERTEX_SIZE * exports.NUM_VERTICES_PER_QUAD);
}
exports.createVertexArray = createVertexArray;
function createIndexArray() {
    const size = exports.MAX_QUAD_PER_CALL * exports.INDICES_PER_QUAD;
    const indexArray = new Uint16Array(size);
    let vertexPos = 0;
    for (let i = 0; i < size; i += exports.INDICES_PER_QUAD) {
        indexArray[i + 0] = vertexPos + 0;
        indexArray[i + 1] = vertexPos + 1;
        indexArray[i + 2] = vertexPos + 2;
        indexArray[i + 3] = vertexPos + 1;
        indexArray[i + 4] = vertexPos + 2;
        indexArray[i + 5] = vertexPos + 3;
        vertexPos += exports.NUM_VERTICES_PER_QUAD;
    }
    return indexArray;
}
exports.createIndexArray = createIndexArray;
/**
 * The WebGlConfig is a set of values which are necessary
 * for the WebGL2DRenderer. You can changes the values if
 * you want to optimize the rendering process. The default
 * configuration stands that indices array has a max length
 * of 65536 (2 words) which is an old limitation.
 */
class WebGlConfig {
}
exports.default = WebGlConfig;
WebGlConfig.VERTEX_SIZE = exports.VERTEX_SIZE;
WebGlConfig.NUM_VERTICES_PER_QUAD = exports.NUM_VERTICES_PER_QUAD;
WebGlConfig.MAX_TEXTURES_UNITS = exports.MAX_TEXTURES_UNITS;
WebGlConfig.MAX_QUAD_PER_CALL = exports.MAX_QUAD_PER_CALL;
WebGlConfig.VERTEX_ARRAY_SIZE = exports.VERTEX_ARRAY_SIZE;
WebGlConfig.INDICES_PER_QUAD = exports.INDICES_PER_QUAD;
WebGlConfig.pushVerticesInto = pushVerticesInto;
WebGlConfig.createVertexArray = createVertexArray;
WebGlConfig.createIndexArray = createIndexArray;
