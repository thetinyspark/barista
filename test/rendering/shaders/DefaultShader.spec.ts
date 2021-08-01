import Default2DShader from "../../../lib/rendering/webgl/shaders/Default2DShader"; "../../../lib/rendering/webgl/shaders/Default2DShader";
import DisplayObject from "../../../lib/display/DisplayObject";
import Texture from "../../../lib/texture/Texture";
import TextureData from "../../../lib/texture/TextureData";

describe("DefaultShader test suite", 
    ()=>{
        it('should push vertices data into a vertexArray, vertices contains 4 points, each with x,y,opacity and worldMatrix data', 
        ()=>{
            // given 
            const canvas = document.createElement("canvas"); 
            const context = canvas.getContext("webgl");
            const vertexArray = new Float32Array(65535);
            const emptyArray = new Float32Array(0);
            const shader = new Default2DShader(context);
            const children = []; 

            canvas.width = canvas.height = 128; 
     
            for( let i:number = 0; i < 10; i++ ){
                    const object = new DisplayObject();
                    object.texture = new Texture( "fake", new TextureData(canvas), 0, 0, 128, 128);
                    object.texture.calcUv();
                    children.push(object);
            }
     
            // when 
            shader.pushVerticesInto(children, vertexArray);
     
            // then 
            expect(vertexArray).not.toEqual(emptyArray);
        });
    }
)
  