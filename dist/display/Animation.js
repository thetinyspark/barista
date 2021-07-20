"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationEvent = void 0;
const DisplayObject_1 = require("./DisplayObject");
class Animation extends DisplayObject_1.default {
    constructor() {
        super(...arguments);
        this._framesTextures = [];
        this._currentFrameIndex = 0;
        this._playing = false;
        this._forwarding = true;
        this.loop = false;
    }
    play() {
        this._playing = true;
        this._forwarding = true;
    }
    rewind() {
        this._playing = true;
        this._forwarding = false;
    }
    stop() {
        this._playing = false;
    }
    render(renderer) {
        super.render(renderer);
        if (this._playing) {
            const step = (this._forwarding) ? 1 : -1;
            this.goToFrame(this._currentFrameIndex + step);
        }
    }
    clearFrames() {
        this._currentFrameIndex = 0;
        this._framesTextures = [];
    }
    setFrameTexture(frameIndex, texture) {
        this._framesTextures[frameIndex] = texture;
    }
    getCurrentFrameTexture() {
        let current = this.getFrameTexture(this.getCurrentFrameIndex());
        if (current === null && this._forwarding)
            current = this.getPreviousDefinedFrameTexture(this.getCurrentFrameIndex());
        else if (current === null && !this._forwarding)
            current = this.getNextDefinedFrameTexture(this.getCurrentFrameIndex());
        return current;
    }
    getFrameTexture(frameIndex) {
        return this._framesTextures[frameIndex] || null;
    }
    getPreviousDefinedFrameTexture(frameIndex) {
        let texture = null;
        while (texture === null && frameIndex > -1) {
            texture = this.getFrameTexture(frameIndex--);
        }
        return texture;
    }
    getNextDefinedFrameTexture(frameIndex) {
        let texture = null;
        while (texture === null && frameIndex <= this.getLastFrameIndex()) {
            texture = this.getFrameTexture(frameIndex++);
        }
        return texture;
    }
    removeFrameTexture(frameIndex) {
        this._framesTextures[frameIndex] = null;
    }
    getAnimationLength() {
        return this._framesTextures.length;
    }
    getLastFrameIndex() {
        return this.getAnimationLength() - 1;
    }
    getCurrentFrameIndex() {
        return this._currentFrameIndex;
    }
    goToFrame(frameIndex) {
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
    }
}
exports.default = Animation;
var AnimationEvent;
(function (AnimationEvent) {
    AnimationEvent["PLAY_FRAME"] = "PLAY_FRAME";
})(AnimationEvent = exports.AnimationEvent || (exports.AnimationEvent = {}));
