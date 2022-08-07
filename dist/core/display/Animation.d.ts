import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import AnimationFrameData from "./AnimationFrameData";
import DisplayObjectContainer from "./DisplayObjectContainer";
/**
 * The Animation class is the base class for all animations that can be placed on the display list.
 * It supports basic functionality like play, rewind, stop, loop the animations.
 * It is basically a DisplayObject with a an array of "frame textures".
 * Everytime the render method is called, the currentFrameIndex is increased or decreased
 * depending on animation length, animation way (backward||forward)
 */
export default class Animation extends DisplayObjectContainer {
    private _frames;
    private _currentFrameIndex;
    private _playing;
    private _forwarding;
    loop: boolean;
    constructor();
    /**
     * Plays the animation forward
     */
    play(): void;
    /**
     * Plays the animation backward
     */
    rewind(): void;
    /**
     * Stop the animation
     */
    stop(): void;
    render(renderer: IRenderer): void;
    /**
     * Clears every frames.
     */
    clearFrames(): void;
    /**
     * Sets frame data for the frame index passed in params
     * @param frameIndex the frame index
     * @param frameData  the AnimationFrameData associated to the frame index
     */
    setFrameAt(frameIndex: number, frameData: AnimationFrameData): void;
    /**
     * Returns the frame data at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    getFrameAt(frameIndex: number): AnimationFrameData | null;
    /**
     * Returns the current frame data if it exists
     * @returns an AnimationFrameData object or null
     */
    getCurrentFrame(): AnimationFrameData | null;
    /**
     * Returns the closest defined frame data( if it exists)
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    getPreviousDefinedFrameAt(frameIndex: number): AnimationFrameData | null;
    /**
     * Returns the closest defined frame data( if it exists)
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns an AnimationFrameData object or null
     */
    getNextDefinedFrameAt(frameIndex: number): AnimationFrameData | null;
    /**
     * Removes the frame data at a specific index
     * @param frameIndex the specific index
     */
    removeFrameAt(frameIndex: number): void;
    /**
     * @returns number the animation length (num frames)
     */
    getAnimationLength(): number;
    /**
     * @returns number The last valid frame index (0-based)
     */
    getLastFrameIndex(): number;
    /**
     * @returns number the current frame index
     */
    getCurrentFrameIndex(): number;
    /**
     * Go to the specific frame index
     * @param frameIndex the specific frame index
     */
    goToFrame(frameIndex: number): void;
    /**
     * Creates and returns a new Animation from a set of pairs "frame/texture" objects.
     * @param desc an array of frames & textures
     * @returns Animation object
     */
    static createFromTexturesAndFrames(desc: {
        frame: number;
        texture: Texture;
    }[]): Animation;
}
export declare enum AnimationEvent {
    PLAY_FRAME = "PLAY_FRAME"
}
