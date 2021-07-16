import IRenderer from "../rendering/IRenderer";
import DisplayObjectContainer from "./DisplayObjectContainer";
export default class Stage extends DisplayObjectContainer {
    private _canvas;
    private _context;
    private _currentFrame;
    private _renderer;
    constructor();
    private _setCanvas;
    getRenderer(): IRenderer;
    setRenderer(renderer: IRenderer): void;
    getCanvas(): HTMLCanvasElement;
    getContext(): CanvasRenderingContext2D;
    getCurrentFrame(): number;
    nextFrame(): void;
}
export declare enum StageEvent {
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}
