import IRenderer from "../rendering/IRenderer";
import Camera from "./Camera";
import DisplayObjectContainer from "./DisplayObjectContainer";
/**
 * The Stage class is the base class for the scene.
 * It supports basic functionality like camera, clipping strategy, rendering...
 */
export default class Stage extends DisplayObjectContainer {
    private _camera;
    private _currentFrame;
    private _renderer;
    private _clippingStrategy;
    constructor();
    /**
     * Sets the current Stage Camera, default is null
     * @param camera Camera object
     */
    setCamera(camera: Camera): void;
    /**
     * Returns the current stage's Camera
     * @returns Camera object
     */
    getCamera(): Camera;
    /**
     * Sets a specific function which is used to clip the scene.
     * Clipping the scene consists of removing certain objects from
     * the rendering pipeline according to specific conditions.
     * @param strategy ClippingStrategy function
     */
    setClippingStrategy(strategy: ClippingStrategy): void;
    /**
     * Returns the current stage's clipping strategy, default is null
     * @returns ClippingStrategy function
     */
    getClippingStrategy(): ClippingStrategy;
    /**
     * Returns the current stage's renderer, default is Canvas2DRenderer
     * @returns IRenderer object
     */
    getRenderer(): IRenderer;
    /**
     * Sets the current stage's renderer
     * @param renderer IRenderer object
     */
    setRenderer(renderer: IRenderer): void;
    /**
     * Returns the renderer's canvas.
     * @returns HTMLCanvasElement object
     */
    getCanvas(): HTMLCanvasElement;
    /**
     * Returns the renderer's rendering context
     * @returns CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext object
     */
    getContext(): CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext;
    /**
     * Returns the current frame
     * @returns number
     */
    getCurrentFrame(): number;
    /**
     * Updates every DisplayObject matrices.
     * Increase current frame.
     * Applies clipping strategy if there is one.
     * Renders the display list.
     * Emit events (ENTER_FRAME & FRAME_END)
     */
    nextFrame(): void;
}
export declare enum StageEvent {
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}
export declare type ClippingStrategy = (stage: Stage, camera: Camera) => void;
