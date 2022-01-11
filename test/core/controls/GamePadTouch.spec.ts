import {GamePadTouch} from "../../../lib/core/controls";

describe('GamePadTouch test suite', 
()=>{

    it('should be able to create a GamePadTouch', 
    ()=>{
        const touch = new GamePadTouch();
        expect(touch).toBeTruthy();
    }); 
    
    it('should be able to press a GamePadTouch and knows it', 
    ()=>{
        // given
        const touch = new GamePadTouch();

        // when
        touch.press();

        // then
        expect(touch.pressing).toBeTrue();
    }); 

    it('should be able to press and release a GamePadTouch and knows it', 
    ()=>{
        // given
        const touch = new GamePadTouch();

        // when
        touch.press();
        touch.release();

        // then
        expect(touch.pressing).toBeFalse();
    }); 

    it('should be able to know how much time the touch has been pressed', 
    ()=>{
        // given
        const touch = new GamePadTouch();   
        const time1 = new Date().getTime(); 
        const time2 = new Date().getTime() + 97; 
        const time3 = new Date().getTime() + 197; 
        
        // when
        touch.press(time1);
        const elapsed1 = touch.getElapsedTime(time2);
        const elapsed2 = touch.release(time3);

        // then
        expect(elapsed1).toEqual(97);
        expect(elapsed2).toEqual(197);
    }); 

});