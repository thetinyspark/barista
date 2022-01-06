import Zone from "../../../lib/core/texture/Zone";
import CanvasUtils from "../../../lib/core/utils/CanvasUtils";
describe("Zone test suite", () => {


    it("should be able to create a Zone objet", () => {
      const zone = new Zone();
      expect(zone).toBeTruthy();
    });

  
    it("should be considered as empty zone by default", () => {
      // given
      const zone = new Zone();
  
      // when
      zone.data = null;
  
      // then
      expect(zone.isEmpty()).toBeTrue();
      expect(zone.data).toBeNull();
    });

    it("should be considered as non empty zone if source is defined", () => {
      // given
      const zone = new Zone();
  
      // when
      zone.data = CanvasUtils.create(64,64);
      zone.width = 64; 
      zone.height = 64;
  
      // then
      expect(zone.isEmpty()).toBeFalse();
      expect(zone.data).toBeTruthy();
    });

    it("should not be able to split the zone on the right if limit is >= zone.width", 
    ()=>{
      // given
      const zone = new Zone();
      zone.width = 64;
      zone.height = 64;

      // when
      const right = zone.splitRight(64);
  
      // then
      expect(right).toBeNull();
    });

    it("should not be able to split the zone on the right if limit is < zone.width", 
    ()=>{
      // given
      const zone = new Zone();
      zone.width = 64;
      zone.height = 64;

      // when
      const right = zone.splitRight(50);
  
      // then
      expect(right).not.toBeNull();
      expect(right.width).toEqual(14);
      expect(right.height).toEqual(zone.height);
      expect(right.x).toEqual(zone.x + 50);
      expect(right.y).toEqual(zone.y);
      expect(zone.width).toEqual(50);
      expect(zone.height).toEqual(64);
    });

    it("should not be able to split the zone on the left if limit is < zone.width", 
    ()=>{
      // given
      const zone = new Zone();
      zone.x = 0;
      zone.y = 0;
      zone.width = 64;
      zone.height = 64;

      // when
      const left = zone.splitLeft(50);
  
      // then
      expect(left).not.toBeNull();
      expect(left.width).toEqual(50);
      expect(left.height).toEqual(zone.height);
      expect(left.x).toEqual(0);
      expect(left.y).toEqual(0);
      
      expect(zone.x).toEqual(50);
      expect(zone.y).toEqual(0);
      expect(zone.width).toEqual(14);
      expect(zone.height).toEqual(64);
    });

    it("should not be able to split the zone on the bottom if limit is < zone.height", 
    ()=>{
      // given
      const zone = new Zone();
      zone.x = 0;
      zone.y = 0;
      zone.width = 64;
      zone.height = 64;

      // when
      const bottom = zone.splitBottom(50);
  
      // then
      expect(bottom).not.toBeNull();
      expect(bottom.width).toEqual(64);
      expect(bottom.height).toEqual(14);
      expect(bottom.x).toEqual(0);
      expect(bottom.y).toEqual(50);
      
      expect(zone.x).toEqual(0);
      expect(zone.y).toEqual(0);
      expect(zone.width).toEqual(64);
      expect(zone.height).toEqual(50);
    });

    it("should not be able to split the zone on the top if limit is < zone.height", 
    ()=>{
      // given
      const zone = new Zone();
      zone.x = 0;
      zone.y = 0;
      zone.width = 64;
      zone.height = 64;

      // when
      const top = zone.splitTop(50);
  
      // then
      expect(top).not.toBeNull();

      expect(zone.width).toEqual(64);
      expect(zone.height).toEqual(14);
      expect(zone.x).toEqual(0);
      expect(zone.y).toEqual(50);
      
      expect(top.x).toEqual(0);
      expect(top.y).toEqual(0);
      expect(top.width).toEqual(64);
      expect(top.height).toEqual(50);
    });

    it("should return the zone area", 
    ()=>{
      // given
      const zone = new Zone();

      // when
      zone.width = 64;
      zone.height = 64;
  
      // then
      expect(zone.getArea()).toEqual(64*64);
    });

    it("should be able to say if it can contains a data with specific width and height ", 
    ()=>{
        // given
        const zone = new Zone();

        // when
        zone.width = 64;
        zone.height = 64;
    
        // then
        expect(zone.canContain(128,64)).toBeFalse();
        expect(zone.canContain(64,128)).toBeFalse();
        expect(zone.canContain(64,64)).toBeTrue();
    });

});
