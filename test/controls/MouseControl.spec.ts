import MouseControl, { MouseControlEvent } from "../../lib/controls/MouseControl";
import {INotification} from "@thetinyspark/tiny-observer";
import { create2DScene, createCanvas, createDisplayObjectFromCanvas } from "../test_utils/canvas.utils.spec";


describe(
    "MouseControl test suite", 
    ()=>{
        const scene = create2DScene(1024,768);
        const control:MouseControl = new MouseControl(scene);

        it('constructor', 
            ()=>{
                expect(control).toBeTruthy();
            }
        ); 

        describe( 'listening on stage',
            ()=>{
                [
                    MouseControlEvent.MOUSE_CONTROL_CLICK,
                    MouseControlEvent.MOUSE_CONTROL_MOVE,
                    MouseControlEvent.MOUSE_CONTROL_DOWN,
                    MouseControlEvent.MOUSE_CONTROL_UP,
                ].forEach( 
                    (type)=>{
                        it('should be able to listen to '+type+' on stage', 
                        ()=>{
                            // given 
                            let triggered = false; 
                            const ontype = ()=>triggered = true;
                            scene.subscribe(type, ontype );
            
                            // when
                            control.dispatchAt(0,0,type);
            
                            // then
                            expect(triggered).toBeTrue();
                            scene.unsubscribeAll();
                        }
                    ); 
                    }
                );
            }
        );
      
        describe( 'listening on sub object',
            ()=>{
                [
                    MouseControlEvent.MOUSE_CONTROL_CLICK,
                    MouseControlEvent.MOUSE_CONTROL_MOVE,
                    MouseControlEvent.MOUSE_CONTROL_DOWN,
                    MouseControlEvent.MOUSE_CONTROL_UP,
                ].forEach( 
                    (type)=>{
                        it('should be able to listen to '+type+' on a sub object', 
                        ()=>{
                            // given 
                            let target = null; 
                            const child = createDisplayObjectFromCanvas("child",createCanvas(100,100));
                            child.x = 100;
                            child.y = 100;
                            child.width = 100;
                            child.height = 100;
                            const ontype = (notification:INotification)=>target = notification.getEmitter();
                            child.subscribe(type, ontype );
                            scene.addChild(child);
            
                            // when
                            control.dispatchAt(100,100,type);
            
                            // then
                            expect(target).toBe(child);
                            child.unsubscribeAll();
                            scene.removeChildren();
                        }
                    ); 
                    }
                );
            }
        );

        describe( 'event bubbling',
            ()=>{
                [
                    MouseControlEvent.MOUSE_CONTROL_CLICK,
                    MouseControlEvent.MOUSE_CONTROL_MOVE,
                    MouseControlEvent.MOUSE_CONTROL_DOWN,
                    MouseControlEvent.MOUSE_CONTROL_UP,
                ].forEach( 
                    (type)=>{
                        it('should be able to listen to '+type+' on a stage but origin is a sub object', 
                        ()=>{
                            // given 
                            let notification = null;
                            const child = createDisplayObjectFromCanvas("child",createCanvas(100,100));
                            child.x = 100;
                            child.y = 100;
                            child.width = 100;
                            child.height = 100;
                            const ontype = (notif:INotification)=>notification = notif;
                            scene.subscribe(type, ontype );
                            scene.addChild(child);
            
                            // when
                            control.dispatchAt(100,100,type);
            
                            // then
                            expect(notification.getEmitter()).toBe(scene);
                            expect(notification.getPayload().target).toBe(child);
                            expect(notification.getPayload().x).toEqual(100);
                            expect(notification.getPayload().y).toEqual(100);
                            scene.unsubscribeAll();
                            scene.removeChildren();
                        }
                    ); 
                    }
                );
            }
        );
    }
)