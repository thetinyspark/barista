import IEmitter from "./IEmitter";
import INotification from "./INotification";

export default class Notification implements INotification{

    private _type:string;
    private _emitter:IEmitter;
    private _payload:any;

    constructor( type:string, emitter:IEmitter, payload:any ){
        this._type = type;
        this._emitter = emitter;
        this._payload = payload;
    }

    getEventType(): string {
        return this._type;
    }

    getEmitter(): IEmitter {
        return this._emitter;
    }
    
    getPayload() {
        return this._payload;
    }
    
}