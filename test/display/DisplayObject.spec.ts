import { mat2d } from "gl-matrix";
import Texture from "../../lib/texture/Texture";
import DisplayObject from "../../lib/display/DisplayObject";
import DisplayObjectContainer from "../../lib/display/DisplayObjectContainer";
describe( 
    'DisplayObject test suite', 
    ()=>{

        describe("constructor and structure", 
            ()=>{
                it( 'should be able to instanciate a DisplayObject', 
                    ()=>{
                        const object = new DisplayObject();
                        expect(object).toBeTruthy();
                    }
                ); 

                it( "should be able to set/get x,y,width,height,opacity, scaleX, scaleY, rotation, texture, worldOpacity and parent properties", 
                    ()=>{
                        const object = new DisplayObject();
        
                        expect(object.x).toBeDefined();
                        expect(object.y).toBeDefined();
                        expect(object.width).toBeDefined();
                        expect(object.height).toBeDefined();
                        expect(object.parent).toBeDefined();
                        expect(object.scaleX).toBeDefined();
                        expect(object.scaleY).toBeDefined();
                        expect(object.rotation).toBeDefined();
                        expect(object.opacity).toBeDefined();
                        expect(object.texture).toBeDefined();
                        expect(object.worldOpacity).toBeDefined();
                    }
                );

                it("should be able to create a displayobject from a texture", 
                ()=>{
                    // given
                    const canvas = document.createElement("canvas");
                    canvas.width = canvas.height = 100;
                    const texture = Texture.createFromSource("my_tex", canvas);

                    // when
                    const disp = DisplayObject.createFromTexture(texture);

                    // then
                    expect(disp.width).toEqual(texture.sw);
                    expect(disp.height).toEqual(texture.sh);
                    expect(disp).toBeTruthy();
                })
            }
        );

        describe("transformation test suite", 
            ()=>{

                it("should calculate the world opacity",
                    ()=>{
                        // given 
                        const parent = new DisplayObjectContainer();
                        const child = new DisplayObject();

                        child.opacity = 0.5; 
                        parent.opacity = 0.5;

                        parent.addChild(child);
                        
                        // when 
                        parent.update(mat2d.create(), 1);

                        // then
                        expect(child.worldOpacity).toEqual(0.25);
                    }
                )

                it("world opacity should not be above 1",
                    ()=>{
                        // given 
                        const parent = new DisplayObjectContainer();
                        const child = new DisplayObject();

                        child.opacity = 0.5; 
                        parent.opacity = 2;

                        parent.addChild(child);
                        
                        // when 
                        parent.update(mat2d.create(), 1);

                        // then
                        expect(child.worldOpacity).toEqual(0.5);
                    }
                )
                
                it("world opacity should not be above 1",
                    ()=>{
                        // given 
                        const parent = new DisplayObjectContainer();
                        const child = new DisplayObject();

                        child.opacity = 2; 
                        parent.opacity = 2;

                        parent.addChild(child);
                        
                        // when 
                        parent.update(mat2d.create(), 1);

                        // then
                        expect(child.worldOpacity).toEqual(1);
                    }
                );
    
                it("world opacity should not be under 0",
                ()=>{
                    // given 
                    const parent = new DisplayObjectContainer();
                    const child = new DisplayObject();

                    child.opacity = 0.5; 
                    parent.opacity = -2;

                    parent.addChild(child);
                    
                    // when 
                    parent.update(mat2d.create(), 1);

                    // then
                    expect(child.worldOpacity).toEqual(0);
                }
                );

                it( "should update the transformation matrix", 
                    ()=>{
                        const identity = mat2d.create();
                        const object = new DisplayObject();
        
                        expect(object.matrix).toEqual(identity);
        
                        object.update(mat2d.create(), 1);
                        expect(object.matrix[4]).toEqual(object.x);
                        expect(object.matrix[5]).toEqual(object.y);
                    }
                );
        
                it( "should calculate world matrix", 
                    ()=>{
                        // given 
                        const parent = new DisplayObjectContainer();
                        const child = new DisplayObject();
        
                        child.x = 10; 
                        child.y = 20;
                        parent.x = 100;
                        parent.y = 200;
        
                        parent.addChild(child);
                        parent.update(mat2d.create(), 1);
        
                        // when 
                        const worldMatrix = child.worldMatrix;
        
                        // then
                        expect(worldMatrix[4]).toEqual(110);
                        expect(worldMatrix[5]).toEqual(220);
                    }
                );

                it("should transform object according to transform origin", 
                ()=>{
                    // given
                    const object = new DisplayObject(); 
                    object.x = 0;
                    object.y = 0;
                    object.width = 100;
                    object.height = 100;
                    object.transformOrigin.x = 50;
                    object.transformOrigin.y = 50;
                    object.rotation = 180;

                    // when
                    object.update(mat2d.create(), 1);

                    // then
                    expect( object.matrix[4]).toEqual(100);
                    expect( object.matrix[5]).toEqual(100);
                });

            }
        );

    }
)