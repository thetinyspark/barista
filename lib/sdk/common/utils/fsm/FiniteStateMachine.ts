import { Emitter } from "@thetinyspark/tiny-observer";
import { cpuUsage } from "process";
import IState from "./IState";

export default class FiniteStateMachine extends Emitter{
    private _states:IState[] = [];
    private _current:IState = null;
    private _timestamp:number = 0;

    public setTime(time:number):void{

        this._timestamp = time;
        const state = this.getCurrentState(); 
        if( state === null || state.onCompleteAction === null )
            return;

        const duration1 = state.duration || 0;
        const duration2 = state.lockDuration || 0;
        const duration = Math.max(duration1, duration2);

        if( this.getElapsedTime() < duration )
            return;

        this.dispatch(state.onCompleteAction);
    }

    public getTime():number{
        return this._timestamp;
    }

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

    public getElapsedTime():number{
        const current = this.getCurrentState(); 
        return current === null ? -1 : this._timestamp - current.startTime;
    }

    public dispatch(action:string):void{
        const current = this.getCurrentState();

        if( current === null )
            return;

        
        const elapsed = this._timestamp - current.startTime;
        if( elapsed < current.lockDuration )
            return;

        const currentAction = current.actions.find( cur => cur.name === action ) || null;
        if( currentAction === null )
            return;

        const target = this.getStateById(currentAction.target);

        if( target !== current ){
            this.setCurrentState(target);
            this.emit("CHANGE_STATE", target);
        }
    }

    public getCurrentState():IState{
        return this._current || null;
    }

    public setCurrentState(state:IState):void{
        if( !this.hasState(state.id) )
            this.addState(state);

        state.startTime = this._timestamp;
        this._current = state;
    }

    public getStates():IState[]{
        return this._states;
    }
}

