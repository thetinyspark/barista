import { mat2d } from "gl-matrix";
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
                        parent.update(mat2d.create());

                        // then
                        expect(child.worldOpacity).toEqual(0.25);
                    }
                )
    
                it( "should update the transformation matrix", 
                    ()=>{
                        const identity = mat2d.create();
                        const object = new DisplayObject();
        
                        expect(object.matrix).toEqual(identity);
        
                        object.update(mat2d.create());
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
                        parent.update(mat2d.create());
        
                        // when 
                        const worldMatrix = child.worldMatrix;
        
                        // then
                        expect(worldMatrix[4]).toEqual(110);
                        expect(worldMatrix[5]).toEqual(220);
                    }
                );

            }
        );

    }
)