import Texture from "../../lib/texture/Texture";
describe("Texture test suite", () => {

  const data = document.createElement("canvas");
  const data2 = document.createElement("canvas");

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

  it("should be able to get texture uid by data",
  ()=>{
    const texture:Texture = new Texture("texture", data);
    expect(texture.textureUid).toBeTruthy(Texture.getTextureUidByData(texture.data));
  }); 

});
