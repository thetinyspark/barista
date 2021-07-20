import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import DisplayObject from "./DisplayObject";
export default class Animation extends DisplayObject {
    private _framesTextures;
    private _currentFrameIndex;
    private _playing;
    private _forwarding;
    loop: boolean;
    play(): void;
    rewind(): void;
    stop(): void;
    render(renderer: IRenderer): void;
    clearFrames(): void;
    setFrameTexture(frameIndex: number, texture: Texture): void;
    getCurrentFrameTexture(): Texture | null;
    getFrameTexture(frameIndex: number): Texture | null;
    getPreviousDefinedFrameTexture(frameIndex: number): Texture | null;
    getNextDefinedFrameTexture(frameIndex: number): Texture | null;
    removeFrameTexture(frameIndex: number): void;
    getAnimationLength(): number;
    getLastFrameIndex(): number;
    getCurrentFrameIndex(): number;
    goToFrame(frameIndex: number): void;
}
export declare enum AnimationEvent {
    PLAY_FRAME = "PLAY_FRAME"
}
