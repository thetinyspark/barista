import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import DisplayObject from "./DisplayObject";
/**
 * The Animation class is the base class for all animations that can be placed on the display list.
 * It supports basic functionality like play, rewind, stop, loop the animations.
 * It is basically a DisplayObject with a an array of "frame textures".
 * Everytime the render method is called, the currentFrameIndex is increased or decreased
 * depending on animation length, animation way (backward||forward)
 */
export default class Animation extends DisplayObject {
    private _framesTextures;
    private _currentFrameIndex;
    private _playing;
    private _forwarding;
    loop: boolean;
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
     * Sets the texture for the frame index passed in params
     * @param frameIndex the frame index
     * @param texture  the texture associated to the frame index
     */
    setFrameTexture(frameIndex: number, texture: Texture): void;
    /**
     * Returns the current frame texture if it exists
     * @returns a Texture object or null
     */
    getCurrentFrameTexture(): Texture | null;
    /**
     * Returns the frame texture at a specific index if it exists
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    getFrameTexture(frameIndex: number): Texture | null;
    /**
     * Returns the closest defined frame texture( if it exists)
     * before the specific frame index.
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    getPreviousDefinedFrameTexture(frameIndex: number): Texture | null;
    /**
     * Returns the closest defined frame texture( if it exists)
     * after the specific frame index.
     * @param frameIndex the specific frame index
     * @returns a Texture object or null
     */
    getNextDefinedFrameTexture(frameIndex: number): Texture | null;
    /**
     * Removes the frame texture at a specific index
     * @param frameIndex the specific index
     */
    removeFrameTexture(frameIndex: number): void;
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
