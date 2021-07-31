import Texture from "../../lib/texture/Texture";
import Stage from "../../lib/display/Stage";
import Webgl2DRenderer from "../../lib/rendering/Webgl2DRenderer";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import TextureData from "../../lib/texture/TextureData";

xdescribe('Webgl2DRenderer test suite', 
    ()=>{

        const fakeCanvas:HTMLCanvasElement = document.createElement("canvas");
        const fakeTextureData = new TextureData(fakeCanvas);
        const fakeContext:CanvasRenderingContext2D = fakeCanvas.getContext("2d"); 
        const renderer:Webgl2DRenderer  = new Webgl2DRenderer();

        function getPixels(canvas:HTMLCanvasElement, sx:number, sy:number, sw:number, sh:number ){
            const offscreen = document.createElement("canvas"); 
            const offscreenC = offscreen.getContext("2d"); 
            offscreen.width = canvas.width; 
            offscreen.height = canvas.height; 
            offscreenC.drawImage(canvas, 0, 0);
            return offscreenC.getImageData(sx,sy,sw,sh);
        }

        beforeEach(
            ()=>{

                renderer.clear();
                renderer.getCanvas().width = 640;
                renderer.getCanvas().height = 480;

                fakeCanvas.width = 200; 
                fakeCanvas.height = 200; 

               
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
                const stage = new Stage();
                const bmp = new DisplayObject();
                const texture = new Texture(
                    "fake", 
                    fakeTextureData,
                    0, 
                    0, 
                    fakeCanvas.width, 
                    fakeCanvas.height
                );

                bmp.width = 100; 
                bmp.height = 100;
                bmp.texture = texture;
                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw();

                // then 
                const pixels = getPixels(renderer.getCanvas(), 0, 0, texture.sw, texture.sh).data;
                expect(pixels[0]).toEqual(255);
                expect(pixels[1]).toEqual(0);
                expect(pixels[2]).toEqual(0);
                expect(pixels[3]).toEqual(255);
            }
        );

        it('should draw a portion of the texture on canvas',
            ()=>{
                // given 
                const stage = new Stage();
                const bmp = new DisplayObject();
                const mainTexture = new Texture("fake", fakeTextureData, 0, 0, fakeCanvas.width, fakeCanvas.height);
                const texture = mainTexture.createSubTexture("subfake", 100, 0, 100, 200);

                bmp.width = 100; 
                bmp.height = 100;
                bmp.texture = texture;
                stage.addChild(bmp);
                renderer.add(stage);
                renderer.add(bmp);

                // when 
                renderer.draw();

                // then 
                const pixels = getPixels(renderer.getCanvas(), 0, 0, texture.sw, texture.sh).data;
                expect(pixels[0]).toEqual(0);
                expect(pixels[1]).toEqual(0);
                expect(pixels[2]).toEqual(255);
                expect(pixels[3]).toEqual(255);
            }
        );

        it('should have all the displayobjects on the pipeline',
            ()=>{
                //given
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