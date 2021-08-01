"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification = /** @class */ (function () {
    function Notification(type, emitter, payload) {
        this._type = type;
        this._emitter = emitter;
        this._payload = payload;
    }
    Notification.prototype.getEventType = function () {
        return this._type;
    };
    Notification.prototype.getEmitter = function () {
        return this._emitter;
    };
    Notification.prototype.getPayload = function () {
        return this._payload;
    };
    return Notification;
}());
exports.default = Notification;
