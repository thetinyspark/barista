import { INotification } from "@thetinyspark/tiny-observer";
import {GamePadTouch, GamePad, GamePadTouchEvent} from "../../../lib/core/controls";

describe('GamePad test suite', 
()=>{

    const touches = [
        new GamePadTouch('ArrowUp', 'UP'),
        new GamePadTouch('ArrowDown', 'DOWN'),
        new GamePadTouch('ArrowLeft', 'LEFT'),
        new GamePadTouch('ArrowRight', 'RIGHT'),
        new GamePadTouch('Numpad4', 'SQUARE'),
        new GamePadTouch('Numpad2', 'CROSS'),
        new GamePadTouch('Numpad6', 'CIRCLE'),
        new GamePadTouch('Numpad8', 'TRIANGLE'),
    ];

    it('should be able to create a GamePadTouch', 
    ()=>{
        const pad = new GamePad();
        expect(pad).toBeTruthy();
    });

    it('should be able to set/get the gamepad touches', 
    ()=>{
        // given
        const pad = new GamePad();

        // when
        pad.setTouches(touches); 

        // then
        expect(pad.getTouches()).toBe(touches);
    });

    it('should be able to get a touch by its key', 
    ()=>{
        // given
        const pad = new GamePad();
        pad.setTouches(touches); 

        // when
        const result = pad.getTouchByKey(touches[4].key);
        const bad = pad.getTouchByKey('_____');

        // then
        expect(bad).toBeNull();
        expect(result).not.toBeNull();
        expect(result).toBe(touches[4]);
    });

    it('should be able to get a touch by its value', 
    ()=>{
        // given
        const pad = new GamePad();
        pad.setTouches(touches); 

        // when
        const result = pad.getTouchByValue(touches[4].value);
        const bad = pad.getTouchByKey('_____');

        // then
        expect(bad).toBeNull();
        expect(result).not.toBeNull();
        expect(result).toBe(touches[4]);
    });

    it('should be able to know which touches are touched', 
    ()=>{
        // given
        const pad = new GamePad();
        pad.setTouches(touches); 
        pad.press(touches[0]);
        pad.press(touches[1]);
        pad.press(touches[2]);
        pad.release(touches[2]);

        // when
        const pressed = pad.getPressedTouches();

        // then
        expect(pressed).toEqual([touches[0], touches[1]]);
        expect(touches[0].pressing).toBeTrue();
        expect(touches[1].pressing).toBeTrue();
        expect(touches[2].pressing).toBeFalse();
    });

    it('should be able to catch press key event and release key event', 
    ()=>{
        // given
        const data = {stack:[]};
        const pad = new GamePad();
        pad.setTouches(touches); 
        pad.subscribe(GamePadTouchEvent.PRESS_KEY, 
            (notif:INotification)=>{
                data.stack.push(( notif.getPayload() as GamePadTouch ));
            }
        );
        pad.subscribe(GamePadTouchEvent.RELEASE_KEY, 
            (notif:INotification)=>{
                data.stack.push(( notif.getPayload() as GamePadTouch ));
            }
        );

        // when
        pad.press(touches[0]);
        pad.press(touches[1]);

        // should not press the touch twice
        pad.press(touches[1]);

        pad.release(touches[1]);
        pad.release(touches[0]);

        // should not release the touch twice
        pad.release(touches[0]);

        // then
        expect(data.stack).toEqual(
            [
                touches[0],
                touches[1],
                touches[1],
                touches[0],
            ]
        );
        
    })

});