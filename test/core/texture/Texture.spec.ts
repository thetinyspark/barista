import Texture from "../../../lib/core/texture/Texture";
import TextureData from "../../../lib/core/texture/TextureData";
import MathUtils from "../../../lib/core/utils/MathUtils";
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

  it("should be able to create multiple subtextures", 
  ()=>{
    // given
    const main = new Texture("main", data);
    const zones = [
      {id:"sub_texture1", sx:0, sy:0, sw:100, sh:100 },
      {id:"sub_texture2", sx:100, sy:100, sw:100, sh:100 },
      {id:"sub_texture3", sx:100, sy:0, sw:100, sh:100 },
      {id:"sub_texture4", sx:0, sy:100, sw:100, sh:100 },
    ];

    // when
    const subs = main.createSubTextures(zones); 

    // then
    expect(subs.length).toEqual(zones.length);
    zones.forEach(
      (zone, index)=>{
        expect(subs[index].id).toEqual(zone.id);
        expect(subs[index].sx).toEqual(zone.sx);
        expect(subs[index].sy).toEqual(zone.sy);
        expect(subs[index].sw).toEqual(zone.sw);
        expect(subs[index].sh).toEqual(zone.sh);
        expect(subs[index].data).toBe(main.data);
      }
    );
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
    expect(textureA.bottomLeftUv.v).toEqual(0.75);

    expect(textureA.bottomRightUv.u).toEqual(0.75);
    expect(textureA.bottomRightUv.v).toEqual(0.75);
  }); 

  it("should be able to create a non dynamic texture from a source", 
  ()=>{
    // given
    const id = "my_texture"; 
    const source = fakeCanvas;

    // when
    const texture = Texture.createFromSource(id,source);

    // when then
    expect(texture).toBeTruthy();
    expect(texture.id).toEqual(id);
    expect(texture.source.width).toEqual( MathUtils.getNextPowerOf2(source.width ));
    expect(texture.source.height).toEqual( MathUtils.getNextPowerOf2(source.height ));
    expect(texture.data.isDynamic).toBeFalse();
  });

  it("should be able to create a dynamic texture from an video source", 
  ()=>{
    // given
    const id = "my_texture"; 
    const source = document.createElement("video");

    // when
    const texture = Texture.createFromSource(id,source);

    // when then
    expect(texture).toBeTruthy();
    expect(texture.id).toEqual(id);
    expect(texture.source.width).toEqual( MathUtils.getNextPowerOf2(source.width ));
    expect(texture.source.height).toEqual( MathUtils.getNextPowerOf2(source.height ));
    expect(texture.data.isDynamic).toBeTrue();
  });

});
