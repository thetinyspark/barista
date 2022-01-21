import { mat2d } from "gl-matrix";
import IRenderer from "../rendering/IRenderer";
import Camera from "./Camera";
import DisplayObjectContainer from "./DisplayObjectContainer";
/**
 * The Stage class is the base class for the scene.
 * It supports basic functionality like camera, clipping strategy, rendering...
 *
 * ```typescript
 * import {Stage, Camera} from "@thetinyspark/moocaccino-barista";
 *
 * // Create stage instance
 * const stage:Stage = new Stage();
 *
 * // Defines renderer's canvas width & height
 * stage.getRenderer().getCanvas().width = stage.width = 1024;
 * stage.getRenderer().getCanvas().height = stage.height = 1024;
 *
 *
 * // Now process the next frame
 * stage.nextFrame();
 *
 * // Add the canvas to the HTML document.
 * document.body.appendChild(stage.getRenderer().getCanvas());
 *
 * // Event thought a Stage is a DisplayObject,
 * // the most of the time we should avoid to transform it.
 * // If you want to manipulate the whole scene, you have
 * // a basic camera support.
 *
 * // create and sets the Camera
 * stage.setCamera(new Camera());
 *
 * // then you can transform it.
 * // Here we translate the camera by 100px to the right,
 * // that will pan the whole scene by 100px to the left.
 * // Every transformation which is applied to the Camera
 * // is reversed and applied to the whole scene.
 * stage.getCamera().x = 100;
 *
 * // If you wanna have control on which objects is actually drawn,
 * // 'cause you have too many offscreen objects for example,
 * // then you can define a custom clipping strategy.
 *
 * const strategy:ClippingStrategy = (stage:Stage, camera:Camera)=>{
 *   // applies your clipping strategy code here
 * };
 * stage.setClippingStrategy(strategy);
 *
 * stage.nextFrame();
 * ```
 *
 */
export default class Stage extends DisplayObjectContainer {
    private _camera;
    private _currentFrame;
    private _renderer;
    private _clippingStrategy;
    /**
     * Tells if the matrices are updated every frame or not
     */
    autoUpdateMatrices: boolean;
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
     * Updates every DisplayObject matrices (if auto).
     * Increase current frame.
     * Applies clipping strategy if there is one.
     * Renders the display list.
     * Emit events (ENTER_FRAME & FRAME_END)
     */
    nextFrame(): void;
    update(worldMatrix: mat2d, worldOpacity: number): void;
}
export declare enum StageEvent {
    ENTER_FRAME = "ENTER_FRAME",
    FRAME_END = "FRAME_END"
}
export declare type ClippingStrategy = (stage: Stage, camera: Camera) => void;
