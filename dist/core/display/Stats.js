"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stage_1 = require("./Stage");
const DisplayObject_1 = require("./DisplayObject");
const Texture_1 = require("../texture/Texture");
const TextureData_1 = require("../texture/TextureData");
const CanvasUtils_1 = require("../utils/CanvasUtils");
/**
 * The Stats class is a basic frame counter.
 * It supports basic functionality like start, stop, getFps
 * ```typescript
 * import {Stage, Stats} from "@thetinyspark/moocaccino-barista";
 * // Create stage instance
 * const stage:Stage = new Stage();
 * // Defines renderer canvas width & height
 * stage.getRenderer().getCanvas().width = stage.width = 1024;
 * stage.getRenderer().getCanvas().height = stage.height = 1024;
 * ```
 * ```typescript
 * // Create and add stats object
 * const stats:Stats = new Stats();
 * stats.x = stats.y = 0;
 * stats.width = 100;
 * stats.height = 30;
 * stage.addChild(stats);
 * ```
 * ```typescript
 * // render loop
 * function render():void{
 *   stage.nextFrame();
 *   window.requestAnimation(render);
 * }
 * render();
 * ```
 */
class Stats extends DisplayObject_1.default {
    constructor() {
        super();
        this._stage = null;
        this._lastFrameTime = 0;
        this._monitoring = false;
        this._elapsedTime = 0;
        this._enterFrame = (notification) => {
            this._elapsedTime = new Date().getTime() - this._lastFrameTime;
            this._lastFrameTime = new Date().getTime();
            const currentFrame = notification.getPayload();
            if (currentFrame % 60 === 0) {
                const info = "fps: " + this.getFps() + ", frame: " + currentFrame;
                const context = this._context;
                context.beginPath();
                context.fillStyle = "black";
                context.fillRect(0, 0, this.width, this.height);
                context.fill();
                context.font = "20px Arial";
                context.fillStyle = "red";
                context.fillText(info, 0, Math.round(this.height / 2));
                context.closePath();
            }
        };
        const data = CanvasUtils_1.default.create();
        this.width = data.width = 200;
        this.height = data.height = 50;
        this.texture = new Texture_1.default("stats_texture", new TextureData_1.default(data), 0, 0, data.width, data.height);
        this.texture.data.isDynamic = true;
        this._context = this.texture.source.getContext("2d");
    }
    /**
     * Returns the stage object which is monitored by Stats instance
     * @returns Stage object
     */
    getStage() {
        return this._stage;
    }
    /**
     * Sets the stage object which will be monitored by Stats instance
     * @param value Stage object
     */
    setStage(value) {
        this.stop();
        this._stage = value;
    }
    /**
     * Starts monitoring the stage
     */
    start() {
        if (this._stage !== null)
            this._stage.subscribe(Stage_1.StageEvent.ENTER_FRAME, this._enterFrame);
        this._monitoring = true;
    }
    /**
     * Stops monitoring the stage
     */
    stop() {
        if (this._stage !== null)
            this._stage.unsubscribe(Stage_1.StageEvent.ENTER_FRAME, this._enterFrame);
        this._monitoring = false;
    }
    /**
     * Returns the current FPS (frame per second) of the monitored stage.
     * @returns number
     */
    getFps() {
        return this._monitoring ? Math.round(1000 / this._elapsedTime) : -1;
    }
}
exports.default = Stats;
