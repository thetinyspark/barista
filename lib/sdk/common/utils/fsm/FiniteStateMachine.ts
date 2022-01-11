import IState from "./IState";

export default class FiniteStateMachine{
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

    public dispatch(action:string):void{
        const current = this.getCurrentState();

        if( current === null )
            return;

        const currentAction = current.actions.find( cur => cur.name === action ) || null;

        if( currentAction === null )
            return;

        const target = this.getStateById(currentAction.target);
        this.setCurrentState(target);
    }

    public getCurrentState():IState{
        return this._current || null;
    }

    public setCurrentState(state:IState):void{
        if( !this.hasState(state.id) )
            this.addState(state);

        this._current = state;
    }

    public getStates():IState[]{
        return this._states;
    }
}

