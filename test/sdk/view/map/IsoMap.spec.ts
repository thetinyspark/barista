import IsoMap from "../../../../lib/sdk/isometric/view/map/IsoMap";
import makeIsometric, { Isometric } from "../../../../lib/sdk/isometric/mixins/mixins";
import Animation from "../../../../lib/core/display/Animation";
import Stage from "../../../../lib/core/display/Stage";


describe(
    "IsoMap test suite",
    () => {

        it(`should sort object according to a top iso view (smaller coordinates children are far, greater is close )`, 
        ()=>{
            // given

            const Iso = makeIsometric(Animation); 
            const container = new IsoMap();
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
            container.sort();
            container.render(new Stage().getRenderer());
        
            // then
            const children = container.getChildren() as unknown as Isometric[];
            children.map( 
                (current, index)=>{
                    
                    expect( current.isoNode.row ).toEqual(index+1);
                    expect( current.isoNode.col ).toEqual(index+1);
                }
            )
        });
    }
)