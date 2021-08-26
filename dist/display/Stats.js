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
var Stage_1 = require("./Stage");
var DisplayObject_1 = require("./DisplayObject");
var Texture_1 = require("../texture/Texture");
var TextureData_1 = require("../texture/TextureData");
var Stats = /** @class */ (function (_super) {
    __extends(Stats, _super);
    function Stats() {
        var _this = _super.call(this) || this;
        _this._stage = null;
        _this._lastFrameTime = 0;
        _this._monitoring = false;
        _this._elapsedTime = 0;
        _this._enterFrame = function (notification) {
            _this._elapsedTime = new Date().getTime() - _this._lastFrameTime;
            _this._lastFrameTime = new Date().getTime();
            var currentFrame = notification.getPayload();
            if (currentFrame % 60 === 0) {
                var info = "fps: " + _this.getFps() + ", frame: " + currentFrame;
                var context = _this._context;
                context.beginPath();
                context.fillStyle = "black";
                context.fillRect(0, 0, _this.width, _this.height);
                context.fill();
                context.font = "20px Arial";
                context.fillStyle = "red";
                context.fillText(info, 0, Math.round(_this.height / 2));
                context.closePath();
            }
        };
        var data = document.createElement("canvas");
        _this.width = data.width = 200;
        _this.height = data.height = 50;
        _this.texture = new Texture_1.default("stats_texture", new TextureData_1.default(data), 0, 0, data.width, data.height);
        _this.texture.data.isDynamic = true;
        _this._context = _this.texture.source.getContext("2d");
        return _this;
    }
    Stats.prototype.getStage = function () {
        return this._stage;
    };
    Stats.prototype.start = function () {
        if (this._stage !== null)
            this._stage.subscribe(Stage_1.StageEvent.ENTER_FRAME, this._enterFrame);
        this._monitoring = true;
    };
    Stats.prototype.stop = function () {
        if (this._stage !== null)
            this._stage.unsubscribe(Stage_1.StageEvent.ENTER_FRAME, this._enterFrame);
        this._monitoring = false;
    };
    Stats.prototype.setStage = function (value) {
        this.stop();
        this._stage = value;
    };
    Stats.prototype.getFps = function () {
        return this._monitoring ? Math.round(1000 / this._elapsedTime) : -1;
    };
    return Stats;
}(DisplayObject_1.default));
exports.default = Stats;
