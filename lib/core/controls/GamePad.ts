import { Emitter } from "@thetinyspark/tiny-observer";
import GamePadTouch from "./GamePadTouch";

export default class GamePad extends Emitter{

    private _touches:GamePadTouch[] = [];
    private _pressed:GamePadTouch[] = [];

    setTouches(touches:GamePadTouch[]):void{
        this._touches = touches;
    }

    getTouches():GamePadTouch[]{
        return this._touches;
    }

    getTouchByKey(key:string):GamePadTouch{
        return this.getTouches().find( touch => touch.key === key ) || null;
    }

    getTouchByValue(value:string):GamePadTouch{
        return this.getTouches().find( touch => touch.value === value ) || null;
    }

    getPressedTouches():GamePadTouch[]{
        return this._pressed;
    }

    press(touch:GamePadTouch, timestamp:number = 0):void{
        touch.press(timestamp); 
        if( !this._pressed.includes(touch) ){
            this._pressed.push(touch); 
            this.emit(GamePadTouchEvent.PRESS_KEY, touch);
        }
    }

    release(touch:GamePadTouch, timestamp:number = 0):number{
        const pos = this._pressed.indexOf(touch);
        if( pos > -1 ){
            this._pressed.splice(this._pressed.indexOf(touch), 1);
            const time = touch.release(timestamp);
            this.emit(GamePadTouchEvent.PRESS_KEY, touch);
            return time;
        }
        else{
            return touch.getElapsedTime();
        }
    }
}

export enum GamePadTouchEvent{
    PRESS_KEY = "PRESS_KEY", 
    RELEASE_KEY = "RELEASE_KEY"
}