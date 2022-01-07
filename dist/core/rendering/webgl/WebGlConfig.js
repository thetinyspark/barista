"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIndexArray = exports.createVertexArray = exports.pushVerticesInto = exports.INDICES_PER_QUAD = exports.VERTEX_ARRAY_SIZE = exports.MAX_QUAD_PER_CALL = exports.NUM_VERTICES_PER_QUAD = exports.VERTEX_SIZE = void 0;
exports.VERTEX_SIZE = 11;
exports.NUM_VERTICES_PER_QUAD = 4;
exports.MAX_QUAD_PER_CALL = Math.floor(65535 / exports.VERTEX_SIZE / exports.NUM_VERTICES_PER_QUAD);
exports.VERTEX_ARRAY_SIZE = exports.MAX_QUAD_PER_CALL * exports.NUM_VERTICES_PER_QUAD * exports.VERTEX_SIZE;
exports.INDICES_PER_QUAD = 6;
function pushVerticesInto(children, vertexArray) {
    let pos = 0;
    for (let i = 0; i < children.length; i++) {
        const current = children[i];
        // topleft
        vertexArray[pos++] = 0; // x
        vertexArray[pos++] = 0; // y
        vertexArray[pos++] = current.texture.topLeftUv.u; // u
        vertexArray[pos++] = current.texture.topLeftUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; // opacity
        // topright
        vertexArray[pos++] = current.width; // x
        vertexArray[pos++] = 0; // y
        vertexArray[pos++] = current.texture.topRightUv.u; // u
        vertexArray[pos++] = current.texture.topRightUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; //  opacity
        // bottomleft
        vertexArray[pos++] = 0; // x
        vertexArray[pos++] = current.height; // y
        vertexArray[pos++] = current.texture.bottomLeftUv.u; // u
        vertexArray[pos++] = current.texture.bottomLeftUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; // opacity
        // bottomright
        vertexArray[pos++] = current.width; // x
        vertexArray[pos++] = current.height; // y
        vertexArray[pos++] = current.texture.bottomRightUv.u; // u
        vertexArray[pos++] = current.texture.bottomRightUv.v; // v
        vertexArray[pos++] = current.worldMatrix[0]; // a
        vertexArray[pos++] = current.worldMatrix[1]; // b
        vertexArray[pos++] = current.worldMatrix[2]; // c
        vertexArray[pos++] = current.worldMatrix[3]; // d
        vertexArray[pos++] = current.worldMatrix[4]; // tx
        vertexArray[pos++] = current.worldMatrix[5]; // ty
        vertexArray[pos++] = current.worldOpacity; // opacity
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
WebGlConfig.MAX_QUAD_PER_CALL = exports.MAX_QUAD_PER_CALL;
WebGlConfig.VERTEX_ARRAY_SIZE = exports.VERTEX_ARRAY_SIZE;
WebGlConfig.INDICES_PER_QUAD = exports.INDICES_PER_QUAD;
WebGlConfig.pushVerticesInto = pushVerticesInto;
WebGlConfig.createVertexArray = createVertexArray;
WebGlConfig.createIndexArray = createIndexArray;
