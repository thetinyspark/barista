"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageEvent = void 0;
var gl_matrix_1 = require("gl-matrix");
var Canvas2DRenderer_1 = require("../rendering/Canvas2DRenderer");
var DisplayObjectContainer_1 = require("./DisplayObjectContainer");
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
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        var _this = _super.call(this) || this;
        _this._camera = null;
        _this._currentFrame = 0;
        _this._renderer = new Canvas2DRenderer_1.default();
        _this._clippingStrategy = null;
        return _this;
    }
    /**
     * Sets the current Stage Camera, default is null
     * @param camera Camera object
     */
    Stage.prototype.setCamera = function (camera) {
        this._camera = camera;
    };
    /**
     * Returns the current stage's Camera
     * @returns Camera object
     */
    Stage.prototype.getCamera = function () {
        return this._camera;
    };
    /**
     * Sets a specific function which is used to clip the scene.
     * Clipping the scene consists of removing certain objects from
     * the rendering pipeline according to specific conditions.
     * @param strategy ClippingStrategy function
     */
    Stage.prototype.setClippingStrategy = function (strategy) {
        this._clippingStrategy = strategy;
    };
    /**
     * Returns the current stage's clipping strategy, default is null
     * @returns ClippingStrategy function
     */
    Stage.prototype.getClippingStrategy = function () {
        return this._clippingStrategy;
    };
    /**
     * Returns the current stage's renderer, default is Canvas2DRenderer
     * @returns IRenderer object
     */
    Stage.prototype.getRenderer = function () {
        return this._renderer;
    };
    /**
     * Sets the current stage's renderer
     * @param renderer IRenderer object
     */
    Stage.prototype.setRenderer = function (renderer) {
        this._renderer = renderer;
    };
    /**
     * Returns the renderer's canvas.
     * @returns HTMLCanvasElement object
     */
    Stage.prototype.getCanvas = function () {
        return this._renderer.getCanvas();
    };
    /**
     * Returns the renderer's rendering context
     * @returns CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext object
     */
    Stage.prototype.getContext = function () {
        return this._renderer.getContext();
    };
    /**
     * Returns the current frame
     * @returns number
     */
    Stage.prototype.getCurrentFrame = function () {
        return this._currentFrame;
    };
    /**
     * Updates every DisplayObject matrices.
     * Increase current frame.
     * Applies clipping strategy if there is one.
     * Renders the display list.
     * Emit events (ENTER_FRAME & FRAME_END)
     */
    Stage.prototype.nextFrame = function () {
        this._currentFrame++;
        if (this._camera !== null) {
            this._camera.update(gl_matrix_1.mat2d.create(), 1);
            this.update(this._camera.getRevertWorldMatrix(), 1);
        }
        else {
            this.update(gl_matrix_1.mat2d.create(), 1);
        }
        this.emit(StageEvent.ENTER_FRAME, this._currentFrame);
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
    };
    return Stage;
}(DisplayObjectContainer_1.default));
exports.default = Stage;
var StageEvent;
(function (StageEvent) {
    StageEvent["ENTER_FRAME"] = "ENTER_FRAME";
    StageEvent["FRAME_END"] = "FRAME_END";
})(StageEvent = exports.StageEvent || (exports.StageEvent = {}));
