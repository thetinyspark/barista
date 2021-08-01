import Texture from "../../lib/texture/Texture";
import Stage from "../../lib/display/Stage";
import Webgl2DRenderer from "../../lib/rendering/webgl/Webgl2DRenderer";
import WebGlConfig from "../../lib/rendering/webgl/WebGlConfig";
import DisplayObject from "../../lib/display/DisplayObject";
import IDisplayObject from "../../lib/display/IDisplayObject";
import TextureData from "../../lib/texture/TextureData";

describe('Webgl2DRenderer test suite', 
    ()=>{

        const fakeCanvas:HTMLCanvasElement = document.createElement("canvas");
        let fakeTextureData = new TextureData(fakeCanvas);
        const fakeContext:CanvasRenderingContext2D = fakeCanvas.getContext("2d"); 
        const renderer:Webgl2DRenderer  = new Webgl2DRenderer();
        const stage = new Stage();

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

                // init stage 
                stage.removeChildren();
                stage.setRenderer(renderer);
                stage.getCanvas().width = 640;
                stage.getCanvas().height = 480;
                stage.width = stage.getCanvas().width;
                stage.height = stage.getCanvas().height;
                if( stage.getCanvas().parentNode ){
                    stage.getCanvas().parentNode.removeChild(stage.getCanvas());
                }

                // clear fake texture
                fakeCanvas.width = 200; 
                fakeCanvas.height = 200; 
               
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
                
               
               

                // clear renderer
                renderer.clear();

                //rebuild texture data 
                fakeTextureData = new TextureData(fakeCanvas);
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
                renderer.draw(stage.getCanvas(), stage.getContext() as WebGLRenderingContext);

                // then 
                const pixels = getPixels(renderer.getCanvas(), 0, 0, 1, 1).data;
                expect(pixels[0]).toEqual(255);
                expect(pixels[1]).toEqual(0);
                expect(pixels[2]).toEqual(0);
                expect(pixels[3]).toEqual(255);
            }
        );

        it('should draw a portion of the texture on canvas',
            ()=>{
                // given 
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
                renderer.draw(stage.getCanvas(), stage.getContext() as WebGLRenderingContext);

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

        it('should return multiple displayobjects arrays, grouped by texture, and for a maximum of n displayobjects per texture ',
            ()=>{
                const children = []; 
                const textures = [
                    new Texture("A", new TextureData( document.createElement("canvas") ), 0, 0, 0, 0),
                    new Texture("B", new TextureData( document.createElement("canvas") ), 0, 0, 0, 0),
                    new Texture("C", new TextureData( document.createElement("canvas") ), 0, 0, 0, 0),
                ];

                for( let i:number = 0; i < 10678; i++ ){
                    const object = new DisplayObject();
                    object.texture = textures[i%3];
                    children.push(object);
                }

                const result = renderer.batch(children);

                result.forEach( 
                    (currentBatch:IDisplayObject[])=>{
                            const ids = currentBatch.map( value => value.texture.textureUid ); 
                            const uniqueIds = Array.from( new Set(ids) );
                            expect(currentBatch.length).toBeLessThanOrEqual(WebGlConfig.MAX_QUAD_PER_CALL); 
                            expect(uniqueIds.length).toEqual(1);
                    }
                );
            }
        );

        it('should create an empty vertexArray with the maximum size', 
        ()=>{
            // when 
            const result = WebGlConfig.createVertexArray();

            // then 
            expect(result.length).toEqual(WebGlConfig.VERTEX_ARRAY_SIZE);
        });

        it('should create an index Array with the good indices and a maximum of quads', 
        ()=>{
            // given 
            const expected = [  
                                0,1,2,1,2,3,
                                4,5,6,5,6,7,
                                8,9,10,9,10,11
                            ];

            // when 
            const result = WebGlConfig.createIndexArray();

            // then 
            expect(Array.from(result).splice(0,expected.length)).toEqual(expected);
        });


    }
)