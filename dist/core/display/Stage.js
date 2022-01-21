"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageEvent = void 0;
const gl_matrix_1 = require("gl-matrix");
const Canvas2DRenderer_1 = require("../rendering/canvas/Canvas2DRenderer");
const DisplayObjectContainer_1 = require("./DisplayObjectContainer");
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
class Stage extends DisplayObjectContainer_1.default {
    constructor() {
        super();
        this._camera = null;
        this._currentFrame = 0;
        this._renderer = new Canvas2DRenderer_1.default();
        this._clippingStrategy = null;
        /**
         * Tells if the matrices are updated every frame or not
         */
        this.autoUpdateMatrices = true;
    }
    /**
     * Sets the current Stage Camera, default is null
     * @param camera Camera object
     */
    setCamera(camera) {
        this._camera = camera;
    }
    /**
     * Returns the current stage's Camera
     * @returns Camera object
     */
    getCamera() {
        return this._camera;
    }
    /**
     * Sets a specific function which is used to clip the scene.
     * Clipping the scene consists of removing certain objects from
     * the rendering pipeline according to specific conditions.
     * @param strategy ClippingStrategy function
     */
    setClippingStrategy(strategy) {
        this._clippingStrategy = strategy;
    }
    /**
     * Returns the current stage's clipping strategy, default is null
     * @returns ClippingStrategy function
     */
    getClippingStrategy() {
        return this._clippingStrategy;
    }
    /**
     * Returns the current stage's renderer, default is Canvas2DRenderer
     * @returns IRenderer object
     */
    getRenderer() {
        return this._renderer;
    }
    /**
     * Sets the current stage's renderer
     * @param renderer IRenderer object
     */
    setRenderer(renderer) {
        this._renderer = renderer;
    }
    /**
     * Returns the renderer's canvas.
     * @returns HTMLCanvasElement object
     */
    getCanvas() {
        return this._renderer.getCanvas();
    }
    /**
     * Returns the renderer's rendering context
     * @returns CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext object
     */
    getContext() {
        return this._renderer.getContext();
    }
    /**
     * Returns the current frame
     * @returns number
     */
    getCurrentFrame() {
        return this._currentFrame;
    }
    /**
     * Updates every DisplayObject matrices (if auto).
     * Increase current frame.
     * Applies clipping strategy if there is one.
     * Renders the display list.
     * Emit events (ENTER_FRAME & FRAME_END)
     */
    nextFrame() {
        this._currentFrame++;
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);
        if (this.autoUpdateMatrices === true)
            this.update(gl_matrix_1.mat2d.create(), 1);
        // apply clipping strategy if there is one
        if (this._clippingStrategy !== null && this._camera !== null) {
            this._clippingStrategy(this, this._camera);
        }
        // clear the rendering pipeline
        this._renderer.clear();
        // add children to rendering pipeline
        this.render(this._renderer);
        // draw objects
        this._renderer.draw(this._renderer.getCanvas(), this._renderer.getContext());
        this.emit(StageEvent.FRAME_END, this._currentFrame);
    }
    update(worldMatrix, worldOpacity) {
        if (this._camera !== null) {
            this._camera.update(worldMatrix, 1);
            worldMatrix = this._camera.getRevertWorldMatrix();
        }
        super.update(worldMatrix, worldOpacity);
    }
}
exports.default = Stage;
var StageEvent;
(function (StageEvent) {
    StageEvent["ENTER_FRAME"] = "ENTER_FRAME";
    StageEvent["FRAME_END"] = "FRAME_END";
})(StageEvent = exports.StageEvent || (exports.StageEvent = {}));
