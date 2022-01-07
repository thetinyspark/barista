import { screenToIso, isoToScreen, isoSort} from "../../../../lib/sdk/isometric/utils/iso.utils";
import makeIsometric, { Isometric } from "../../../../lib/sdk/isometric/mixins/mixins";
import Animation from "../../../../lib/core/display/Animation";
import DisplayObjectContainer from "../../../../lib/core/display/DisplayObjectContainer";

/*
* MIT License

* Copyright (c) 2019 The Tiny Spark

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.

* @author The Tiny Spark
*/

describe(
    "iso utils test suite",
    () => {
        it(
            "should convert a pair of 2d (x,y) coordinates to a pair of isogrid (row,col) coordinates", 
            () => {
                let point = {row:0, col:0};

                point = screenToIso(0,0,100,100);
                expect(point.row).toBe(0);
                expect(point.col).toBe(0);

                point = screenToIso(50,50,100,100);
                expect(point.row).toBe(0);
                expect(point.col).toBe(1);

                
                point = screenToIso(0,100,100,100);
                expect(point.row).toBe(1);
                expect(point.col).toBe(1);
            }
        ); 

        it(
            "should convert a pair of isogrid (row,col) coordinates to a pair of 2d (x,y) coordinates", 
            () => {
                let point= {x:0, y:0};

                point = isoToScreen(0,0,100,100);
                expect(point.x).toBe(0);
                expect(point.y).toBe(0);                
                
                point = isoToScreen(0,1,100,100);
                expect(point.x).toBe(50);
                expect(point.y).toBe(50);

                          
                point = isoToScreen(1,1,100,100);
                expect(point.x).toBe(0);
                expect(point.y).toBe(100);
            }
        );

        it(`should sort object according to a top iso view (smaller coordinates children are far, greater is close )`, 
        ()=>{
            // given

            const Iso = makeIsometric(Animation); 
            const container = new DisplayObjectContainer();
            const max = 3;

            for( let i:number = 0; i < max; i++ ){
                const child = new Iso();
                child.isoNode.cellWidth = 64;
                child.isoNode.cellHeight = 32;
                child.isoNode.row = child.isoNode.col = max - i; 
                child.isoNode.resetCoordinatesFromRowAndCol();

                child.syncWithNode();
                container.addChild(child); 
            }

            // when 
            const children = container.getChildren() as unknown as Isometric[];
            children.sort(isoSort);
        
            // then

            children.map( 
                (current, index)=>{
                    
                    expect( current.isoNode.row ).toEqual(index+1);
                    expect( current.isoNode.col ).toEqual(index+1);
                }
            )
        });
    }
)