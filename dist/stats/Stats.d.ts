import Stage from "../display/Stage";
import DisplayObject from "../display/DisplayObject";
export default class Stats extends DisplayObject {
    private _stage;
    private _lastFrameTime;
    private _monitoring;
    private _elapsedTime;
    constructor();
    getStage(): Stage | null;
    start(): void;
    stop(): void;
    setStage(value: Stage): void;
    private _enterFrame;
    getFps(): number;
}
