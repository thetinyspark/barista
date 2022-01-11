import { Emitter } from "@thetinyspark/tiny-observer";
import GamePadTouch from "./GamePadTouch";
export default class GamePad extends Emitter {
    private _touches;
    private _pressed;
    setTouches(touches: GamePadTouch[]): void;
    getTouches(): GamePadTouch[];
    getTouchByKey(key: string): GamePadTouch;
    getTouchByValue(value: string): GamePadTouch;
    getPressedTouches(): GamePadTouch[];
    press(touch: GamePadTouch, timestamp?: number): void;
    release(touch: GamePadTouch, timestamp?: number): number;
}
export declare enum GamePadTouchEvent {
    PRESS_KEY = "PRESS_KEY",
    RELEASE_KEY = "RELEASE_KEY"
}
