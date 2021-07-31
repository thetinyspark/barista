import TextureData from "../../lib/texture/TextureData";
describe("TextureData test suite", () => {

  const data = document.createElement("canvas");

  beforeEach(
      ()=>{
          data.width = 800;
          data.height = 400;
      }
  )

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

});
