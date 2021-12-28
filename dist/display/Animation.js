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
exports.AnimationEvent = void 0;
var DisplayObject_1 = require("./DisplayObject");
var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._framesTextures = [];
        _this._currentFrameIndex = 0;
        _this._playing = false;
        _this._forwarding = true;
        _this.loop = false;
        return _this;
    }
    Animation.prototype.play = function () {
        this._playing = true;
        this._forwarding = true;
    };
    Animation.prototype.rewind = function () {
        this._playing = true;
        this._forwarding = false;
    };
    Animation.prototype.stop = function () {
        this._playing = false;
    };
    Animation.prototype.render = function (renderer) {
        _super.prototype.render.call(this, renderer);
        if (this._playing) {
            var step = (this._forwarding) ? 1 : -1;
            this.goToFrame(this._currentFrameIndex + step);
        }
    };
    Animation.prototype.clearFrames = function () {
        this._currentFrameIndex = 0;
        this._framesTextures = [];
    };
    Animation.prototype.setFrameTexture = function (frameIndex, texture) {
        this._framesTextures[frameIndex] = texture;
    };
    Animation.prototype.getCurrentFrameTexture = function () {
        var current = this.getFrameTexture(this.getCurrentFrameIndex());
        if (current === null && this._forwarding)
            current = this.getPreviousDefinedFrameTexture(this.getCurrentFrameIndex());
        else if (current === null && !this._forwarding)
            current = this.getNextDefinedFrameTexture(this.getCurrentFrameIndex());
        return current;
    };
    Animation.prototype.getFrameTexture = function (frameIndex) {
        return this._framesTextures[frameIndex] || null;
    };
    Animation.prototype.getPreviousDefinedFrameTexture = function (frameIndex) {
        var texture = null;
        while (texture === null && frameIndex > -1) {
            texture = this.getFrameTexture(frameIndex--);
        }
        return texture;
    };
    Animation.prototype.getNextDefinedFrameTexture = function (frameIndex) {
        var texture = null;
        while (texture === null && frameIndex <= this.getLastFrameIndex()) {
            texture = this.getFrameTexture(frameIndex++);
        }
        return texture;
    };
    Animation.prototype.removeFrameTexture = function (frameIndex) {
        this._framesTextures[frameIndex] = null;
    };
    Animation.prototype.getAnimationLength = function () {
        return this._framesTextures.length;
    };
    Animation.prototype.getLastFrameIndex = function () {
        return this.getAnimationLength() - 1;
    };
    Animation.prototype.getCurrentFrameIndex = function () {
        return this._currentFrameIndex;
    };
    Animation.prototype.goToFrame = function (frameIndex) {
        if (this.loop) {
            frameIndex = (frameIndex > this.getLastFrameIndex()) ? 0 : frameIndex;
            frameIndex = (frameIndex < 0) ? this.getLastFrameIndex() : frameIndex;
        }
        else {
            frameIndex = (frameIndex > this.getLastFrameIndex()) ? this.getLastFrameIndex() : frameIndex;
            frameIndex = (frameIndex < 0) ? 0 : frameIndex;
        }
        this._currentFrameIndex = frameIndex;
        this.texture = this.getCurrentFrameTexture();
        this.emit(AnimationEvent.PLAY_FRAME, this._currentFrameIndex);
    };
    Animation.createFromTexturesAndFrames = function (desc) {
        var anim = new Animation();
        desc.forEach(function (frameConfig) {
            anim.setFrameTexture(frameConfig.frame, frameConfig.texture);
        });
        return anim;
    };
    return Animation;
}(DisplayObject_1.default));
exports.default = Animation;
var AnimationEvent;
(function (AnimationEvent) {
    AnimationEvent["PLAY_FRAME"] = "PLAY_FRAME";
})(AnimationEvent = exports.AnimationEvent || (exports.AnimationEvent = {}));
