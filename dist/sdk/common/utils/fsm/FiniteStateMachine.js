"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiniteStateMachine {
    constructor() {
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
    dispatch(action) {
        const current = this.getCurrentState();
        if (current === null)
            return;
        const currentAction = current.actions.find(cur => cur.name === action) || null;
        if (currentAction === null)
            return;
        const target = this.getStateById(currentAction.target);
        this.setCurrentState(target);
    }
    getCurrentState() {
        return this._current || null;
    }
    setCurrentState(state) {
        if (!this.hasState(state.id))
            this.addState(state);
        this._current = state;
    }
    getStates() {
        return this._states;
    }
}
exports.default = FiniteStateMachine;
