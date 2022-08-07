"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationEvent = void 0;
const DisplayObject_1 = require("./DisplayObject");
/**
 * The Animation class is the base class for all animations that can be placed on the display list.
 * It supports basic functionality like play, rewind, stop, loop the animations.
 * It is basically a DisplayObject with a an array of "frame textures".
 * Everytime the render method is called, the currentFrameIndex is increased or decreased
 * depending on animation length, animation way (backward||forward)
 */
class Animation extends DisplayObject_1.default {
    constructor() {
        super(...arguments);
        this._framesOffset = [];
        this._framesTextures = [];
        this._currentFrameIndex = 0;
        this._playing = false;
        this._forwarding = true;
        this.loop = false;
    }
    /**
     * Plays the animation forward
     */
    play() {
        this._playing = true;
        this._forwarding = true;
    }
    /**
     * Plays the animation backward
     */
    rewind() {
        this._playing = true;
        this._forwarding = false;
    }
    /**
     * Stop the animation
     */
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
    /**
     * Clears every frames.
     */
    clearFrames() {
        this._currentFrameIndex = 0;
        this._framesTextures = [];
        this._framesOffset = [];
    }
    /**
     * Sets the texture for the frame index passed in params
     * @param frameIndex the frame index
     * @param texture  the texture associated to the frame index
     */
    setFrameTexture(frameIndex, texture) {
        this._framesTextures[frameIndex] = texture;
    }
    /**
     * Sets the texture for the frame index passed in params
     * @param frameIndex the frame index
     * @param offsetX  the offsetX associated to the frame index
     * @param offsetY  the offsetX associated to the frame index
     */
    setFrameOffset(frameIndex, offsetX, offsetY) {
        this._framesOffset[frameIndex] = { offsetX, offsetY };
    }
    /**
     * Returns the current frame texture if it exists
     * @returns a Texture object or null
     */
    getCurrentFrameOffset() {
        let current = this.getFrameOffset(this.getCurrentFrameIndex());
        if (current === null && this._forwarding)
            current = this.getPreviousDefinedFrameOffset(this.getCurrentFrameIndex());
        else if (current === null && !this._forwarding)
            current = this.getNextDefinedFrameOffset(this.getCurrentFrameIndex());
        return current;
    }
    /**
     * Returns the current frame texture if it exists
     * @returns a Texture object or null
     */
    getCurrentFrameTexture() {
        let current = this.getFrameTexture(this.getCurrentFrameIndex());
        if (current === null && this._forwarding)
            current = this.getPreviousDefinedFrameTexture(this.getCurrentFrameIndex());
        else if (current === null && !this._forwarding)
            current = this.getNextDefinedFrameTexture(this.getCurrentFrameIndex());
        return current;
    }
    /**
     * Returns the frame texture at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    getFrameTexture(frameIndex) {
        return this._framesTextures[frameIndex] || null;
    }
    /**
     * Returns the frame offsets at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns an object
     */
    getFrameOffset(frameIndex) {
        return this._framesOffset[frameIndex] || null;
    }
    /**
     * Returns the closest defined frame texture( if it exists)
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    getPreviousDefinedFrameTexture(frameIndex) {
        let texture = null;
        while (texture === null && frameIndex > -1) {
            texture = this.getFrameTexture(frameIndex--);
        }
        return texture;
    }
    /**
     * Returns the closest defined frame offset( if it exists)
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an object with offsetX & offsetY or null
     */
    getPreviousDefinedFrameOffset(frameIndex) {
        let offset = null;
        while (offset === null && frameIndex > -1) {
            offset = this.getFrameOffset(frameIndex--);
        }
        return offset;
    }
    /**
     * Returns the closest defined frame texture( if it exists)
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    getNextDefinedFrameTexture(frameIndex) {
        let texture = null;
        while (texture === null && frameIndex <= this.getLastFrameIndex()) {
            texture = this.getFrameTexture(frameIndex++);
        }
        return texture;
    }
    /**
     * Returns the closest defined frame offset( if it exists)
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an object with offsetX & offsetY or null
     */
    getNextDefinedFrameOffset(frameIndex) {
        let offset = null;
        while (offset === null && frameIndex <= this.getLastFrameIndex()) {
            offset = this.getFrameOffset(frameIndex++);
        }
        return offset;
    }
    /**
     * Removes the frame texture at a specific index
     * @param frameIndex the specific index
     */
    removeFrameTexture(frameIndex) {
        this._framesTextures[frameIndex] = null;
    }
    /**
     * Removes the frame offset at a specific index
     * @param frameIndex the specific index
     */
    removeFrameOffset(frameIndex) {
        this._framesOffset[frameIndex] = null;
    }
    /**
     * @returns number the animation length (num frames)
     */
    getAnimationLength() {
        return this._framesTextures.length;
    }
    /**
     * @returns number The last valid frame index (0-based)
     */
    getLastFrameIndex() {
        return this.getAnimationLength() - 1;
    }
    /**
     * @returns number the current frame index
     */
    getCurrentFrameIndex() {
        return this._currentFrameIndex;
    }
    /**
     * Go to the specific frame index
     * @param frameIndex the specific frame index
     */
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
        const offset = this.getCurrentFrameOffset();
        if (offset !== null) {
            this.offsetX = offset.offsetX;
            this.offsetY = offset.offsetY;
        }
        this.emit(AnimationEvent.PLAY_FRAME, this._currentFrameIndex);
    }
    /**
     * Creates and returns a new Animation from a set of pairs "frame/texture" objects.
     * @param desc an array of frames & textures
     * @returns Animation object
     */
    static createFromTexturesAndFrames(desc) {
        const anim = new Animation();
        desc.forEach((frameConfig) => {
            anim.setFrameTexture(frameConfig.frame, frameConfig.texture);
        });
        return anim;
    }
}
exports.default = Animation;
var AnimationEvent;
(function (AnimationEvent) {
    AnimationEvent["PLAY_FRAME"] = "PLAY_FRAME";
})(AnimationEvent = exports.AnimationEvent || (exports.AnimationEvent = {}));
