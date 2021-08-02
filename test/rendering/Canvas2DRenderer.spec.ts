import Stage from "../../lib/display/Stage";
import Canvas2DRenderer from "../../lib/rendering/Canvas2DRenderer";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import IRenderer from "../../lib/rendering/IRenderer";
import { canvasPixelToRGBA, clearCanvas, createCanvas, createDisplayObjectFromCanvas, fillRect, getCanvasPixel } from "../test_utils/canvas.utils.spec";

describe('Canvas2DRenderer test suite', 
    ()=>{

        const fakeCanvas:HTMLCanvasElement = createCanvas(200,200);
        const sceneCanvas:HTMLCanvasElement = createCanvas(640,480);
        const sceneContext:CanvasRenderingContext2D = sceneCanvas.getContext("2d");

        beforeEach(
            ()=>{
                // clear the scene
                clearCanvas(sceneCanvas);

                // clear fake texture
                clearCanvas(fakeCanvas);
                fillRect(fakeCanvas, "red", 0, 0, 100, 200);
                fillRect(fakeCanvas, "blue", 100, 0, 100, 200);
            }
        )

        it('should be able to add and retrieve displayobjects to the rendering pipeline', 
            ()=>{
                // given 
                const renderer:Canvas2DRenderer  = new Canvas2DRenderer();
                renderer.add( new DisplayObject() ); 
                renderer.add( new DisplayObject() ); 
                renderer.add( new DisplayObject() ); 

                //when 
                const children:IDisplayObject[] = renderer.getChildren();

                // then 
                expect(children.length).toEqual(3);
            }
        );

        it( 'should not remain any child', 
            ()=>{
                 // given 
                 const renderer:Canvas2DRenderer  = new Canvas2DRenderer();
                 renderer.add( new DisplayObject() ); 
                 renderer.add( new DisplayObject() ); 
                 renderer.add( new DisplayObject() ); 
 
                 //when 
                 renderer.clear();
                 const children:IDisplayObject[] = renderer.getChildren();
 
                 // then 
                 expect(children.length).toEqual(0);
            }
        );

        it('should draw texture on canvas',
            ()=>{
                // given 
                const renderer = new Canvas2DRenderer();
                const stage = new Stage();
                const bmp = createDisplayObjectFromCanvas("fake", fakeCanvas);
                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw(sceneCanvas, sceneContext);

                // then 
                const pixel = canvasPixelToRGBA( getCanvasPixel(sceneCanvas, 0, 0) ); 
                expect(pixel).toEqual({r:255, g:0, b:0, a:255});
            }
        );

        it('should draw a portion of the texture on canvas',
            ()=>{
                // given 
                const renderer = new Canvas2DRenderer();
                const stage = new Stage();
                const bmp = createDisplayObjectFromCanvas("fake", fakeCanvas); 
                bmp.texture.sx = 100; 
                bmp.texture.sw = 100; 
                bmp.width = 100; 
                bmp.height = 100;

                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw(sceneCanvas, sceneContext);

                // then 
                const pixel = canvasPixelToRGBA( getCanvasPixel(sceneCanvas, 0, 0) ); 
                expect(pixel).toEqual({r:0, g:0, b:255, a:255});
            }
        );

        it('should have all the displayobjects on the pipeline',
            ()=>{
                //given
                const renderer:IRenderer = new Canvas2DRenderer();
                const stage:Stage = new Stage();

                stage.setRenderer(renderer);
                for( let i:number = 0; i < 1000; i++ ){
                    stage.addChild( new DisplayObject() ); 
                }

                //when
                stage.nextFrame();

                //then
                expect(renderer.getChildren().length).toEqual(1001);
            }
        );
    }
)