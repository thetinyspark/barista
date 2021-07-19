"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stage_1 = require("../display/Stage");
const DisplayObject_1 = require("../display/DisplayObject");
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
            const context = this.texture.getContext("2d");
            this.texture.width = this.width;
            this.texture.height = this.height;
            context.beginPath();
            context.fillStyle = "black";
            context.fillRect(0, 0, this.width, this.height);
            context.fill();
            context.fillStyle = "red";
            context.fillText(this.getFps().toString(), 0, Math.round(this.height / 2));
            context.closePath();
        };
        this.texture = document.createElement("canvas");
    }
    getStage() {
        return this._stage;
    }
    start() {
        if (this._stage !== null)
            this._stage.subscribe(Stage_1.StageEvent.ENTER_FRAME, this._enterFrame);
        this._monitoring = true;
    }
    stop() {
        if (this._stage !== null)
            this._stage.unsubscribe(Stage_1.StageEvent.ENTER_FRAME, this._enterFrame);
        this._monitoring = false;
    }
    setStage(value) {
        this.stop();
        this._stage = value;
    }
    getFps() {
        return this._monitoring ? Math.round(1000 / this._elapsedTime) : -1;
    }
}
exports.default = Stats;
