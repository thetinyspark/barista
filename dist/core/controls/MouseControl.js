"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseControlEvent = void 0;
var Geometry_1 = require("../utils/Geometry");
var isser_1 = require("../utils/isser");
/**
 * A MouseControl object is used to monitor mouse events which happened on the scene's canvas.
 * It will map native events to custom events.
 * It will also remap the original events coordinates into the scene's coordinate system.
 * And finally, it can detect which DisplayObject is targeted by the event.
 */
var MouseControl = /** @class */ (function () {
    function MouseControl(stage) {
        var _this = this;
        this._handler = function (e) {
            var canvas = _this._stage.getCanvas();
            var bounds = canvas.getBoundingClientRect();
            var x = (e.clientX - bounds.x) >> 0;
            var y = (e.clientY - bounds.y) >> 0;
            switch (e.type) {
                case "click":
                    _this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_CLICK);
                    break;
                case "mouseup":
                    _this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_UP);
                    break;
                case "mousedown":
                    _this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_DOWN);
                    break;
                case "mousemove":
                    _this.dispatchAt(x, y, MouseControlEvent.MOUSE_CONTROL_MOVE);
                    break;
            }
        };
        this._stage = stage;
    }
    /**
     * Starts stage monitoring
     */
    MouseControl.prototype.activate = function () {
        this.deactivate();
        this._stage.getCanvas().addEventListener("click", this._handler);
        this._stage.getCanvas().addEventListener("mouseup", this._handler);
        this._stage.getCanvas().addEventListener("mousedown", this._handler);
        this._stage.getCanvas().addEventListener("mousemove", this._handler);
    };
    /**
     * Stops stage monitoring
     */
    MouseControl.prototype.deactivate = function () {
        this._stage.getCanvas().removeEventListener("click", this._handler);
        this._stage.getCanvas().removeEventListener("mouseup", this._handler);
        this._stage.getCanvas().removeEventListener("mousedown", this._handler);
        this._stage.getCanvas().removeEventListener("mousemove", this._handler);
    };
    MouseControl.prototype._getObjectUnderPointRecursive = function (x, y, container) {
        var children = container.getChildren();
        var i = children.length;
        while (--i > -1) {
            var current = children[i];
            if (isser_1.isDisplayObjectContainer(current)) {
                var result = this._getObjectUnderPointRecursive(x, y, current);
                if (result !== null)
                    return result;
            }
            else {
                var result = Geometry_1.default.collide(x, y, current);
                if (result)
                    return current;
            }
        }
        return null;
    };
    /**
     * Generates a, event at a specific position on the Stage.
     * It acts like a virtual mouse.
     * @param x number The x position of the virtual mouse
     * @param y number The y position of the virtual mouse
     * @param type The virtual mouse event type
     */
    MouseControl.prototype.dispatchAt = function (x, y, type) {
        var object = this._getObjectUnderPointRecursive(x, y, this._stage);
        var target = (object === null) ? this._stage : object;
        var current = target;
        while (current !== null) {
            current.emit(type, { x: x, y: y, target: target });
            current = current.parent;
        }
    };
    return MouseControl;
}());
exports.default = MouseControl;
var MouseControlEvent;
(function (MouseControlEvent) {
    MouseControlEvent["MOUSE_CONTROL_CLICK"] = "MOUSE_CONTROL_CLICK";
    MouseControlEvent["MOUSE_CONTROL_MOVE"] = "MOUSE_CONTROL_MOVE";
    MouseControlEvent["MOUSE_CONTROL_UP"] = "MOUSE_CONTROL_UP";
    MouseControlEvent["MOUSE_CONTROL_DOWN"] = "MOUSE_CONTROL_DOWN";
})(MouseControlEvent = exports.MouseControlEvent || (exports.MouseControlEvent = {}));
