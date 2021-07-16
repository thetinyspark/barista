import IEmitter from "./IEmitter";
import INotification from "./INotification";
export default class Notification implements INotification {
    private _type;
    private _emitter;
    private _payload;
    constructor(type: string, emitter: IEmitter, payload: any);
    getEventType(): string;
    getEmitter(): IEmitter;
    getPayload(): any;
}
