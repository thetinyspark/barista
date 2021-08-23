import Stage from "../display/Stage";
export default class MouseControl {
    private _stage;
    constructor(stage: Stage);
    activate(): void;
    deactivate(): void;
    private _handler;
    private _getObjectUnderPointRecursive;
    dispatchAt(x: number, y: number, type: MouseControlEvent): void;
}
export declare enum MouseControlEvent {
    MOUSE_CONTROL_CLICK = "MOUSE_CONTROL_CLICK",
    MOUSE_CONTROL_MOVE = "MOUSE_CONTROL_MOVE",
    MOUSE_CONTROL_UP = "MOUSE_CONTROL_UP",
    MOUSE_CONTROL_DOWN = "MOUSE_CONTROL_DOWN"
}
