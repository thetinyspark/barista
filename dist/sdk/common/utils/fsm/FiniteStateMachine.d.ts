import { Emitter } from "@thetinyspark/tiny-observer";
import IState from "./IState";
export default class FiniteStateMachine extends Emitter {
    private _states;
    private _current;
    addState(state: IState): void;
    removeState(state: IState): void;
    reset(): void;
    hasState(id: string): boolean;
    getStateById(id: string): IState;
    dispatch(action: string, timestamp?: number): void;
    getCurrentState(): IState;
    setCurrentState(state: IState, timestamp?: number): void;
    getStates(): IState[];
}
