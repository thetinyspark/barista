import Canvas2DRenderer from "../../../lib/core/rendering/canvas/Canvas2DRenderer";
import DisplayObject from "../../../lib/core/display/DisplayObject";
import DisplayObjectContainer from "../../../lib/core/display/DisplayObjectContainer";
describe( 
    'DisplayObjectContainer test suite', 
    ()=>{

        describe( "constructor suite",
            ()=>{
                it( 
                    'should be able to instanciate a DisplayObjectContainer', 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        expect(container).toBeTruthy();
                    }
                ); 
            }
        ); 

        describe( "add children suite", 
            ()=>{
                it( "should add a child at the end of children list when position is out of bound", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        container.addChildAt(object,5);
                        
                        expect(container.getChildIndex(object)).toEqual(0);
                    }
                ); 
        
                it( "should not be able to add the same child twice when using addChild", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        container.addChild(object); 
                        container.addChild(object); 
                        
                        expect(container.getChildren().length).toEqual(1);
                    }
                ); 
        
                it( "should not be able to add the same child twice when using addChildAt", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        container.addChildAt(object,0); 
                        container.addChildAt(object,0); 
                        
                        expect(container.getChildren().length).toEqual(1);
                    }
                ); 
        
                it( "should add a child at a particular position", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
                        const object = new DisplayObject();
                        container.addChildAt(object,5);
                        expect(container.getChildIndex(object)).toEqual(5);  
                        expect(container.getChildren().length).toEqual(11);
                    }
                ); 

                it( "should be able to add a child and retrieve a child", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        container.addChild( object ); 
                        const children = container.getChildren(); 
                        expect(children).toContain(object);
                    }
                );
            }
        ); 

        describe( "parenting suite", 
            ()=>{
                it( "should set the parent to container when using addChildAt", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
                        const object = new DisplayObject();
                        container.addChildAt(object,5);
                        expect(object.parent).toBe(container);
                    }
                ); 
        
                it( "should set removed child's parent to null", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        container.addChild( object ); 
                        container.removeChild(object);
                        expect(object.parent).toBeNull();
                    }
                ); 
        
                it( "should set positionned removed child's parent to null", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
                        const object = container.getChildren()[5];
         
                        container.removeChildAt(5);
                        expect(object.parent).toBeNull();
                    }
                ); 

                it( "should set the child's parent to container", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        expect(object.parent).toBe(null);
                        container.addChild( object ); 
                        expect(object.parent).toBe(container);
                    }
                );

                it( "should set all children's parents to null", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
        
                        const children = container.getChildren(); 
                        container.removeChildren();
                        for( let i:number = 0; i < children.length; i++ ){
                            expect(children[i].parent).toBeNull();
                        }
                    }
                ); 
            }
        );

        describe("remove children suite", 
            ()=>{
                it( 
                    "should throw an error if you specify an out of range position", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const func:Function = ()=>{
                            container.removeChildAt(5)
                        };
        
                        expect ( func ).toThrowError("out of bound index for removeChildAt")   
                    }
                ); 
        
                it( 
                    "should be able to remove a child from the container at a certain position", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
                        const object = container.getChildren()[5];
         
                        container.removeChildAt(5);
                        expect(container.contains(object)).toBe(false);
                    }
                ); 

                it( 
                    "should be able to remove a child from the container", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        container.addChild( object ); 
                        container.removeChild(object);
                        expect(container.contains(object)).toBe(false);
                    }
                ); 

                it( 
                    "should be able to remove all children at once", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
        
                        container.removeChildren();
                        expect(container.getChildren()).toEqual([]);
                    }
                ); 
        
            }
        ); 

        describe("get children suite", 
            ()=>{
                it( 
                    "should be able to say if it contains a child", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const object = new DisplayObject();
                        expect(container.contains(object)).toBe(false);
                        
                        container.addChild( object ); 
                        expect(container.contains(object)).toBe(true);
                    }
                );

                it(
                    "should be able to retrieve a child position in the container", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        for( let i:number = 0; i  < 10; i++){
                            container.addChild( new DisplayObject() );
                        }
        
                        const object = container.getChildren()[5];
                        expect(container.getChildIndex(object)).toEqual(5);
                    }
                ); 

                it(
                    "should be able to retrieve a child by its name", 
                    ()=>{
                        const container = new DisplayObjectContainer();
                        const disp1 = new DisplayObject();
                        const disp2 = new DisplayObject();
                        disp1.name = "disp1";
                        disp2.name = "disp2";
                        
                        container.addChild(disp1);
                        container.addChild(disp2);
        
                        expect(container.getChildByName("disp1")).toBe(disp1);
                        expect(container.getChildByName("disp2")).toBe(disp2);
                        expect(container.getChildByName("disp3")).toBeNull();
                    }
                ); 
            
            }
        );

        describe("render test suite", 
            ()=>{
                it("should call the children's render methods",
                    ()=>{
                        // when 
                        const object1 = new DisplayObject();
                        const object2 = new DisplayObject();
                        const spy1 = spyOn(object1, "render");
                        const spy2 = spyOn(object2, "render"); 
                        const renderer = new Canvas2DRenderer();
                        const container = new DisplayObjectContainer(); 
                        container.addChild(object1);
                        container.addChild(object2);

                        // using
                        container.render(renderer);

                        // then
                        expect(spy1).toHaveBeenCalledOnceWith(renderer);
                        expect(spy2).toHaveBeenCalledOnceWith(renderer);
                    }
                );
            }
        );
        describe("get all nested children suite", 
            ()=>{
                it("shoud be able to retrieve all nested children recusively",
                    ()=>{
                        // when 
                        const container1 = new DisplayObjectContainer(); 
                        const container2 = new DisplayObjectContainer(); 
                        const container3 = new DisplayObjectContainer(); 
                        const object1 = new DisplayObject();
                        const object2 = new DisplayObject();
                        const object3 = new DisplayObject();
                        const object4 = new DisplayObject();

                        container1.addChild(container2);
                        container1.addChild(container3);
                        container2.addChild(object1);
                        container3.addChild(object2);
                        container3.addChild(object3);
                        container3.addChild(object4);

                        // using
                        const nested = container1.getAllNestedChildren();

                        // then
                        expect(nested).toEqual(
                            [
                                container2, 
                                    object1, 
                                container3, 
                                    object2,
                                    object4,
                                    object4,
                            ]
                        );
                    }
                );
                it("shoud be able to retrieve all nested children iteratively",
                    ()=>{
                        // when 
                        const container1 = new DisplayObjectContainer(); 
                        const container2 = new DisplayObjectContainer(); 
                        const container3 = new DisplayObjectContainer(); 
                        const object1 = new DisplayObject();
                        const object2 = new DisplayObject();
                        const object3 = new DisplayObject();
                        const object4 = new DisplayObject();

                        container1.name = "container1";
                        container2.name = "container2";
                        container3.name = "container3";
                        object1.name = "object1";
                        object2.name = "object2";
                        object3.name = "object3";
                        object4.name = "object4";

                        container1.addChild(container2);
                        container1.addChild(container3);
                        container2.addChild(object1);
                        container3.addChild(object2);
                        container3.addChild(object3);
                        container3.addChild(object4);
                        const expected =  [
                            container2, 
                                object1, 
                            container3, 
                                object2,
                                object3,
                                object4,
                        ];

                        // using
                        const iterative = container1.getAllNestedChildrenIterative();
                        const recursive = container1.getAllNestedChildren();

                        // then
                        expect(iterative).toEqual(expected);
                        expect(iterative).toEqual(recursive);
                    }
                );
            }
        );
    }
)