"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = require("./Notification");
class Emitter {
    constructor() {
        this._observers = new Map();
    }
    emit(eventType, payload) {
        const observers = this._observers.get(eventType) || [];
        const notif = new Notification_1.default(eventType, this, payload);
        observers.forEach((observer) => {
            observer(notif);
        });
    }
    hasObservers(eventType) {
        return this._observers.get(eventType) !== undefined;
    }
    unsubscribe(eventType, observer) {
        if (this.isObserver(eventType, observer))
            this._observers.delete(eventType);
    }
    isObserver(eventType, observer) {
        const observers = this._observers.get(eventType) || [];
        return observers.indexOf(observer) > -1;
    }
    subscribe(eventType, observer) {
        if (this.isObserver(eventType, observer))
            return false;
        const observers = this._observers.get(eventType) || [];
        observers.push(observer);
        this._observers.set(eventType, observers);
        return true;
    }
}
exports.default = Emitter;
