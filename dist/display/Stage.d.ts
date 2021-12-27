import IRenderer from "../rendering/IRenderer";
import Camera from "./Camera";
import DisplayObjectContainer from "./DisplayObjectContainer";
export default class Stage extends DisplayObjectContainer {
    private _camera;
    private _currentFrame;
    private _renderer;
    private _clippingStrategy;
    constructor();
    setCamera(camera: Camera): void;
    getCamera(): Camera;
    setClippingStrategy(strategy: ClippingStrategy): void;
    getClippingStrategy(): ClippingStrategy;
    getRenderer(): IRenderer;
    setRenderer(renderer: IRenderer): void;
    getCanvas(): HTMLCanvasElement;
    getContext(): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext;
    getCurrentFrame(): number;
    nextFrame(): void;
}
export declare enum StageEvent {
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}
export declare type ClippingStrategy = (stage: Stage, camera: Camera) => void;
