import Stage, { StageEvent } from "../../../lib/core/display/Stage";
import {INotification} from "@thetinyspark/tiny-observer";
import Camera from "../../../lib/core/display/Camera";
import { mat2d } from "gl-matrix";
import DisplayObject from "../../../lib/core/display/DisplayObject";
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

                it('should have a null Camera by default', 
                ()=>{
                    const stage = new Stage();
                    expect(stage.getCamera()).toBeNull();
                });

                it('should be able to set/get a camera', 
                ()=>{
                    // given
                    const stage = new Stage();
                    const camera = new Camera();

                    //when
                    stage.setCamera(camera);

                    // then
                    expect(stage.getCamera()).toBe(camera);
                });

                it('should be able to render the scene throught camera', 
                ()=>{
                    const stage = new Stage();
                    const camera = new Camera();
                    // const spy = spyOn(camera,"update");
                    camera.x = 10;
                    camera.y = 10;
                    camera.width = 100;
                    camera.height = 100;

                    //when
                    stage.setCamera(camera);
                    stage.nextFrame();

                    // then
                    expect(
                        stage.worldMatrix.map( (num)=> num === -0 ? 0 : 0 )
                    ).toEqual(
                        camera.getRevertWorldMatrix().map( (num)=> num === -0 ? 0 : 0 )
                    );
                });

                it('should be able to remove the camera', 
                ()=>{
                    const stage = new Stage();
                    const camera = new Camera();
                    const spy = spyOn(stage,"update");
                    camera.x = 10;
                    camera.y = 10;
                    camera.width = 100;
                    camera.height = 100;

                    //when
                    stage.setCamera(camera);
                    stage.setCamera(null);
                    stage.nextFrame();

                    // then
                    expect(spy).toHaveBeenCalledWith(mat2d.create(), 1);
                });

                it('should be able to set/get a clipping strategy method', 
                ()=>{
                    // given
                    const stage = new Stage();
                    const strategy = (stage:Stage, camera:Camera)=>{}

                    //when
                    stage.setClippingStrategy(strategy);

                    // then
                    expect(stage.getClippingStrategy()).toBe(strategy);
                });

                it('should be able to call clipping strategy method only when camera is set', 
                ()=>{
                    // given
                    const stage = new Stage();
                    const strategy = {clip: (stage:Stage, camera:Camera)=>{}}; 
                    const spy = spyOn(strategy, "clip");
                    const camera = new Camera();

                    //when
                    stage.setCamera(null);
                    stage.setClippingStrategy(strategy.clip);

                    // then
                    stage.nextFrame();
                    expect(spy).not.toHaveBeenCalled();

                    // when
                    stage.setCamera(camera);
                    stage.nextFrame();

                    // then
                    expect(spy).toHaveBeenCalledWith(stage, camera);
                });

                it('should be able to filter displayobject with clipping strategy method', 
                ()=>{
                    // given
                    const stage = new Stage();
                    const strategy = (stage:Stage, camera:Camera)=>{
                        stage.getChildren().forEach( 
                            (value, index)=>{
                                value.visible = index%2==0;
                            }
                        )
                    }; 
                    const camera = new Camera();
                    stage.addChild( new DisplayObject() );
                    stage.addChild( new DisplayObject() );
                    stage.addChild( new DisplayObject() );
                    stage.addChild( new DisplayObject() );

                    //when
                    stage.setCamera(camera);
                    stage.setClippingStrategy(strategy);
                    stage.nextFrame();

                    // then
                    expect(stage.getChildren().length).toEqual(4);
                    expect(stage.getRenderer().getChildren().length).toEqual(3);
                });
            }
        );
    }
)