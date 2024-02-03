"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePadTouchEvent = void 0;
const tiny_observer_1 = require("@thetinyspark/tiny-observer");
class GamePad extends tiny_observer_1.Emitter {
    _touches = [];
    _pressed = [];
    setTouches(touches) {
        this._touches = touches;
    }
    getTouches() {
        return this._touches;
    }
    getTouchByKey(key) {
        return this.getTouches().find(touch => touch.key === key) || null;
    }
    getTouchByValue(value) {
        return this.getTouches().find(touch => touch.value === value) || null;
    }
    getPressedTouches() {
        return this._pressed;
    }
    press(touch, timestamp = 0) {
        touch.press(timestamp);
        if (!this._pressed.includes(touch)) {
            this._pressed.push(touch);
            this.emit(GamePadTouchEvent.PRESS_KEY, touch);
        }
    }
    release(touch, timestamp = 0) {
        const pos = this._pressed.indexOf(touch);
        if (pos > -1) {
            this._pressed.splice(this._pressed.indexOf(touch), 1);
            const time = touch.release(timestamp);
            this.emit(GamePadTouchEvent.PRESS_KEY, touch);
            return time;
        }
        else {
            return touch.getElapsedTime();
        }
    }
}
exports.default = GamePad;
var GamePadTouchEvent;
(function (GamePadTouchEvent) {
    GamePadTouchEvent["PRESS_KEY"] = "PRESS_KEY";
    GamePadTouchEvent["RELEASE_KEY"] = "RELEASE_KEY";
})(GamePadTouchEvent = exports.GamePadTouchEvent || (exports.GamePadTouchEvent = {}));
