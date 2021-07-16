import Stage from "../display/Stage";
import DisplayObject from "../display/DisplayObject";
import IRenderer from "../rendering/IRenderer";
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
    render(renderer: IRenderer): void;
}
