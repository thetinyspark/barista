"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationEvent = void 0;
const AnimationFrameData_1 = require("./AnimationFrameData");
const DisplayObject_1 = require("./DisplayObject");
const DisplayObjectContainer_1 = require("./DisplayObjectContainer");
/**
 * The Animation class is the base class for all animations that can be placed on the display list.
 * It supports basic functionality like play, rewind, stop, loop the animations.
 * It is basically a DisplayObject with a an array of "frame textures".
 * Everytime the render method is called, the currentFrameIndex is increased or decreased
 * depending on animation length, animation way (backward||forward)
 */
class Animation extends DisplayObjectContainer_1.default {
    _frames = [];
    _currentFrameIndex = 0;
    _playing = false;
    _forwarding = true;
    loop = false;
    constructor() {
        super();
        this.addChild(new DisplayObject_1.default());
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
        this._frames = [];
    }
    /**
     * Sets frame data for the frame index passed in params
     * @param frameIndex the frame index
     * @param frameData  the AnimationFrameData associated to the frame index
     */
    setFrameAt(frameIndex, frameData) {
        frameData.index = frameIndex;
        this._frames[frameIndex] = frameData;
    }
    /**
     * Returns the frame data at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    getFrameAt(frameIndex) {
        return this._frames[frameIndex] || null;
    }
    /**
     * Returns the current frame data if it exists
     * @returns an AnimationFrameData object or null
     */
    getCurrentFrame() {
        let current = this.getFrameAt(this.getCurrentFrameIndex());
        if (current === null && this._forwarding)
            current = this.getPreviousDefinedFrameAt(this.getCurrentFrameIndex());
        else if (current === null && !this._forwarding)
            current = this.getNextDefinedFrameAt(this.getCurrentFrameIndex());
        return current;
    }
    /**
     * Returns the closest defined frame data( if it exists)
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    getPreviousDefinedFrameAt(frameIndex) {
        let frame = null;
        while (frame === null && frameIndex > -1) {
            frame = this.getFrameAt(frameIndex--);
        }
        return frame;
    }
    /**
     * Returns the closest defined frame data( if it exists)
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    getNextDefinedFrameAt(frameIndex) {
        let frame = null;
        while (frame === null && frameIndex <= this.getLastFrameIndex()) {
            frame = this.getFrameAt(frameIndex++);
        }
        return frame;
    }
    /**
     * Removes the frame data at a specific index
     * @param frameIndex the specific index
     */
    removeFrameAt(frameIndex) {
        this._frames[frameIndex] = null;
    }
    /**
     * @returns number the animation length (num frames)
     */
    getAnimationLength() {
        return this._frames.length;
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
        const frame = this.getCurrentFrame();
        const child = this.getChildren()[0];
        child.texture = frame.texture;
        child.width = frame.width;
        child.height = frame.height;
        child.x = frame.offsetX;
        child.y = frame.offsetY;
        child.update(this.worldMatrix, this.worldOpacity);
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
            const data = new AnimationFrameData_1.default();
            data.width = frameConfig.texture.sw;
            data.height = frameConfig.texture.sh;
            data.originalWidth = data.width;
            data.originalHeight = data.height;
            data.texture = frameConfig.texture;
            anim.setFrameAt(frameConfig.frame, data);
        });
        return anim;
    }
}
exports.default = Animation;
var AnimationEvent;
(function (AnimationEvent) {
    AnimationEvent["PLAY_FRAME"] = "PLAY_FRAME";
})(AnimationEvent = exports.AnimationEvent || (exports.AnimationEvent = {}));
