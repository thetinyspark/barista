import Texture from "../../lib/texture/Texture";
import TextureData from "../../lib/texture/TextureData";
describe("Texture test suite", () => {

  const fakeCanvas = document.createElement("canvas");
  fakeCanvas.width = 200; 
  fakeCanvas.height = 200;
  const data = new TextureData( fakeCanvas );
  const data2 = new TextureData( fakeCanvas );

  it("should be able to create a texture objet", 
    () => {
        const texture:Texture = new Texture("texture", data);
        expect(texture).toBeTruthy();
    }
  );

  it("should be able to generate/and retrieve a data texture uid", 
  ()=>{
    const textureA:Texture = new Texture("textureA", data); 
    const textureB:Texture = new Texture("textureB", data); 
    expect(textureA.textureUid).not.toEqual("");
    expect(textureB.textureUid).not.toEqual("");
    expect(textureA.textureUid).toEqual(textureB.textureUid);
  });

  it("should not have the same textureuid", 
  ()=>{
    const textureA:Texture = new Texture("textureA", data); 
    const textureB:Texture = new Texture("textureB", data2); 
    expect(textureA.textureUid).not.toEqual("");
    expect(textureB.textureUid).not.toEqual("");
    expect(textureA.textureUid).not.toEqual(textureB.textureUid);
  });


  it("should be able to create a subtexture", 
  ()=>{
    const main = new Texture("main", data);
    const sub = main.createSubTexture("sub_texture", 0, 0, 100, 100 ); 
    expect(sub).toBeTruthy();
  }); 

  it("should be able to compute uv coordinates for the 4 corners", 
  ()=>{
    const textureA:Texture = new Texture("textureA", data); 
    textureA.sx = 128;
    textureA.sy = 128;
    textureA.sw = 64;
    textureA.sh = 64;
    textureA.calcUv();

    expect(textureA.source.width).toEqual(256);
    expect(textureA.source.height).toEqual(256);

    expect(textureA.topLeftUv.u).toEqual(0.5);
    expect(textureA.topLeftUv.v).toEqual(0.5);

    expect(textureA.topRightUv.u).toEqual(0.75);
    expect(textureA.topRightUv.v).toEqual(0.5);

    expect(textureA.bottomLeftUv.u).toEqual(0.5);
    expect(textureA.bottomLeftUv.v).toEqual(0.25);

    expect(textureA.bottomRightUv.u).toEqual(0.75);
    expect(textureA.bottomRightUv.v).toEqual(0.25);
  })

});
