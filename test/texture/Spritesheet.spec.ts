import Spritesheet from "../../lib/texture/Spritesheet";
import CanvasUtils from "../../lib/utils/CanvasUtils";
import { canvasPixelToRGBA, fillRect, getCanvasPixel } from "../test_utils/canvas.utils.spec";
describe("Spritesheet test suite", () => {
  describe("#constructor", () => {
    it("should be able to create a Spritesheet objet", () => {
      const sheet = new Spritesheet(100, 100);
      expect(sheet).toBeTruthy();
    });

    it("should have a power of 2 width & height", () => {
      // given
      const sheet = new Spritesheet(100, 100);

      // when then
      expect(sheet.getWidth()).toEqual(128);
      expect(sheet.getHeight()).toEqual(128);
    });

    it("should have an empty zone by default", () => {
      // given
      const sheet = new Spritesheet(100, 100);

      // when
      const zone = sheet.getZones()[0];

      // then
      expect(zone).toBeTruthy();
      expect(zone.x).toEqual(0);
      expect(zone.y).toEqual(0);
      expect(zone.width).toEqual(128);
      expect(zone.height).toEqual(128);
      expect(zone.isEmpty()).toBeTrue();
    });

    it("should draw on the resulting TextureData", 
    ()=>{
      const source1 = {id:"blue", source: CanvasUtils.create(1, 1)};
      const source2 = {id:"red", source: CanvasUtils.create(1, 1)};
      fillRect(source1.source,"blue",0,0,1,1);
      fillRect(source2.source,"red",0,0,1,1);
      const ref = {
        blue: CanvasUtils.getCanvasPixel(source1.source as HTMLCanvasElement, 0,0),
        red: CanvasUtils.getCanvasPixel(source2.source as HTMLCanvasElement, 0,0),
      };
      
      // when
      const sheet = new Spritesheet(2, 2, [source1,source2]);

      // then
      sheet.getTextures().map( 
        (texture)=>{
          const color = CanvasUtils.getCanvasPixel(
            sheet.getTextureData().getSource() as HTMLCanvasElement, 
            texture.sx, 
            texture.sy
          );
          const refcolor = ref[texture.id];
          expect(color).toEqual(refcolor);
        }
      );
    });

    [
      {
        width:128,
        height:128,
        sources: [
          {id:"source1", width:64, height:64},
          {id:"source2", width:64, height:64},
          {id:"source3", width:64, height:64},
          {id:"source4", width:64, height:64},
          {id:"source5", width:10, height:10}
        ], 
        expected:["source1","source2","source3","source4"], 
        notExpected:["source5"]

      }, 
      {
        width:256,
        height:256,
        sources: [
          {id:"source1", width:64, height:64},
          {id:"source2", width:64, height:64},
          {id:"source3", width:64, height:64},
          {id:"source4", width:64, height:64},
          {id:"source5", width:10, height:10}
        ], 
        expected:["source1","source2","source3","source4","source5"], 
        notExpected:[]
      },
      {
        width:256,
        height:256,
        sources: [
          {id:"source1", width:64, height:64},
          {id:"source2", width:64, height:64},
          {id:"source3", width:128, height:64},
          {id:"source4", width:64, height:64},
          {id:"source5", width:10, height:10}
        ], 
        expected:["source1","source2","source3","source4","source5"], 
        notExpected:[]
      },
      {
        width:256,
        height:256,
        sources: [
          {id:"source1", width:128, height:64},
          {id:"source2", width:64, height:128},
          {id:"source3", width:128, height:64},
          {id:"source4", width:64, height:64},
          {id:"source5", width:10, height:10}
        ], 
        expected:["source1","source2","source3","source4","source5"], 
        notExpected:[]
      },
      {
        width:256,
        height:256,
        sources: [
          {id:"source1", width:256, height:128},
          {id:"source2", width:256, height:128},
          {id:"source3", width:128, height:64},
          {id:"source4", width:64, height:64},
          {id:"source5", width:10, height:10}
        ], 
        expected:["source1","source2"], 
        notExpected:["source3","source4","source5"]
      }
    ].forEach(
      (dataTest, index)=>{
        it(`should reset the spritesheet with many sources for ${index}`, () => {
          // given
          const sources = dataTest.sources.map( 
            (src)=>{
              return {id:src.id, source: CanvasUtils.create(src.width, src.height)}
            }
          );
          const sheet = new Spritesheet(dataTest.width, dataTest.height, sources);

    
          // when
          const nonEmptyZones = sheet.getZones().filter( zone => !zone.isEmpty());
          const ids = nonEmptyZones.map( zone => zone.data.id );
    
          // then
          dataTest.expected.forEach(
            (id)=>{
              expect(ids).toContain(id);
            }
          );

          dataTest.notExpected.forEach(
            (id)=>{
              expect(ids).not.toContain(id);
            }
          );
          
        });
      }
    );
  });

  describe("#getTextures", () => {
    [
      {
        width:128,
        height:128,
        sources: [
          {id:"source1", width:64, height:64},
          {id:"source2", width:64, height:64},
          {id:"source3", width:64, height:64},
          {id:"source4", width:64, height:64},
          {id:"source5", width:10, height:10}
        ], 
        expected:["source1","source2","source3","source4"], 
        notExpected:["source5"]
      }, 
    ].forEach(
      (dataTest, index)=>{
        it(`should draw textures according to sources and zones the spritesheet with many sources for ${index}`, () => {
          // given
          const sources = dataTest.sources.map( 
            (src)=>{
              return {id:src.id, source: CanvasUtils.create(src.width, src.height)}
            }
          );
          const sheet = new Spritesheet(dataTest.width, dataTest.height, sources);
    
          // when
          const ids = sheet.getTextures().map( tex => tex.id );
    
          // then
          dataTest.expected.forEach(
            (id)=>{
              expect(ids).toContain(id);
            }
          );

          dataTest.notExpected.forEach(
            (id)=>{
              expect(ids).not.toContain(id);
            }
          );
          
        });
      }
    )

  });
});
