import { mat2, mat2d } from "gl-matrix";
import DisplayObject from "../../lib/display/DisplayObject";
import DisplayObjectContainer from "../../lib/display/DisplayObjectContainer";
import Geometry from "../../lib/geom/Geometry";

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

})