"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notification {
    constructor(type, emitter, payload) {
        this._type = type;
        this._emitter = emitter;
        this._payload = payload;
    }
    getEventType() {
        return this._type;
    }
    getEmitter() {
        return this._emitter;
    }
    getPayload() {
        return this._payload;
    }
}
exports.default = Notification;
