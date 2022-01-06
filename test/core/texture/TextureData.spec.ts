import TextureData from "../../../lib/core/texture/TextureData";
import { canvasPixelToRGBA, clearCanvas, createCanvas, createDisplayObjectFromCanvas, createGlScene, fillRect, getCanvasPixel } from "../../test_utils/canvas.utils.spec";
describe("TextureData test suite", () => {

  const data = createCanvas(800,400);

  describe( "#common", 
    ()=>{
      it("should be able to create a TextureData objet", 
        () => {
            const texdata:TextureData = new TextureData(data);
            expect(texdata).toBeTruthy();
        }
      );

      it("Size lengths should be a power of 2", 
      ()=>{
        const texdata:TextureData = new TextureData(data);
        expect(texdata.getSource().width).toEqual(1024);
        expect(texdata.getSource().height).toEqual(512);
      });

      it("Should have a unique id", 
      ()=>{
        const texdata1:TextureData = new TextureData(data);
        const texdata2:TextureData = new TextureData(data);

        expect(texdata1.uid).not.toEqual(texdata2.uid);
      });
    }
  ); 

  describe("#webgl", 
  ()=>{

    it("Should be able to return gl texture", 
    ()=>{
      const texdata:TextureData = new TextureData(data);
      const glContext:WebGLRenderingContext = data.getContext("webgl");
      expect(texdata.getGlTexture(glContext)).toBeInstanceOf(WebGLTexture);
    });
  
    it("Should not create a gl texture twice", 
    ()=>{
      const texdata:TextureData = new TextureData(data);
      const glContext:WebGLRenderingContext = data.getContext("webgl");
      expect(texdata.getGlTexture(glContext)).toBe(texdata.getGlTexture(glContext));
    });
  
    it("Should be able to refresh a texture automatically", 
    ()=>{
  
      // given 
      const bmp = createDisplayObjectFromCanvas("tex", data); 
      const stage = createGlScene(800,400);
      
      bmp.texture.data.isDynamic = true;
      stage.addChild(bmp); 
  
      // when 
  
      clearCanvas(bmp.texture.data.getSource() as HTMLCanvasElement);
      fillRect(bmp.texture.data.getSource() as HTMLCanvasElement, "blue", 0, 0, data.width, data.height);
      stage.nextFrame();
      const before = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(),0,0) ); 
  
      clearCanvas(bmp.texture.data.getSource() as HTMLCanvasElement);
      fillRect(bmp.texture.data.getSource() as HTMLCanvasElement, "red", 0, 0, data.width, data.height);
      stage.nextFrame();
      const after = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(),0,0) ); 
  
      // then 
      expect( before.r ).toEqual(0);
      expect( before.g ).toEqual(0);
      expect( before.b ).toEqual(255);
      expect( before.a ).toEqual(255);
  
      expect( after.r ).toEqual(255);
      expect( after.g ).toEqual(0);
      expect( after.b ).toEqual(0);
      expect( after.a ).toEqual(255);
    });
  
    it("Should not be able to refresh the texture automatically", 
    ()=>{
  
      // given 
      const bmp = createDisplayObjectFromCanvas("tex", data); 
      const stage = createGlScene(800,400);
      
      bmp.texture.data.isDynamic = false;
      stage.addChild(bmp); 
  
      // when 
  
      clearCanvas(bmp.texture.data.getSource() as HTMLCanvasElement);
      fillRect(bmp.texture.data.getSource() as HTMLCanvasElement, "blue", 0, 0, data.width, data.height);
      stage.nextFrame();
      const before = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(),0,0) ); 
  
      clearCanvas(bmp.texture.data.getSource() as HTMLCanvasElement);
      fillRect(bmp.texture.data.getSource() as HTMLCanvasElement, "red", 0, 0, data.width, data.height);
      stage.nextFrame();
      const after = canvasPixelToRGBA( getCanvasPixel(stage.getCanvas(),0,0) ); 
  
      // then 
      expect( before.r ).toEqual(0);
      expect( before.g ).toEqual(0);
      expect( before.b ).toEqual(255);
      expect( before.a ).toEqual(255);
  
      expect( after.r ).toEqual(0);
      expect( after.g ).toEqual(0);
      expect( after.b ).toEqual(255);
      expect( after.a ).toEqual(255);
    });
  
  }); 
  
});
