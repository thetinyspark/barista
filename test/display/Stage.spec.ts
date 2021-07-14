import Stage, { StageEvent } from "../../lib/display/Stage";
import INotification from "../../lib/event/INotification";
describe( 
    'Stage test suite', 
    ()=>{
        describe("constructor and structure", 
            ()=>{
                it( 'should be able to instanciate a Stage object', 
                    ()=>{
                        const stage = new Stage();
                        expect(stage).toBeTruthy();
                    }
                ); 

                it( 'should be able to  get canvas and get context', 
                    ()=>{
                        const stage = new Stage();
                        expect(stage.getCanvas()).toBeInstanceOf(HTMLCanvasElement);
                        expect(stage.getContext()).toBeInstanceOf(CanvasRenderingContext2D);
                    }
                ); 

                it( 'should be able to play next frame',
                    ()=>{
                        const stage = new Stage();

                        stage.nextFrame();
                        expect(stage.getCurrentFrame()).toEqual(1);

                        stage.nextFrame();
                        expect(stage.getCurrentFrame()).toEqual(2);
                    }
                );

                it( 'should be able to catch an StageEvent.ENTER_FRAME event and get the current frame', 
                    ()=>{
                        const stage = new Stage();
                        let frame:number = 0;
                        stage.subscribe(
                            StageEvent.ENTER_FRAME,
                            (notification:INotification)=>{
                                frame = notification.getPayload() as number;
                            }
                        );

                        stage.nextFrame();
                        expect(frame).toEqual(1);
                    }
                );

                it( 'should be able to catch an StageEvent.FRAME_END event and get the current frame', 
                    ()=>{
                        const stage = new Stage();
                        let frame:number = 0;
                        stage.subscribe(
                            StageEvent.FRAME_END,
                            (notification:INotification)=>{
                                frame = notification.getPayload() as number;
                            }
                        );

                        stage.nextFrame();
                        expect(frame).toEqual(1);
                    }
                );
            }
        );
    }
)