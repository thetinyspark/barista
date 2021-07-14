import IEmitter from "./IEmitter";
import INotification from "./INotification";
import Notification from "./Notification";

export default class Emitter implements IEmitter{

    private _observers:Map<string,Function[]> = new Map<string,Function[]>();

    emit(eventType: string, payload:any ): void {
        const observers:Function[] = this._observers.get(eventType) || [];
        const notif:INotification = new Notification(eventType, this, payload);
        observers.forEach(
            (observer:Function)=>{
                observer(notif);
            }
        )
    }

    hasObservers(eventType: string): boolean {
        return this._observers.get(eventType) !== undefined;
    }

    unsubscribe(eventType: string, observer: Function): void {
        if( this.isObserver(eventType, observer ))
            this._observers.delete(eventType);
    }

    
    isObserver(eventType: string, observer: Function): boolean {
        const observers:Function[] = this._observers.get(eventType) || [];
        return observers.indexOf(observer) > -1;
    }


    subscribe(eventType: string, observer: Function): boolean {
        if( this.isObserver(eventType, observer ))
            return false; 

        const observers:Function[] = this._observers.get(eventType) || [];
        observers.push(observer);
        this._observers.set(eventType, observers);

        return true;
    }


}