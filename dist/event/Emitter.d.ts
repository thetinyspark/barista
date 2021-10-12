import IEmitter from "./IEmitter";
export default class Emitter implements IEmitter {
    private _observers;
    emit(eventType: string, payload: any): void;
    hasObservers(eventType: string): boolean;
    unsubscribe(eventType: string, observer: Function): void;
    isObserver(eventType: string, observer: Function): boolean;
    subscribe(eventType: string, observer: Function): boolean;
    unsubscribeAll(): void;
}
