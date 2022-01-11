import {FinalStateMachine, IState} from "../../../../../lib/sdk/common/utils/fsm/";

describe('FinalStateMachine test suite', 
()=>{

    it('should be able to create a FinalStateMachine', 
    ()=>{
        const fsm = new FinalStateMachine();
        expect(fsm).toBeTruthy();
    }); 

    it('should be able to add/get a state on FinalStateMachine', 
    ()=>{
        // given
        const fsm = new FinalStateMachine();
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

    it('should be able to remove a state from FinalStateMachine', 
    ()=>{
        // given
        const fsm = new FinalStateMachine();
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
        const fsm = new FinalStateMachine();
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
        const fsm = new FinalStateMachine();
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
        const fsm = new FinalStateMachine();
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
});