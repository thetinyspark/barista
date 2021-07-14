import { mat2d } from "gl-matrix";
import DisplayObject, {} from "../../lib/display/DisplayObject";
import DisplayObjectContainer, {} from "../../lib/display/DisplayObjectContainer";
import { IDisplayObject } from "../../lib/display/IDisplayObject";
import { IDisplayObjectContainer } from "../../lib/display/IDisplayObjectContainer";
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

                it( "should be able to set/get x,y,width,height and parent properties", 
                    ()=>{
                        const object = new DisplayObject();
        
                        expect(object.x).toBeDefined();
                        expect(object.y).toBeDefined();
                        expect(object.width).toBeDefined();
                        expect(object.height).toBeDefined();
                        expect(object.parent).toBeDefined();
                    }
                 );
            }
        );

        describe("transformation test suite", 
            ()=>{
                
    
                it( "should update the transformation matrix", 
                    ()=>{
                        const identity = mat2d.create();
                        const object = new DisplayObject();
        
                        expect(object.matrix).toEqual(identity);
        
                        object.updateMatrix();
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
                        child.updateMatrix();
        
                        // when 
                        const worldMatrix = child.worldMatrix;
        
                        // then
                        expect(worldMatrix[4]).toEqual(110);
                        expect(worldMatrix[5]).toEqual(220);
                    }
                );

                it( "should transform the context when rendering and restore it", 
                    ()=>{
                        // when 
                        const canvas = document.createElement("canvas");
                        const context = canvas.getContext("2d");
                        const parent = new DisplayObjectContainer();
                        const child = new DisplayObject();
                        parent.addChild(child);
        
                        child.x = 10; 
                        child.y = 20;
                        parent.x = 100;
                        parent.y = 200;

                        child.updateMatrix();

                        const spy = spyOn(context,"transform");
                        const worldMatrix = child.worldMatrix;
        
                        // using
                        parent.render(context);
        
                        // then
                        expect(spy).toHaveBeenCalledWith(
                            worldMatrix[0],
                            worldMatrix[1],
                            worldMatrix[2],
                            worldMatrix[3],
                            worldMatrix[4],
                            worldMatrix[5],
                        );
                    }
                );
            }
        );

    }
)