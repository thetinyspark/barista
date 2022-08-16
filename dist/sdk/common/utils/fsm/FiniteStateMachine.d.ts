import { Emitter } from "@thetinyspark/tiny-observer";
import IState from "./IState";
export default class FiniteStateMachine extends Emitter {
    private _states;
    private _current;
    private _timestamp;
    setTime(time: number): void;
    getTime(): number;
    addState(state: IState): void;
    removeState(state: IState): void;
    reset(): void;
    hasState(id: string): boolean;
    getStateById(id: string): IState;
    getElapsedTime(): number;
    dispatch(action: string): void;
    getCurrentState(): IState;
    setCurrentState(state: IState): void;
    getStates(): IState[];
}
