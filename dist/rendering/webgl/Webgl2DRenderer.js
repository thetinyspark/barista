"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INDICES_PER_QUAD = exports.VERTEX_ARRAY_SIZE = exports.MAX_QUAD_PER_CALL = exports.NUM_VERTICES_PER_QUAD = exports.VERTEX_SIZE = void 0;
var Default2DShader_1 = require("./shaders/Default2DShader");
exports.VERTEX_SIZE = 11;
exports.NUM_VERTICES_PER_QUAD = 4;
exports.MAX_QUAD_PER_CALL = Math.floor(65535 / exports.VERTEX_SIZE / exports.NUM_VERTICES_PER_QUAD);
exports.VERTEX_ARRAY_SIZE = exports.MAX_QUAD_PER_CALL * exports.NUM_VERTICES_PER_QUAD * exports.VERTEX_SIZE;
exports.INDICES_PER_QUAD = 6;
var Webgl2DRenderer = /** @class */ (function () {
    function Webgl2DRenderer() {
        this._children = [];
        this._init();
    }
    Webgl2DRenderer.prototype._init = function () {
        // init canvas
        this._canvas = document.createElement("canvas");
        this._context = this._canvas.getContext("webgl");
        this._vertexArray = this.createVertexArray();
        this._indexArray = this.createIndexArray();
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
    };
    Webgl2DRenderer.prototype.add = function (child) {
        this._children.push(child);
    };
    Webgl2DRenderer.prototype.getCanvas = function () {
        return this._canvas;
    };
    Webgl2DRenderer.prototype.getContext = function () {
        return this._context;
    };
    Webgl2DRenderer.prototype.getChildren = function () {
        return this._children;
    };
    Webgl2DRenderer.prototype.clear = function () {
        this._children = [];
    };
    Webgl2DRenderer.prototype.draw = function (canvas, context) {
        var _this = this;
        var x = canvas.width / 2;
        var y = -canvas.height / 2;
        context.uniform2f(this._currentShader.projectionPointer, x, y);
        context.clearColor(1.0, 1.0, 1.0, 1.0);
        context.viewport(0, 0, canvas.width, canvas.height);
        context.clear(context.COLOR_BUFFER_BIT | context.DEPTH_BUFFER_BIT);
        var batched = this.batch(this._children.filter(function (q) { return q.texture !== null; }));
        batched.forEach(function (currentBatch) {
            if (currentBatch.length === 0)
                return;
            var first = currentBatch[0];
            _this._currentTexture = first.texture;
            _this._currentShader.pushVerticesInto(currentBatch, _this._vertexArray);
            var context = _this._context;
            context.activeTexture(context.TEXTURE0);
            context.bindTexture(context.TEXTURE_2D, _this._currentTexture.data.getGlTexture(context));
            if (currentBatch.length > exports.MAX_QUAD_PER_CALL >> 1) {
                context.bufferSubData(context.ARRAY_BUFFER, 0, _this._vertexArray);
            }
            else {
                var view = _this._vertexArray.subarray(0, currentBatch.length * 4 * exports.VERTEX_SIZE);
                context.bufferSubData(context.ARRAY_BUFFER, 0, view);
            }
            context.drawElements(context.TRIANGLES, currentBatch.length * exports.INDICES_PER_QUAD, context.UNSIGNED_SHORT, 0);
        });
    };
    Webgl2DRenderer.prototype.batch = function (children) {
        children.sort(function (a, b) {
            return (a.texture.textureUid < b.texture.textureUid) ? -1 : 1;
        });
        var result = [];
        var batch = [];
        var texId = "";
        for (var i = 0; i < children.length; i++) {
            if (children[i].texture.textureUid !== texId || i % exports.MAX_QUAD_PER_CALL === 0) {
                batch = [];
                result.push(batch);
                texId = children[i].texture.textureUid;
            }
            batch.push(children[i]);
        }
        return result;
    };
    Webgl2DRenderer.prototype.createVertexArray = function () {
        return new Float32Array(exports.MAX_QUAD_PER_CALL * exports.VERTEX_SIZE * exports.NUM_VERTICES_PER_QUAD);
    };
    Webgl2DRenderer.prototype.createIndexArray = function () {
        var size = exports.MAX_QUAD_PER_CALL * exports.INDICES_PER_QUAD;
        var indexArray = new Uint16Array(size);
        var vertexPos = 0;
        for (var i = 0; i < size; i += exports.INDICES_PER_QUAD) {
            indexArray[i + 0] = vertexPos + 0;
            indexArray[i + 1] = vertexPos + 1;
            indexArray[i + 2] = vertexPos + 2;
            indexArray[i + 3] = vertexPos + 1;
            indexArray[i + 4] = vertexPos + 2;
            indexArray[i + 5] = vertexPos + 3;
            vertexPos += exports.NUM_VERTICES_PER_QUAD;
        }
        return indexArray;
    };
    return Webgl2DRenderer;
}());
exports.default = Webgl2DRenderer;
