import Stage from "./Stage";
import DisplayObject from "./DisplayObject";
export default class Stats extends DisplayObject {
    private _stage;
    private _lastFrameTime;
    private _monitoring;
    private _elapsedTime;
    private _context;
    constructor();
    getStage(): Stage | null;
    start(): void;
    stop(): void;
    setStage(value: Stage): void;
    private _enterFrame;
    getFps(): number;
}
