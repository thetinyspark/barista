import IEmitter from "./IEmitter";

export default interface INotification{
    getEventType():string;
    getEmitter():IEmitter;
    getPayload():any;
}