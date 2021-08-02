import Stage from "../../lib/display/Stage";
import Canvas2DRenderer from "../../lib/rendering/Canvas2DRenderer";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import IRenderer from "../../lib/rendering/IRenderer";
import { canvasPixelToRGBA, clearCanvas, create2DScene, createCanvas, createDisplayObjectFromCanvas, fillRect, getCanvasPixel } from "../test_utils/canvas.utils.spec";

describe('Canvas2DRenderer test suite', 
    ()=>{

        const biColorCanvas:HTMLCanvasElement = createCanvas(200,200);
        const whiteCanvas:HTMLCanvasElement = createCanvas(200,200);

        beforeEach(
            ()=>{
                // clear fake textures
                clearCanvas(biColorCanvas);
                fillRect(biColorCanvas, "red", 0, 0, 100, 200);
                fillRect(biColorCanvas, "blue", 100, 0, 100, 200);

                clearCanvas(whiteCanvas); 
                fillRect(whiteCanvas, "white", 0, 0, 200,200);

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
                const stage = create2DScene(640,480);
                const bmp = createDisplayObjectFromCanvas("fake", biColorCanvas);
                stage.addChild(bmp);

                // when 
                stage.nextFrame();

                // then 
                const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
                expect(pixel).toEqual({r:255, g:0, b:0, a:255});
            }
        );

        it('should draw a portion of the texture on canvas',
            ()=>{
                // given 
                const stage = create2DScene(640,480);
                const bmp = createDisplayObjectFromCanvas("fake", biColorCanvas); 
                
                // when 
                bmp.texture.sx = 100; 
                bmp.texture.sw = 100; 
                bmp.width = 100; 
                bmp.height = 100;
                stage.addChild(bmp);
                stage.nextFrame();

                // then 
                const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
                expect(pixel).toEqual({r:0, g:0, b:255, a:255});
            }
        );

        it('should draw objects according to children depths', 
        ()=>{
                // given 
                const stage = create2DScene(640,480);
                const bmp1 = createDisplayObjectFromCanvas("bicolor", biColorCanvas);
                const bmp2 = createDisplayObjectFromCanvas("white", whiteCanvas);
                stage.addChild(bmp1);
                stage.addChild(bmp2);

                // when 
                stage.nextFrame();

                // then 
                const pixel = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(), 0, 0) ); 
                expect(pixel).toEqual({r:255, g:255, b:255, a:255});
        });

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