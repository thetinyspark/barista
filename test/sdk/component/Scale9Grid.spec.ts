import TextureData from "../../../lib/core/texture/TextureData";
import Texture from "../../../lib/core/texture/Texture";
import {Rectangle} from "../../../lib/core/utils/Geometry";
import Scale9Grid from "../../../lib/sdk/component/Scale9Grid";

describe(
    "Scale9Grid test suite",
    () => {
        const fakeCanvas = document.createElement("canvas");
        fakeCanvas.width = 200; 
        fakeCanvas.height = 200;
        const data = new TextureData( fakeCanvas );
        const texture:Texture = new Texture("texture", data, 50, 50, 100, 100); 
        const center:Rectangle = {x:15,y:15,width:70,height:70};

        it(`should be able to create a Scale9Grid DisplayObjectContainer`, 
        ()=>{
            // given
            expect( new Scale9Grid() ).toBeTruthy();

            // when 
            // container.sort();
            // container.render(new Stage().getRenderer());
        
            // then
        });

        describe("Texture & DisplayObject creation test suite", 
            ()=>{
                it(`should be able to create a topleft DisplayObject from a main texture + a center zone (Rectangle)`, 
                ()=>{
                    // given
                    const disp = new Scale9Grid();

                    // when 
                    disp.setGrid(texture,center);
                    const topleft = disp.getTopLeft().texture as Texture;
                
                    // then
                    expect(topleft).toBeTruthy();
                    expect(topleft.sx).toEqual(50);
                    expect(topleft.sy).toEqual(50);
                    expect(topleft.sw).toEqual(15);
                    expect(topleft.sh).toEqual(15);
                });

                it(`should be able to create a topright DisplayObject from a main texture + a center zone (Rectangle)`, 
                ()=>{
                    // given
                    const disp = new Scale9Grid();

                    // when 
                    disp.setGrid(texture,center);
                    const topright = disp.getTopRight().texture as Texture;
                
                    // then
                    expect(topright).toBeTruthy();
                    expect(topright.sx).toEqual(135);
                    expect(topright.sy).toEqual(50);
                    expect(topright.sw).toEqual(15);
                    expect(topright.sh).toEqual(15);
                });

                it(`should be able to create a topcenter DisplayObject from a main texture + a center zone (Rectangle)`, 
                ()=>{
                    // given
                    const disp = new Scale9Grid();

                    // when 
                    disp.setGrid(texture,center);
                    const topcenter = disp.getTopCenter().texture as Texture;
                
                    // then
                    expect(topcenter).toBeTruthy();
                    expect(topcenter.sx).toEqual(65);
                    expect(topcenter.sy).toEqual(50);
                    expect(topcenter.sw).toEqual(70);
                    expect(topcenter.sh).toEqual(15);
                });

                it(`should be able to create a left DisplayObject from a main texture + a center zone (Rectangle)`, 
                ()=>{
                    // given
                    const disp = new Scale9Grid();

                    // when 
                    disp.setGrid(texture,center);
                    const left = disp.getLeft().texture as Texture;
                
                    // then
                    expect(left).toBeTruthy();
                    expect(left.sx).toEqual(50);
                    expect(left.sy).toEqual(65);
                    expect(left.sw).toEqual(15);
                    expect(left.sh).toEqual(70);
                });

                it(`should be able to create a center DisplayObject from a main texture + a center zone (Rectangle)`, 
                ()=>{
                    // given
                    const disp = new Scale9Grid();

                    // when 
                    disp.setGrid(texture,center);
                    const mid = disp.getCenter().texture as Texture;
                
                    // then
                    expect(mid).toBeTruthy();
                    expect(mid.sx).toEqual(65);
                    expect(mid.sy).toEqual(65);
                    expect(mid.sw).toEqual(70);
                    expect(mid.sh).toEqual(70);
                });

                it(`should be able to create a right DisplayObject from a main texture + a center zone (Rectangle)`, 
                ()=>{
                    // given
                    const disp = new Scale9Grid();

                    // when 
                    disp.setGrid(texture,center);
                    const right = disp.getRight().texture as Texture;
                
                    // then
                    expect(right).toBeTruthy();
                    expect(right.sx).toEqual(135);
                    expect(right.sy).toEqual(65);
                    expect(right.sw).toEqual(15);
                    expect(right.sh).toEqual(70);
                });

                it(`should be able to create a bottomleft DisplayObject from a main texture + a center zone (Rectangle)`, 
                    ()=>{
                        // given
                        const disp = new Scale9Grid();
            
                        // when 
                        disp.setGrid(texture,center);
                        const bleft = disp.getBottomLeft().texture as Texture;
                    
                        // then
                        expect(bleft).toBeTruthy();
                        expect(bleft.sx).toEqual(50);
                        expect(bleft.sy).toEqual(135);
                        expect(bleft.sw).toEqual(15);
                        expect(bleft.sh).toEqual(15);
                });

                it(`should be able to create a bottomcenter DisplayObject from a main texture + a center zone (Rectangle)`, 
                    ()=>{
                        // given
                        const disp = new Scale9Grid();
            
                        // when 
                        disp.setGrid(texture,center);
                        const bcenter = disp.getBottomCenter().texture as Texture;
                    
                        // then
                        expect(bcenter).toBeTruthy();
                        expect(bcenter.sx).toEqual(65);
                        expect(bcenter.sy).toEqual(135);
                        expect(bcenter.sw).toEqual(70);
                        expect(bcenter.sh).toEqual(15);
                });

                it(`should be able to create a bottomright DisplayObject from a main texture + a center zone (Rectangle)`, 
                    ()=>{
                        // given
                        const disp = new Scale9Grid();
            
                        // when 
                        disp.setGrid(texture,center);
                        const bright = disp.getBottomRight().texture as Texture;
                    
                        // then
                        expect(bright).toBeTruthy();
                        expect(bright.sx).toEqual(135);
                        expect(bright.sy).toEqual(135);
                        expect(bright.sw).toEqual(15);
                        expect(bright.sh).toEqual(15);
                });
            }
        );

        describe("Resize Scale9Grid test suite", 
            ()=>{
                it(`should be able to resize & replace each component of a Scale9Grid object (original size)`, 
                ()=>{
                    // given
                    const d = new Scale9Grid();

                    // when 
                    d.setGrid(texture,center);
                    d.resize(100,100);
                    const topleft = d.getTopLeft();
                    const topright = d.getTopRight();
                    const topcenter = d.getTopCenter();
                    const left = d.getLeft();
                    const mid = d.getCenter();
                    const right = d.getRight();
                    const bottomleft = d.getBottomLeft();
                    const bottomcenter = d.getBottomCenter();
                    const bottomright = d.getBottomRight();
                
                    // then
                    expect( [topleft.x, topleft.y, topleft.width, topleft.height] ).toEqual([0,0,15,15]);
                    expect( [topcenter.x, topcenter.y, topcenter.width, topcenter.height] ).toEqual([15,0,70,15]);
                    expect( [topright.x, topright.y, topright.width, topright.height] ).toEqual([85,0,15,15]);
                    expect( [left.x, left.y, left.width, left.height] ).toEqual([0,15,15,70]);
                    expect( [mid.x, mid.y, mid.width, mid.height] ).toEqual([15,15,70,70]);
                    expect( [right.x, right.y, right.width, right.height] ).toEqual([85,15,15,70]);
                    expect( [bottomleft.x, bottomleft.y, bottomleft.width, bottomleft.height] ).toEqual([0,85,15,15]);
                    expect( [bottomcenter.x, bottomcenter.y, bottomcenter.width, bottomcenter.height] ).toEqual([15,85,70,15]);
                    expect( [bottomright.x, bottomright.y, bottomright.width, bottomright.height] ).toEqual([85,85,15,15]);
                });

                it(`should be able to resize & replace each component of a Scale9Grid object (200x200)`, 
                ()=>{
                    // given
                    const d = new Scale9Grid();

                    // when 
                    d.setGrid(texture,center);
                    d.resize(200,200);
                    const topleft = d.getTopLeft();
                    const topright = d.getTopRight();
                    const topcenter = d.getTopCenter();
                    const left = d.getLeft();
                    const mid = d.getCenter();
                    const right = d.getRight();
                    const bottomleft = d.getBottomLeft();
                    const bottomcenter = d.getBottomCenter();
                    const bottomright = d.getBottomRight();
                
                    // then
                    expect( [topleft.x, topleft.y, topleft.width, topleft.height] ).toEqual([0,0,15,15]);
                    expect( [topcenter.x, topcenter.y, topcenter.width, topcenter.height] ).toEqual([15,0,170,15]);
                    expect( [topright.x, topright.y, topright.width, topright.height] ).toEqual([185,0,15,15]);
                    expect( [left.x, left.y, left.width, left.height] ).toEqual([0,15,15,170]);
                    expect( [mid.x, mid.y, mid.width, mid.height] ).toEqual([15,15,170,170]);
                    expect( [right.x, right.y, right.width, right.height] ).toEqual([185,15,15,170]);
                    expect( [bottomleft.x, bottomleft.y, bottomleft.width, bottomleft.height] ).toEqual([0,185,15,15]);
                    expect( [bottomcenter.x, bottomcenter.y, bottomcenter.width, bottomcenter.height] ).toEqual([15,185,170,15]);
                    expect( [bottomright.x, bottomright.y, bottomright.width, bottomright.height] ).toEqual([185,185,15,15]);
                });
            }
        );
    }
)