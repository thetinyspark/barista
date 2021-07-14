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

                it( "should be able to set/get x,y,width,height,opacity, scaleX, scaleY, rotation and parent properties", 
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
                    }
                 );
            }
        );

        describe("transformation test suite", 
            ()=>{
                it("should get the global opacity",
                    ()=>{
                        // given 
                        const canvas = document.createElement("canvas");
                        const context = canvas.getContext("2d");
                        const parent = new DisplayObjectContainer();
                        const child = new DisplayObject();
                        parent.addChild(child); 
        
                        parent.opacity = 0.5;
                        child.opacity = 0.5;
        
                        // when 
                        parent.prepareContext(context); 
                        child.prepareContext(context);

                        // then
                        expect(context.globalAlpha).toEqual(child.opacity * parent.opacity);
                        parent.restoreContext(context);
                        child.restoreContext(context);
                    }
                )
    
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
                        parent.updateMatrix();
        
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

                        parent.updateMatrix();
                        child.updateMatrix();

                        const spy = spyOn(context,"setTransform");
        
                        // using
                        parent.prepareContext(context );
                        parent.render(context);
                        parent.restoreContext(context);
        
                        // then
                        expect(spy).toHaveBeenCalledTimes(2);
                    }
                );
            }
        );

    }
)