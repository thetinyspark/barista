"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamePadTouch {
    constructor(key = '', value = '') {
        this._pressing = false;
        this._timestamp = 0;
        this.value = value;
        this.key = key;
    }
    get pressing() {
        return this._pressing;
    }
    getElapsedTime(timestamp = 0) {
        return (this.pressing) ? timestamp - this._timestamp : 0;
    }
    release(timestamp = 0) {
        const elapsed = this.getElapsedTime(timestamp);
        this._pressing = false;
        return elapsed;
    }
    press(timestamp = 0) {
        this._pressing = true;
        this._timestamp = timestamp;
    }
}
exports.default = GamePadTouch;
