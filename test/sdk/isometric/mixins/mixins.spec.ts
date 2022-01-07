import makeIsometric from "../../../../lib/sdk/isometric/mixins/mixins";
import Animation from "../../../../lib/core/display/Animation";
describe(
    "iso utils test suite",
    () => {

        it(`should create a class which mixin between DisplayObject and Isometric interface`, 
        ()=>{
            // given
            const myIsoClass = makeIsometric(Animation); 
            
            
            // when 
            const object = new myIsoClass();
        
            // then
            expect(object.isoNode).toBeDefined();
            expect(object.syncWithNode).toBeDefined();
        });
    }
)