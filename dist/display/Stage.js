"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageEvent = void 0;
var gl_matrix_1 = require("gl-matrix");
var Canvas2DRenderer_1 = require("../rendering/Canvas2DRenderer");
var DisplayObjectContainer_1 = require("./DisplayObjectContainer");
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        var _this = _super.call(this) || this;
        _this._currentFrame = 0;
        _this._renderer = new Canvas2DRenderer_1.default();
        return _this;
    }
    Stage.prototype.getRenderer = function () {
        return this._renderer;
    };
    Stage.prototype.setRenderer = function (renderer) {
        this._renderer = renderer;
    };
    Stage.prototype.getCanvas = function () {
        return this._renderer.getCanvas();
    };
    Stage.prototype.getContext = function () {
        return this._renderer.getContext();
    };
    Stage.prototype.getCurrentFrame = function () {
        return this._currentFrame;
    };
    Stage.prototype.nextFrame = function () {
        this._currentFrame++;
        this.update(gl_matrix_1.mat2d.create(), 1);
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);
        // clear the rendering pipeline
        this._renderer.clear();
        // add children to rendering pipeline
        this.render(this._renderer);
        // draw objects
        this._renderer.draw(this._renderer.getCanvas(), this._renderer.getContext());
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    };
    return Stage;
}(DisplayObjectContainer_1.default));
exports.default = Stage;
var StageEvent;
(function (StageEvent) {
    StageEvent["ENTER_FRAME"] = "ENTER_FRAME";
    StageEvent["FRAME_END"] = "FRAME_END";
})(StageEvent = exports.StageEvent || (exports.StageEvent = {}));
