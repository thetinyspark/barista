import Stage from "./Stage";
import DisplayObject from "./DisplayObject";
/**
 * The Stats class is a basic frame counter.
 * It supports basic functionality like start, stop, getFps
 */
export default class Stats extends DisplayObject {
    private _stage;
    private _lastFrameTime;
    private _monitoring;
    private _elapsedTime;
    private _context;
    constructor();
    /**
     * Returns the stage object which is monitored by Stats instance
     * @returns Stage object
     */
    getStage(): Stage | null;
    /**
     * Sets the stage object which will be monitored by Stats instance
     * @param value Stage object
     */
    setStage(value: Stage): void;
    /**
     * Starts monitoring the stage
     */
    start(): void;
    /**
     * Stops monitoring the stage
     */
    stop(): void;
    /**
     * Returns the current FPS (frame per second) of the monitored stage.
     * @returns number
     */
    getFps(): number;
    private _enterFrame;
}
