"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageEvent = void 0;
const Canvas2DRenderer_1 = require("../rendering/Canvas2DRenderer");
const DisplayObjectContainer_1 = require("./DisplayObjectContainer");
class Stage extends DisplayObjectContainer_1.default {
    constructor() {
        super();
        this._currentFrame = 0;
        this._renderer = new Canvas2DRenderer_1.default();
        this._setCanvas(document.createElement("canvas"));
    }
    _setCanvas(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
    }
    getRenderer() {
        return this._renderer;
    }
    setRenderer(renderer) {
        this._renderer = renderer;
    }
    getCanvas() {
        return this._canvas;
    }
    getContext() {
        return this._context;
    }
    getCurrentFrame() {
        return this._currentFrame;
    }
    nextFrame() {
        this.updateMatrix();
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._currentFrame++;
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);
        // clear the rendering pipeline
        this._renderer.clear();
        // add children to rendering pipeline
        this.render(this._renderer);
        // draw objects
        this._renderer.draw(this._canvas, this._context);
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    }
}
exports.default = Stage;
var StageEvent;
(function (StageEvent) {
    StageEvent["ENTER_FRAME"] = "ENTER_FRAME";
    StageEvent["FRAME_END"] = "FRAME_END";
})(StageEvent = exports.StageEvent || (exports.StageEvent = {}));
