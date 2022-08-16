"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_observer_1 = require("@thetinyspark/tiny-observer");
class FiniteStateMachine extends tiny_observer_1.Emitter {
    constructor() {
        super(...arguments);
        this._states = [];
        this._current = null;
        this._timestamp = 0;
    }
    setTime(time) {
        this._timestamp = time;
        const state = this.getCurrentState();
        if (state === null || state.onCompleteAction === null)
            return;
        const duration1 = state.duration || 0;
        const duration2 = state.lockDuration || 0;
        const duration = Math.max(duration1, duration2);
        if (this.getElapsedTime() < duration)
            return;
        this.emit("ON_COMPLETE_ACTION", state.onCompleteAction);
    }
    getTime() {
        return this._timestamp;
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
    getElapsedTime() {
        const current = this.getCurrentState();
        return current === null ? -1 : this._timestamp - current.startTime;
    }
    dispatch(action) {
        const current = this.getCurrentState();
        if (current === null)
            return;
        const elapsed = this._timestamp - current.startTime;
        if (elapsed < current.lockDuration)
            return;
        const currentAction = current.actions.find(cur => cur.name === action) || null;
        if (currentAction === null)
            return;
        const target = this.getStateById(currentAction.target);
        if (target !== current) {
            this.setCurrentState(target);
            this.emit("CHANGE_STATE", target);
        }
    }
    getCurrentState() {
        return this._current || null;
    }
    setCurrentState(state) {
        if (!this.hasState(state.id))
            this.addState(state);
        state.startTime = this._timestamp;
        this._current = state;
    }
    getStates() {
        return this._states;
    }
}
exports.default = FiniteStateMachine;
FiniteStateMachine.ON_COMPLETE_ACTION = "ON_COMPLETE_ACTION";
