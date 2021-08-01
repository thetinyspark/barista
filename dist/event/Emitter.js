"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification_1 = require("./Notification");
var Emitter = /** @class */ (function () {
    function Emitter() {
        this._observers = new Map();
    }
    Emitter.prototype.emit = function (eventType, payload) {
        var observers = this._observers.get(eventType) || [];
        var notif = new Notification_1.default(eventType, this, payload);
        observers.forEach(function (observer) {
            observer(notif);
        });
    };
    Emitter.prototype.hasObservers = function (eventType) {
        return this._observers.get(eventType) !== undefined;
    };
    Emitter.prototype.unsubscribe = function (eventType, observer) {
        if (this.isObserver(eventType, observer))
            this._observers.delete(eventType);
    };
    Emitter.prototype.isObserver = function (eventType, observer) {
        var observers = this._observers.get(eventType) || [];
        return observers.indexOf(observer) > -1;
    };
    Emitter.prototype.subscribe = function (eventType, observer) {
        if (this.isObserver(eventType, observer))
            return false;
        var observers = this._observers.get(eventType) || [];
        observers.push(observer);
        this._observers.set(eventType, observers);
        return true;
    };
    Emitter.prototype.unsubscribeAll = function () {
        this._observers = new Map();
    };
    return Emitter;
}());
exports.default = Emitter;
