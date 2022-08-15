"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_observer_1 = require("@thetinyspark/tiny-observer");
class FiniteStateMachine extends tiny_observer_1.Emitter {
    constructor() {
        super(...arguments);
        this._states = [];
        this._current = null;
    }
    addState(state) {
        this._states.push(state);
    }
    removeState(state) {
        this._states.splice(this._states.indexOf(state), 1);
    }
    reset() {
        this._current = null;
        this._states = [];
    }
    hasState(id) {
        return this.getStateById(id) !== null;
    }
    getStateById(id) {
        return this._states.find(state => state.id === id) || null;
    }
    dispatch(action, timestamp = 0) {
        const current = this.getCurrentState();
        if (current === null)
            return;
        const elapsed = timestamp - current.startTime;
        if (current.cancelable !== true && elapsed < current.duration)
            return;
        const currentAction = current.actions.find(cur => cur.name === action) || null;
        if (currentAction === null)
            return;
        const target = this.getStateById(currentAction.target);
        if (target !== current) {
            this.setCurrentState(target, timestamp);
            this.emit("CHANGE_STATE", target);
        }
    }
    getCurrentState() {
        return this._current || null;
    }
    setCurrentState(state, timestamp = 0) {
        if (!this.hasState(state.id))
            this.addState(state);
        state.startTime = timestamp;
        this._current = state;
    }
    getStates() {
        return this._states;
    }
}
exports.default = FiniteStateMachine;
