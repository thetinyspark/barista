import Texture from "../../lib/texture/Texture";
import Stage from "../../lib/display/Stage";
import Canvas2DRenderer from "../../lib/rendering/Canvas2DRenderer";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import IRenderer from "../../lib/rendering/IRenderer";

describe('Canvas2DRenderer test suite', 
    ()=>{

        const fakeCanvas:HTMLCanvasElement = document.createElement("canvas");
        const fakeContext:CanvasRenderingContext2D = fakeCanvas.getContext("2d"); 
        const sceneCanvas:HTMLCanvasElement = document.createElement("canvas");
        const sceneContext:CanvasRenderingContext2D = sceneCanvas.getContext("2d");

        beforeEach(
            ()=>{

                sceneCanvas.width = 640;
                sceneCanvas.height = 480;

                fakeCanvas.width = 200; 
                fakeCanvas.height = 200; 

                // clear the scene
                sceneContext.save();
                sceneContext.fillRect(0,0,sceneCanvas.width, sceneCanvas.height);
                sceneContext.restore();

               
                // clear fake texture
                fakeContext.clearRect(0,0,200,200);

                fakeContext.save();
                fakeContext.beginPath();
                fakeContext.fillStyle = "red"; 
                fakeContext.fillRect(0,0,100,200); 
                fakeContext.fill();
                fakeContext.closePath();
                fakeContext.restore();
                
                fakeContext.save();
                fakeContext.beginPath();
                fakeContext.fillStyle = "blue"; 
                fakeContext.fillRect(100,0,100,200); 
                fakeContext.fill();
                fakeContext.closePath();
                fakeContext.restore();
                
               
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
                const bmp = new DisplayObject();
                const texture = new Texture("fake", fakeCanvas, 0, 0, fakeCanvas.width, fakeCanvas.height);

                bmp.width = 100; 
                bmp.height = 100;
                bmp.texture = texture;
                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw(sceneCanvas, sceneContext);

                // then 
                const pixel00 = sceneContext.getImageData(0, 0, texture.sw, texture.sh).data; 
                expect(pixel00[0]).toEqual(255);
                expect(pixel00[1]).toEqual(0);
                expect(pixel00[2]).toEqual(0);
                expect(pixel00[3]).toEqual(255);
            }
        );

        it('should draw a portion of the texture on canvas',
            ()=>{
                // given 
                const renderer = new Canvas2DRenderer();
                const stage = new Stage();
                const bmp = new DisplayObject();
                const mainTexture = new Texture("fake", fakeCanvas, 0, 0, fakeCanvas.width, fakeCanvas.height);
                const texture = mainTexture.createSubTexture("subfake", 100, 0, 100, 200);

                bmp.width = 100; 
                bmp.height = 100;
                bmp.texture = texture;
                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw(sceneCanvas, sceneContext);

                // then 
                const pixel00 = sceneContext.getImageData(0, 0, texture.sw, texture.sh).data; 
                expect(pixel00[0]).toEqual(0);
                expect(pixel00[1]).toEqual(0);
                expect(pixel00[2]).toEqual(255);
                expect(pixel00[3]).toEqual(255);
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