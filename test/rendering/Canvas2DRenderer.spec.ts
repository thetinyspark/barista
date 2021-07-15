import Stage from "../../lib/display/Stage";
import Canvas2DRenderer from "../../lib/rendering/Canvas2DRenderer";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import IRenderer from "../../lib/rendering/IRenderer";

describe('Canvas2DRenderer test suite', 
    ()=>{
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
                const canvas = document.createElement("canvas"); 
                const context = canvas.getContext("2d"); 
                const renderer = new Canvas2DRenderer();
                const stage = new Stage();
                const bmp = new DisplayObject();
                const texture = document.createElement("canvas");
                const textureContext = texture.getContext("2d"); 

                canvas.width = 640; 
                canvas.height = 480;

                texture.width = texture.height = 100;
                textureContext.save();
                textureContext.fillStyle = "red"; 
                textureContext.fillRect(0,0,100,100); 
                textureContext.fill();
                textureContext.restore();

                bmp.width = 100; 
                bmp.height = 100;
                bmp.texture = texture;
                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw(canvas, context);

                // then 
                const pixel00 = context.getImageData(0,0,100,100).data; 
                expect(pixel00[0]).toEqual(255);
                expect(pixel00[1]).toEqual(0);
                expect(pixel00[2]).toEqual(0);
                expect(pixel00[3]).toEqual(255);
            }
        );

        it(
            'should have all the displayobjects on the pipeline',
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