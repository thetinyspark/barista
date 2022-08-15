import { Emitter } from "@thetinyspark/tiny-observer";
import IState from "./IState";

export default class FiniteStateMachine extends Emitter{
    private _states:IState[] = [];
    private _current:IState = null;

    public addState( state:IState ):void{
        this._states.push(state);
    }

    public removeState(state:IState ):void{
        this._states.splice( this._states.indexOf(state), 1);
    }

    public reset():void{
        this._current = null;
        this._states = [];
    }

    public hasState(id:string):boolean{
        return this.getStateById(id) !== null;
    }

    public getStateById(id:string):IState{
        return this._states.find( state => state.id === id ) || null;
    }

    public dispatch(action:string, timestamp:number = 0):void{
        const current = this.getCurrentState();

        if( current === null )
            return;

        
        const elapsed = timestamp - current.startTime;
        if( current.cancelable !== true && elapsed < current.duration )
            return;

        const currentAction = current.actions.find( cur => cur.name === action ) || null;
        if( currentAction === null )
            return;

        const target = this.getStateById(currentAction.target);

        if( target !== current ){
            this.setCurrentState(target, timestamp);
            this.emit("CHANGE_STATE", target);
        }
    }

    public getCurrentState():IState{
        return this._current || null;
    }

    public setCurrentState(state:IState, timestamp:number = 0):void{
        if( !this.hasState(state.id) )
            this.addState(state);

        state.startTime = timestamp;
        this._current = state;
    }

    public getStates():IState[]{
        return this._states;
    }
}

