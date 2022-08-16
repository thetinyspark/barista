import { INotification } from "@thetinyspark/tiny-observer";
import {FiniteStateMachine, IState} from "../../../../../lib/sdk/common/utils/fsm";

describe('FiniteStateMachine test suite', 
()=>{

    it('should be able to create a FiniteStateMachine', 
    ()=>{
        const fsm = new FiniteStateMachine();
        expect(fsm).toBeTruthy();
    }); 

    it('should be able to add/get a state on FiniteStateMachine', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const state1 = { actions: [],  data: {},  id: "state1" };
        const state2 = { actions: [],  data: {},  id: "state2" };

        // when
        fsm.addState(state1);
        fsm.addState(state2);

        // then 
        expect(fsm.getStates().length).toEqual(2);
        expect(fsm.getStateById('state1')).toBe(state1);
        expect(fsm.getStateById('state2')).toBe(state2);
    }); 

    it('should be able to remove a state from FiniteStateMachine', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const state1 = { actions: [],  data: {},  id: "state1" };
        const state2 = { actions: [],  data: {},  id: "state2" };

        // when
        fsm.addState(state1);
        fsm.addState(state2);
        fsm.removeState(state2)

        // then 
        expect(fsm.getStates().length).toEqual(1);
        expect(fsm.getStateById('state1')).toBe(state1);
        expect(fsm.getStateById('state2')).toBeNull(); 
        expect(fsm.hasState('state2')).toBeFalse();
    }); 

    it('should be able to set/get current state', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const state1 = { actions: [],  data: {},  id: "state1" };

        // when
        fsm.setCurrentState(state1);

        // then 
        expect(fsm.hasState('state1')).toBeTrue();
        expect(fsm.getCurrentState()).toBe(state1);
    }); 

    it('should dispatch an action and go to next state2', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const jump = {actions:[{name:"PRESS_X", target:"atck"}], id: 'jump', data:{}};
        const atck = {actions:[{name:"PRESS_X", target:"idle"}], id: 'atck', data:{}};
        const dodge = {actions:[{name:"PRESS_X", target:"jump"}], id: 'dodge', data:{}};

        const idle = { 
            actions: [
                {name:"PRESS_X", target:'dodge'},
                {name:"PRESS_A", target:'atck'},
            ],  
            data: {},  
            id: "idle" 
        };

        fsm.addState(dodge);
        fsm.addState(jump);
        fsm.addState(atck);
        fsm.addState(idle);
        fsm.setCurrentState(idle);
        
        // when
        const ids = [];
        for( let i = 0; i < 4; i++ ){
            fsm.dispatch("PRESS_X");
            ids.push(fsm.getCurrentState().id)
        }
        
        fsm.dispatch('PRESS_A');
        ids.push(fsm.getCurrentState().id)


        // when then 
        expect(ids).toEqual(["dodge","jump","atck","idle","atck"]);
    }); 

    it('should be able to reset machine', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const jump = {actions:[{name:"PRESS_X", target:"atck"}], id: 'jump', data:{}};
        const atck = {actions:[{name:"PRESS_X", target:"idle"}], id: 'atck', data:{}};
        const dodge = {actions:[{name:"PRESS_X", target:"jump"}], id: 'dodge', data:{}};
        const idle = { 
            actions: [
                {name:"PRESS_X", target:'dodge'},
                {name:"PRESS_A", target:'atck'},
            ],  
            data: {},  
            id: "idle" 
        };

        fsm.addState(dodge);
        fsm.addState(jump);
        fsm.addState(atck);
        fsm.addState(idle);
        
        // when
        fsm.reset();


        // when then 
        expect(fsm.getStates().length).toEqual(0);
        expect(fsm.getCurrentState()).toBeNull();
    }); 

    it('should be able to dispatch an event when state changes', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const stack:string[] = [];
        const jump = {actions:[{name:"PRESS_X", target:"atck"}], id: 'jump', data:{}};
        const atck = {actions:[{name:"PRESS_X", target:"dodge"}], id: 'atck', data:{}};
        const dodge = {actions:[{name:"PRESS_X", target:"jump"}], id: 'dodge', data:{}};

        const onChange = (notification:INotification) => { stack.push(notification.getPayload().id)};

        fsm.addState(dodge);
        fsm.addState(jump);
        fsm.addState(atck);
        fsm.setCurrentState(jump);
        
        // when
        fsm.subscribe("CHANGE_STATE", onChange);
        fsm.dispatch("PRESS_X");
        fsm.dispatch("PRESS_X");
        fsm.dispatch("PRESS_X");


        // when then 
        expect(stack).toEqual(["atck","dodge","jump"]);
    });

    it('should be able to lock a state during a certain amount of time', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const jump = {actions:[{name:"PRESS_X", target:"atck"}], id: 'jump', data:{}, lockDuration: 100};
        const atck = {actions:[], id: 'atck', data:{}};

        fsm.addState(jump);
        fsm.addState(atck);
        fsm.setCurrentState(jump);
        
        // when
        fsm.setTime(0);
        fsm.dispatch("PRESS_X");
        const result1 = fsm.getCurrentState().id;

        fsm.setTime(99);
        fsm.dispatch("PRESS_X");
        const result2 = fsm.getCurrentState().id;

        fsm.setTime(100);
        fsm.dispatch("PRESS_X");
        const result3 = fsm.getCurrentState().id;

        // then
        expect(result1).toEqual("jump");
        expect(result2).toEqual("jump");
        expect(result3).toEqual("atck");
    });

    it('should be able to dispatch an action at the end of the current state', 
    ()=>{
        // given
        const fsm = new FiniteStateMachine();
        const jump = {actions:[{name:"done", target:"atck"}], id: 'jump', data:{}, duration: 100, onCompleteAction: "done"};
        const atck = {actions:[], id: 'atck', data:{}};

        fsm.addState(jump);
        fsm.addState(atck);
        fsm.setCurrentState(jump);
        fsm.subscribe(FiniteStateMachine.ON_COMPLETE_ACTION, (notif:INotification) => fsm.dispatch( notif.getPayload() as string ));
        
        // when
        fsm.setTime(0);
        const result1 = fsm.getCurrentState().id;

        fsm.setTime(99);
        const result2 = fsm.getCurrentState().id;

        fsm.setTime(101);
        const result3 = fsm.getCurrentState().id;

        // then
        expect(result1).toEqual("jump");
        expect(result2).toEqual("jump");
        expect(result3).toEqual("atck");
    });
});