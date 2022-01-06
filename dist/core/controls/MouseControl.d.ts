import Stage from "../display/Stage";
/**
 * A MouseControl object is used to monitor mouse events which happened on the scene's canvas.
 * It will map native events to custom events.
 * It will also remap the original events coordinates into the scene's coordinate system.
 * And finally, it can detect which DisplayObject is targeted by the event.
 */
export default class MouseControl {
    private _stage;
    constructor(stage: Stage);
    /**
     * Starts stage monitoring
     */
    activate(): void;
    /**
     * Stops stage monitoring
     */
    deactivate(): void;
    private _handler;
    private _getObjectUnderPointRecursive;
    /**
     * Generates a, event at a specific position on the Stage.
     * It acts like a virtual mouse.
     * @param x number The x position of the virtual mouse
     * @param y number The y position of the virtual mouse
     * @param type The virtual mouse event type
     */
    dispatchAt(x: number, y: number, type: MouseControlEvent): void;
}
export declare enum MouseControlEvent {
    MOUSE_CONTROL_CLICK = "MOUSE_CONTROL_CLICK",
    MOUSE_CONTROL_MOVE = "MOUSE_CONTROL_MOVE",
    MOUSE_CONTROL_UP = "MOUSE_CONTROL_UP",
    MOUSE_CONTROL_DOWN = "MOUSE_CONTROL_DOWN"
}
