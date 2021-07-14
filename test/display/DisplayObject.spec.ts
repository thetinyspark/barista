import DisplayObject, {} from "../../lib/display/DisplayObject";
describe( 
    'DisplayObject test suite', 
    ()=>{
        it( 
            'should be able to instanciate a DisplayObject', 
            ()=>{
                const object = new DisplayObject();
                expect(object).toBeTruthy();
            }
        ); 

        it( 
            "should be able to set/get x,y,width,height and parent properties", 
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
)