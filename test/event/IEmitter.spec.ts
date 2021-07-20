import IEmitter from "../../lib/event/IEmitter";
import Emitter from "../../lib/event/Emitter";
import INotification from "../../lib/event/INotification";
import Notification from "../../lib/event/Notification";

describe(
    "IEmitter test suite", 
    ()=>{
        
        let observer:Function = ()=>{}; 
        let observer2:Function = ()=>{}; 
        let emitter:IEmitter = new Emitter();
        const eventType:string = "myevent";
        const anotherEventType:string = "anotherevent";

        beforeEach(
            ()=>{
                observer = ()=>{}; 
                observer2 = ()=>{}; 
                emitter = new Emitter();
            }
        );

        it( 
            "Lorsque je ne suis pas abonné à un évènement précis, alors je peux m'abonner à cet évènement et je reçois confirmation de mon abonnement.", 
            ()=>{
                const result:boolean = emitter.subscribe(eventType, observer) ;
                expect( result ).toBeTrue();
            }
        );

        it( 
            "Si je suis abonné à un évènement précis, je peux demander à l'Emitter si je suis abonné à cet évènement et il me répond que oui.", 
            ()=>{
                emitter.subscribe(eventType, observer) ;
                const result:boolean = emitter.isObserver(eventType, observer);
                expect( result ).toBeTrue();
            }
        );

        it( 
            "Si je ne suis pas abonné à un évènement précis, je peux demander à l'Emitter si je suis abonné à cet évènement et il me répond que non.", 
            ()=>{
                const result:boolean = emitter.isObserver(eventType, observer);
                expect( result ).toBeFalse();
            }
        );

        it( 
            "Si je suis abonné à un évènement précis mais pas à un autre évènement, alors je peux demander à l'Emitter si je suis abonné à l'autre évènement et il me répond que non.", 
            ()=>{
                emitter.subscribe(eventType, observer); 
                const result:boolean = emitter.isObserver(anotherEventType, observer); 
                expect(result).toBeFalse();
            }
        );

        it( 
            "Lorsque je suis déjà abonné à un évènement précis, alors je ne peux pas m'y abonner de nouveau et je reçois confirmation du refus.", 
            ()=>{
                emitter.subscribe(eventType, observer); 
                const result:boolean = emitter.subscribe(eventType, observer); 
                expect(result).toBeFalse();
            }
        );

        it( 
            "Lorsque je suis abonné à un évènement précis, alors je peux me désabonner et demander à l'Emitter si je suis abonné et il me répond que non.", 
            ()=>{
                emitter.subscribe(eventType, observer); 
                emitter.unsubscribe(eventType, observer); 
                const result:boolean = emitter.isObserver(eventType, observer); 
                expect(result).toBeFalse();
            }
        );

        it( 
            "Lorsque je ne suis pas abonné mais qu'un autre est abonné à un évènement précis, je peux demander à l'Emitter si je suis abonné et il me répondra que non", 
            ()=>{
                emitter.subscribe(eventType, observer2); 
                const result:boolean = emitter.isObserver(eventType, observer); 
                expect(result).toBeFalse();
            }
        )

        it( 
            "Si nous sommes plusieurs à nous abonner au même évènement, alors nous pouvons chacun demander à l'Emitter si nous sommes abonnés et il répond oui.", 
            ()=>{
                emitter.subscribe(eventType, observer);
                emitter.subscribe(eventType, observer2);
                const result1:boolean = emitter.isObserver(eventType, observer);
                const result2:boolean = emitter.isObserver(eventType, observer2);
                expect(result1).toBeTrue();
                expect(result2).toBeTrue();
            }
        );

        it( 
            "S'il y a des abonnés à un évènement précis, je peux demander à l'Emitter s'il y a des abonnés à cet évènement et il me répond que oui.", 
            ()=>{
                emitter.subscribe(eventType, observer);
                emitter.subscribe(eventType, observer2);
                expect(emitter.hasObservers(eventType)).toBeTrue();
            }
        );

        it( 
            "S'il n'y aucun abonné à un évènement précis, je peux demander à l'Emitter s'il y a des abonnés à cet évènement et il me répond que non.", 
            ()=>{
                expect(emitter.hasObservers(eventType)).toBeFalse();
            }
        );

        it( 
            "Lorsque je suis abonné à un évènement précis, si ce type d'évènement ne se produit pas, alors je ne suis pas notifié.", 
            ()=>{
                const spy:Function = jasmine.createSpy("spy");
                emitter.subscribe(eventType, spy); 
                expect(spy).not.toHaveBeenCalled();
            }
        );

        it( 
            "Lorsque je suis abonné à un évènement précis, si ce type d'évènement se produit, alors je ne suis notifié qu'une seule fois.", 
            ()=>{
                const spy:Function = jasmine.createSpy("spy");
                emitter.subscribe(eventType, spy); 
                emitter.emit(eventType, {});
                expect(spy).toHaveBeenCalledTimes(1);
            }
        );

        it( 
            "Lorsque je suis abonné à un évènement précis, si un autre type d'évènement se produit, alors je ne suis pas notifié.", 
            ()=>{
                const spy:Function = jasmine.createSpy("spy");
                emitter.subscribe(eventType, spy); 
                emitter.emit(anotherEventType, {});
                expect(spy).not.toHaveBeenCalled();
            }
        );

        it( 
            "Lorsque je suis abonné à un évènement précis, si je me désabonne et que l'évènement se produit, alors je ne suis pas notifié.", 
            ()=>{
                const spy:Function = jasmine.createSpy("spy");
                
                emitter.subscribe(eventType, spy); 
                emitter.unsubscribe(eventType, spy);
                emitter.emit(anotherEventType, {});
                expect(spy).not.toHaveBeenCalled();
            }
        );

        it( 
            "Lorsque je suis notifié, je reçois une information regroupant l'emitter à l'origin de l'évènement, le type d'évènement, et des informations additionnelles de forme variable, définies par l'entitié à l'origine de la diffusion de l'évènement.", 
            ()=>{

                const payload:any = {};

                const observer:Function = ( notification:INotification) => {
                    expect( notification.getEmitter()).toBe(emitter);
                    expect( notification.getEventType()).toBe(eventType);
                    expect( notification.getPayload()).toBe(payload);
                }; 

                emitter.subscribe(eventType, observer); 
                emitter.emit(eventType, payload);
            }
        );

        it( 
            "Lorsque je souscris à plusieurs abonnements, je dois pouvoir tous les résilier d'un seul coup", 
            ()=>{

                emitter.subscribe(eventType, observer); 
                emitter.subscribe(anotherEventType, observer2 );
                emitter.unsubscribeAll();
                
                expect(emitter.hasObservers(eventType)).toBeFalse();
                expect(emitter.hasObservers(anotherEventType)).toBeFalse();
            }
        );

    }
)