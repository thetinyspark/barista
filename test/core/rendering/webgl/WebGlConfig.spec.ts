import DisplayObject from "../../../../lib/core/display/DisplayObject";
import WebGlConfig from "../../../../lib/core/rendering/webgl/WebGlConfig";
import Texture from "../../../../lib/core/texture/Texture";
import TextureData from "../../../../lib/core/texture/TextureData";

describe("WebglConfig test suite", 
    ()=>{
        it('should push vertices data into a vertexArray, according to the size of a vertex per num children', 
        ()=>{
            // given 
            const canvas = document.createElement("canvas"); 
            const vertexArray = new Float32Array(65535);
            const emptyArray = new Float32Array(0);
            const children = []; 

            canvas.width = canvas.height = 128; 
     
            for( let i:number = 0; i < 10; i++ ){
                    const object = new DisplayObject();
                    object.texture = new Texture( "fake", new TextureData(canvas), 0, 0, 128, 128);
                    object.texture.calcUv();
                    children.push(object);
            }
     
            // when 
            WebGlConfig.pushVerticesInto(children, vertexArray);
            
     
            // then 
            expect(vertexArray).not.toEqual(emptyArray);
        });
    }
)
  