"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Default2DShader_1 = require("./Default2DShader");
const WebGlConfig_1 = require("./WebGlConfig");
const CanvasUtils_1 = require("../../utils/CanvasUtils");
const BatchTexture_1 = require("./batch/BatchTexture");
const TextureDataManager_1 = require("./TextureDataManager");
const BatchDrawCall_1 = require("./batch/BatchDrawCall");
/**
 * The Webgl2DRenderer class is the base class for WebGL2d rendering.
 */
class Webgl2DRenderer {
    constructor() {
        this._children = [];
        this._drawCalls = 0;
        this._init();
    }
    _init() {
        // init canvas
        this._canvas = CanvasUtils_1.default.create();
        this._context = this._canvas.getContext("webgl");
        this._vertexArray = WebGlConfig_1.default.createVertexArray();
        this._indexArray = WebGlConfig_1.default.createIndexArray();
        // init buffer
        this._vertexBuffer = this._context.createBuffer();
        this._indexBuffer = this._context.createBuffer();
        // bind buffers
        this._context.bindBuffer(this._context.ARRAY_BUFFER, this._vertexBuffer);
        this._context.bufferData(this._context.ARRAY_BUFFER, this._vertexArray, this._context.DYNAMIC_DRAW);
        this._context.bindBuffer(this._context.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        this._context.bufferData(this._context.ELEMENT_ARRAY_BUFFER, this._indexArray, this._context.STATIC_DRAW);
        // init default shader
        this._currentShader = new Default2DShader_1.default(this._context);
        // disable depth test
        this._context.disable(this._context.DEPTH_TEST);
        // disable culling faces
        this._context.disable(this._context.CULL_FACE);
        // init blend func
        this._context.blendFunc(this._context.ONE, this._context.ONE_MINUS_SRC_ALPHA);
        this._context.enable(this._context.BLEND);
    }
    add(child) {
        this._children.push(child);
    }
    getNumDrawCalls() {
        return this._drawCalls;
    }
    getCanvas() {
        return this._canvas;
    }
    getContext() {
        return this._context;
    }
    getChildren() {
        return this._children;
    }
    setChildren(objects) {
        this._children = objects;
    }
    clear() {
        this._children = [];
    }
    draw(canvas, context) {
        const x = canvas.width / 2;
        const y = -canvas.height / 2;
        context.uniform2f(this._currentShader.projectionPointer, x, y);
        context.clearColor(0.0, 0.0, 0.0, 1.0);
        context.viewport(0, 0, canvas.width, canvas.height);
        context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);
        const manager = new TextureDataManager_1.default();
        const batches = this.batch(this._children);
        this._drawCalls = 0;
        batches.forEach((current) => {
            manager.reset(context, WebGlConfig_1.default.MAX_TEXTURES_UNITS);
            Array.from(current.datas).forEach((textureData, index) => {
                manager.fillChannelAt(index, textureData);
            });
            current.subBatches.forEach((subBatch) => {
                WebGlConfig_1.default.pushVerticesInto(subBatch.objects, this._vertexArray);
                context.bufferSubData(context.ARRAY_BUFFER, 0, this._vertexArray);
                context.drawElements(context.TRIANGLES, subBatch.objects.length * WebGlConfig_1.default.INDICES_PER_QUAD, context.UNSIGNED_SHORT, 0);
                this._drawCalls++;
            });
        });
    }
    batch(children) {
        const batchTextures = BatchTexture_1.default.create(children.filter(child => child.texture !== null), WebGlConfig_1.default.MAX_TEXTURES_UNITS);
        batchTextures.forEach((current) => {
            current.subBatches = BatchDrawCall_1.default.create(current.objects, WebGlConfig_1.default.MAX_QUAD_PER_CALL);
        });
        return batchTextures;
    }
}
exports.default = Webgl2DRenderer;
