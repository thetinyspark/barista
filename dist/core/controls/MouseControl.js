"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseControlEvent = void 0;
const Geometry_1 = require("../utils/Geometry");
const isser_1 = require("../utils/isser");
/**
 * A MouseControl object is used to monitor mouse events which happened on the scene's canvas.
 * It will map native events to custom events.
 * It will also remap the original events coordinates into the scene's coordinate system.
 * And finally, it can detect which DisplayObject is targeted by the event.
 */
class MouseControl {
    constructor(stage) {
        this._touchHandler = (e) => {
            const canvas = this._stage.getCanvas();
            const bounds = canvas.getBoundingClientRect();
            const clientX = (e.touches.length == 0) ? e.changedTouches[0].clientX : e.touches[0].clientX;
            const clientY = (e.touches.length == 0) ? e.changedTouches[0].clientY : e.touches[0].clientY;
            const x = (clientX - bounds.x) >> 0;
            const y = (clientY - bounds.y) >> 0;
            e.preventDefault();
            switch (e.type) {
                case "touchstart":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_DOWN);
                    break;
                case "touchend":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_UP);
                    break;
                case "touchmove":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_MOVE);
                    break;
            }
        };
        this._handler = (e) => {
            const canvas = this._stage.getCanvas();
            const bounds = canvas.getBoundingClientRect();
            const x = (e.clientX - bounds.x) >> 0;
            const y = (e.clientY - bounds.y) >> 0;
            switch (e.type) {
                case "click":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_CLICK);
                    break;
                case "mouseup":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_UP);
                    break;
                case "mousedown":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_DOWN);
                    break;
                case "mousemove":
                    this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_MOVE);
                    break;
            }
        };
        this._stage = stage;
    }
    /**
     * Starts stage monitoring
     */
    activate() {
        this.deactivate();
        this._stage.getCanvas().addEventListener("click", this._handler);
        this._stage.getCanvas().addEventListener("mouseup", this._handler);
        this._stage.getCanvas().addEventListener("mousedown", this._handler);
        this._stage.getCanvas().addEventListener("mousemove", this._handler);
        this._stage.getCanvas().addEventListener("touchstart", this._touchHandler);
        this._stage.getCanvas().addEventListener("touchend", this._touchHandler);
        this._stage.getCanvas().addEventListener("touchmove", this._touchHandler);
    }
    /**
     * Stops stage monitoring
     */
    deactivate() {
        this._stage.getCanvas().removeEventListener("click", this._handler);
        this._stage.getCanvas().removeEventListener("mouseup", this._handler);
        this._stage.getCanvas().removeEventListener("mousedown", this._handler);
        this._stage.getCanvas().removeEventListener("mousemove", this._handler);
        this._stage.getCanvas().removeEventListener("touchstart", this._touchHandler);
        this._stage.getCanvas().removeEventListener("touchend", this._touchHandler);
        this._stage.getCanvas().removeEventListener("touchmove", this._touchHandler);
    }
    _getObjectUnderPointRecursive(x, y, container) {
        const children = container.getChildren();
        let i = children.length;
        while (--i > -1) {
            const current = children[i];
            if (isser_1.isDisplayObjectContainer(current)) {
                const result = this._getObjectUnderPointRecursive(x, y, current);
                if (result !== null)
                    return result;
            }
            else {
                if (current.mouseEventsEnabled) {
                    const result = Geometry_1.default.collide(x, y, current);
                    if (result)
                        return current;
                }
            }
        }
        return null;
    }
    /**
     * Generates a, event at a specific position on the Stage.
     * It acts like a virtual mouse.
     * @param x number The x position of the virtual mouse
     * @param y number The y position of the virtual mouse
     * @param type The virtual mouse event type
     */
    dispatchAt(x, y, type) {
        const object = this._getObjectUnderPointRecursive(x, y, this._stage);
        const target = (object === null) ? this._stage : object;
        let current = target;
        while (current !== null) {
            current.emit(type, { x: x, y: y, target: target });
            current = current.parent;
        }
    }
}
exports.default = MouseControl;
var MouseControlEvent;
(function (MouseControlEvent) {
    MouseControlEvent["MOUSE_CONTROL_CLICK"] = "MOUSE_CONTROL_CLICK";
    MouseControlEvent["MOUSE_CONTROL_MOVE"] = "MOUSE_CONTROL_MOVE";
    MouseControlEvent["MOUSE_CONTROL_UP"] = "MOUSE_CONTROL_UP";
    MouseControlEvent["MOUSE_CONTROL_DOWN"] = "MOUSE_CONTROL_DOWN";
})(MouseControlEvent = exports.MouseControlEvent || (exports.MouseControlEvent = {}));
