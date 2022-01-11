export default class GamePadTouch {
    private _pressing;
    private _timestamp;
    value: string;
    key: string;
    constructor(key?: string, value?: string);
    get pressing(): boolean;
    getElapsedTime(timestamp?: number): number;
    release(timestamp?: number): number;
    press(timestamp?: number): void;
}
