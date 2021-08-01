"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Default2DShader_1 = require("./Default2DShader");
var WebGlConfig_1 = require("./WebGlConfig");
var Webgl2DRenderer = /** @class */ (function () {
    function Webgl2DRenderer() {
        this._children = [];
        this._init();
    }
    Webgl2DRenderer.prototype._init = function () {
        // init canvas
        this._canvas = document.createElement("canvas");
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
        var batched = this.batch(this._children);
        batched.forEach(function (currentBatch) {
            if (currentBatch.length === 0)
                return;
            var first = currentBatch[0];
            _this._currentTexture = first.texture;
            WebGlConfig_1.default.pushVerticesInto(currentBatch, _this._vertexArray);
            var context = _this._context;
            context.activeTexture(context.TEXTURE0);
            context.bindTexture(context.TEXTURE_2D, _this._currentTexture.data.getGlTexture(context));
            if (currentBatch.length > WebGlConfig_1.default.MAX_QUAD_PER_CALL >> 1) {
                context.bufferSubData(context.ARRAY_BUFFER, 0, _this._vertexArray);
            }
            else {
                var view = _this._vertexArray.subarray(0, currentBatch.length * 4 * WebGlConfig_1.default.VERTEX_SIZE);
                context.bufferSubData(context.ARRAY_BUFFER, 0, view);
            }
            context.drawElements(context.TRIANGLES, currentBatch.length * WebGlConfig_1.default.INDICES_PER_QUAD, context.UNSIGNED_SHORT, 0);
        });
    };
    Webgl2DRenderer.prototype.batch = function (children) {
        children = children.filter(function (child) {
            return child.texture !== null;
        });
        children.sort(function (a, b) {
            return (a.texture.textureUid < b.texture.textureUid) ? -1 : 1;
        });
        var result = [];
        var batch = [];
        var texId = "";
        for (var i = 0; i < children.length; i++) {
            if (children[i].texture.textureUid !== texId || i % WebGlConfig_1.default.MAX_QUAD_PER_CALL === 0) {
                batch = [];
                result.push(batch);
                texId = children[i].texture.textureUid;
            }
            batch.push(children[i]);
        }
        return result;
    };
    return Webgl2DRenderer;
}());
exports.default = Webgl2DRenderer;
