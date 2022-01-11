import IState from "./IState";
export default class FiniteStateMachine {
    private _states;
    private _current;
    addState(state: IState): void;
    removeState(state: IState): void;
    reset(): void;
    hasState(id: string): boolean;
    getStateById(id: string): IState;
    dispatch(action: string): void;
    getCurrentState(): IState;
    setCurrentState(state: IState): void;
    getStates(): IState[];
}
