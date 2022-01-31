import { mat2d } from "gl-matrix";
import Stage from "../../../lib/core/display/Stage";
import DisplayObject from "../../../lib/core/display/DisplayObject";
import IDisplayObject from "../../../lib/core/display/IDisplayObject";
import {isDisplayObjectContainer} from "../../../lib/core/utils/isser";
import DisplayObjectContainer from "../../../lib/core/display/DisplayObjectContainer";
import Geometry from "../../../lib/core/utils/Geometry";

describe("Geometry test suite", 
()=>{

    const container = new DisplayObjectContainer(); 
    const child = new DisplayObject();

    beforeEach(
        ()=>{
            container.removeChildren(); 
            container.addChild(child);
            container.width = 100; 
            container.height = 100;
            child.width = 100; 
            child.height = 100;
        }
    );

    function unsignMatrices(matrices:mat2d[]){
        matrices.forEach( 
            (mat)=>{
                mat.forEach( 
                    (v, index)=>{
                        mat[index] = mat[index] === -0 ? 0 : mat[index];
                    }
                )
            }
        )
    }

    describe("#transformPoint", 
    ()=>{
        [
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 0, y: 0}, 
                expected: {x: 0, y: 0}
            },
            {
                tcont: {x: 100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 0, y: 0}, 
                expected: {x: 100, y: 0}
            },
            {
                tcont: {x: 100, y:100, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 0, y: 0}, 
                expected: {x: 100, y: 100}
            },
            {
                tcont: {x: 100, y:100, scaleX:2, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 300, y: 100}
            },
            {
                tcont: {x: 100, y:100, scaleX:2, scaleY: 1, rotation: 0}, 
                tchild: {x: 100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 500, y: 100}
            },
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 0, y: 100}
            },
            {
                tcont: {x: 555, y:0, scaleX:1, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 555, y: 100}
            },
            {
                tcont: {x: 555, y:0, scaleX:1, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: -90}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 655, y: 0}
            },
            {
                tcont: {x: 555, y:0, scaleX:1, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:2, scaleY: 1, rotation: 0}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 555, y: 200}
            },
            {
                tcont: {x: 555, y:0, scaleX:2, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:2, scaleY: 1, rotation: 0}, 
                coords: {x: 100, y: 0}, 
                expected: {x: 555, y: 400}
            },
        ].forEach(
            (current, index)=>{
                it(`should transform a point according to the child's world matrix for data input n° ${index}`, 
                ()=>{
                    // given
                    child.x = current.tchild.x;
                    child.y = current.tchild.y;
                    child.scaleX = current.tchild.scaleX;
                    child.scaleY = current.tchild.scaleY;
                    child.rotation = current.tchild.rotation;
    
                    container.x = current.tcont.x;
                    container.y = current.tcont.y;
                    container.scaleX = current.tcont.scaleX;
                    container.scaleY = current.tcont.scaleY;
                    container.rotation = current.tcont.rotation;
    
                    container.update(mat2d.create(), 1);
    
                    // when
                    const result = Geometry.transformPoint(current.coords.x, current.coords.y, child.worldMatrix); 
                    result.x = (result.x === -0) ? 0 : result.x;
                    result.y = (result.y === -0) ? 0 : result.y;
                    // tricks cause jasmine do something stupid.
    
                    // then 
                    expect(result).toEqual(current.expected);
                });
            }
        )
    
    });

    describe("#getHitbox for IDisplayObject", 
    ()=>{
        [
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: 0, y:0}, 
                    topRight: {x: 100, y:0}, 
                    bottomLeft: {x: 0, y: 100},
                    bottomRight: {x: 100, y: 100}
                }
            },
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: 0, y:0}, 
                    topRight: {x: 0, y:100}, 
                    bottomLeft: {x: -100, y: 0},
                    bottomRight: {x: -100, y: 100}
                }
            },
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 180}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: 0, y:0}, 
                    topRight: {x: -100, y:0}, 
                    bottomLeft: {x: -0, y: -100},
                    bottomRight: {x: -100, y: -100}
                }
            },
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: -100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: -100, y:0}, 
                    topRight: {x: 0, y:0}, 
                    bottomLeft: {x: -100, y: 100},
                    bottomRight: {x: 0, y: 100}
                }
            },
        ].forEach(
            (current, index)=>{
                it(`should transform all child's corners according to its world matrix for data input n° ${index} `, 
                ()=>{
                    // given
                    child.x = current.tchild.x;
                    child.y = current.tchild.y;
                    child.scaleX = current.tchild.scaleX;
                    child.scaleY = current.tchild.scaleY;
                    child.rotation = current.tchild.rotation;
    
                    container.x = current.tcont.x;
                    container.y = current.tcont.y;
                    container.scaleX = current.tcont.scaleX;
                    container.scaleY = current.tcont.scaleY;
                    container.rotation = current.tcont.rotation;
    
                    container.update(mat2d.create(), 1);
    
                    // when
                    const result = Geometry.getHitbox(child);
    
                    // then 
                    expect(result).toEqual(current.expected);
                });
            }
        );
    });

    describe("#getHitBox for IDisplayObjectContainer", 
    ()=>{
        [
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: 0, y:0}, 
                    topRight: {x: 100, y:0}, 
                    bottomLeft: {x: 0, y: 100},
                    bottomRight: {x: 100, y: 100}
                }
            },
            {
                tcont: {x: 100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: 100, y:0}, 
                    topRight: {x: 200, y:0}, 
                    bottomLeft: {x: 100, y: 100},
                    bottomRight: {x: 200, y: 100}
                }
            },
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: -100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {
                    topLeft: {x: -100, y:0}, 
                    topRight: {x: 0, y:0}, 
                    bottomLeft: {x: -100, y: 100},
                    bottomRight: {x: 0, y: 100}
                }
            },
        ].forEach(
            (current, index)=>{
                it(`should transform all children corners according to its world matrix for data input n° ${index} `, 
                ()=>{
                    // given
                    child.x = current.tchild.x;
                    child.y = current.tchild.y;
                    child.scaleX = current.tchild.scaleX;
                    child.scaleY = current.tchild.scaleY;
                    child.rotation = current.tchild.rotation;
    
                    container.x = current.tcont.x;
                    container.y = current.tcont.y;
                    container.scaleX = current.tcont.scaleX;
                    container.scaleY = current.tcont.scaleY;
                    container.rotation = current.tcont.rotation;
    
                    container.update(mat2d.create(), 1);
    
                    // when
                    const result = Geometry.getHitbox(container);
    
                    // then 
                    expect(result).toEqual(current.expected);
                });
            }
        );
    })

    describe("#getBoundingRect for IDisplayObject", 
    ()=>{
        [
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {x: 0, y: 0, width: 100, height: 100}
            },
            {
                tcont: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 90}, 
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: {x: -100, y: 0, width: 100, height: 100}
            },
        ].forEach(
            (current, index)=>{
                it(`should calculate the world bounding rect of a child  for input n° ${index} `, 
                ()=>{
                    // given
                    child.x = current.tchild.x;
                    child.y = current.tchild.y;
                    child.scaleX = current.tchild.scaleX;
                    child.scaleY = current.tchild.scaleY;
                    child.rotation = current.tchild.rotation;
    
                    container.x = current.tcont.x;
                    container.y = current.tcont.y;
                    container.scaleX = current.tcont.scaleX;
                    container.scaleY = current.tcont.scaleY;
                    container.rotation = current.tcont.rotation;
    
                    container.update(mat2d.create(), 1);
    
                    // when
                    const result = Geometry.getBoundingRect(child);
    
                    // then 
                    expect(result).toEqual(current.expected);
                });
            }
        );
    });

    describe("#collide point", 
    ()=>{
        [
            {
                point: {x: 0, y: 0},
                tchild: {x: 0, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: true
            },
            {
                point: {x: 0, y: 0},
                tchild: {x: 100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: false
            },
            {
                point: {x: 150, y: 0},
                tchild: {x: 100, y:0, scaleX:1, scaleY: 1, rotation: 0}, 
                expected: true
            },
        ].forEach(
            (current, index)=>{
                it(`should say if point collides IDisplayObject  for input n° ${index} `, 
                ()=>{
                    // given
                    child.x = current.tchild.x;
                    child.y = current.tchild.y;
                    child.scaleX = current.tchild.scaleX;
                    child.scaleY = current.tchild.scaleY;
                    child.rotation = current.tchild.rotation;
    
                    child.update(mat2d.create(), 1);
    
                    // when
                    const result = Geometry.collide(current.point.x, current.point.y, child);
    
                    // then 
                    expect(result).toEqual(current.expected);
                });
            }
        );
    });

    describe("#FAST_ANGLES, FAST_SINUS, FAST_COSINUS", 
    ()=>{
        it("should return proper angles in radians, sinus & cosinus, from 0 to 360 degree", 
        ()=>{
            // given
            const angles = []; 
            const sinus = []; 
            const cosinus = [];
            // when
            for( let i = 0; i <= 360; i++ ){
                const radian = i * Geometry.TO_RADIANS;
                angles.push( radian );
                sinus.push( Math.sin( radian ) );
                cosinus.push( Math.cos( radian ) );
            }
            // then
            expect(angles).toEqual(Geometry.FAST_ANGLES);
            expect(sinus).toEqual(Geometry.FAST_SIN);
            expect(cosinus).toEqual(Geometry.FAST_COS);
            expect(Math.PI / 180).toEqual(Geometry.TO_RADIANS);
        });
    });

    describe("#updateTransformFast", 
    ()=>{
        it("should calculate the same matrices (but faster)", 
        ()=>{
            // given
            const stage = new Stage();
            const container1 = new DisplayObjectContainer(); 
            const container2 = new DisplayObjectContainer(); 
            stage.addChild(container1);
            stage.addChild(container2);
            stage.x = 10;
            stage.y = 10;
            container1.x = 100;
            container1.y = 500; 
            container1.scaleX = 2;
            container1.scaleY = 2;
            container1.rotation = 50;
            container1.transformOrigin.x = 14;
            container1.transformOrigin.y = 14;

            container2.x = 2727;
            container2.y = 5027250; 
            container2.scaleX = 22;
            container2.scaleY = 29;
            container2.rotation = 5270;
            container2.transformOrigin.x = 1427;
            container2.transformOrigin.y = 14125;

            for( let i = 0; i < 100; i++ ){
                const obj = new DisplayObject();
                obj.x = (Math.random() * 2000)>>0;
                obj.y = (Math.random() * 2000)>>0;
                obj.transformOrigin.x = (Math.random() * 2000)>>0;
                obj.transformOrigin.y = (Math.random() * 2000)>>0;
                obj.width = (Math.random() * 2000)>>0;
                obj.height = (Math.random() * 2000)>>0;
                if( i % 2 === 0 )
                    container1.addChild(obj);
                else
                    container2.addChild(obj);
            }
            const flatList = [stage, ...stage.getAllNestedChildren()];
            const worldMatrix = mat2d.create();
            const worldOpacity = 1;
            //when
            stage.update(worldMatrix, worldOpacity);
            const matrices1 = flatList.map( (o:IDisplayObject)=> mat2d.clone(o.matrix) );
            const wmatrices1 = flatList.map( (o:IDisplayObject)=> mat2d.clone(o.worldMatrix) );

            flatList.forEach( (o)=>Geometry.updateTransform(o.parent === null ? worldMatrix : o.parent.worldMatrix,o));
            const matrices2 = flatList.map( (o:IDisplayObject)=> mat2d.clone(o.matrix) );
            const wmatrices2 = flatList.map( (o:IDisplayObject)=> mat2d.clone(o.worldMatrix) );

            Geometry.updateTransformAll(worldMatrix, flatList);
            const matrices3 = flatList.map( (o:IDisplayObject)=> mat2d.clone(o.matrix) );
            const wmatrices3 = flatList.map( (o:IDisplayObject)=> mat2d.clone(o.worldMatrix) );
            unsignMatrices(matrices1);
            unsignMatrices(matrices2);
            unsignMatrices(matrices3);
            unsignMatrices(wmatrices1);
            unsignMatrices(wmatrices2);
            unsignMatrices(wmatrices3);

            //then
            expect(matrices1).toEqual(matrices2);
            expect(matrices2).toEqual(matrices3);

            expect(wmatrices1).toEqual(wmatrices2);
            expect(wmatrices2).toEqual(wmatrices3);
        })
        
        
    })

})