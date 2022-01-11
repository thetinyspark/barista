export default class GamePadTouch{
    private _pressing:boolean = false;
    private _timestamp:number = 0;

    public value:string;
    public key:string;

    constructor(key:string = '', value:string = ''){
        this.value = value;
        this.key = key;
    }

    public get pressing():boolean{
        return this._pressing;
    }

    public getElapsedTime(timestamp:number = 0):number{
        return (this.pressing) ? timestamp - this._timestamp : 0;
    }

    public release(timestamp:number = 0):number{
        const elapsed = this.getElapsedTime(timestamp);
        this._pressing = false;
        return elapsed;
    }

    public press(timestamp:number = 0):void{
        this._pressing = true;
        this._timestamp = timestamp;
    }
    
}