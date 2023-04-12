import PartitionTreeNode from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/PartitionTreeNode";
import Partition2D from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/Partition2D";
import BoundingBox from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/BoundingBox";

describe('PartitionTreeNode test suite', 
()=>{

    function createObjects(num:number = 10){
        const objects:BoundingBox[] = []; 
        for( let i:number = 0; i < num; i++){
            const obj   = new BoundingBox();
            obj.x       = Math.round( Math.random() * 1000 );
            obj.y       = Math.round( Math.random() * 1000 );
            obj.width   = Math.round( Math.random() * 200 );
            obj.height  = Math.round( Math.random() * 200 );
            objects.push(obj);
        }
        return objects;
    }

    const maxChildren:number = 20; 
    const currentDepth:number = 0;
    const maxDepth:number = 10;    
    const partition:Partition2D = new Partition2D( new BoundingBox(0,0,1000,1000),'x');

    const tree = new PartitionTreeNode<any>(maxChildren, currentDepth, maxDepth, partition);
    beforeEach(
        ()=>{
            tree.reset();
            tree.setDepth(0);
        }
    )

    it('should able to reset a node', 
    ()=>{

        // given
        const objects = createObjects(10);

        // when
        objects.forEach( tree.addChild.bind(tree) ); 
        tree.reset();
        const children = tree.getChildren();

        // then
        expect(children.length).toEqual(0);
        expect(tree.getLeft()).toBeNull();
        expect(tree.getRight()).toBeNull();
    }); 

    it('should able to store/retrieve multiple children', 
    ()=>{

        // given
        const objects = createObjects(10);

        // when
        objects.forEach( tree.addChild.bind(tree) ); 
        const children = tree.getChildren();

        // then
        expect(children).toEqual(objects);
    }); 

    it('should not be able to store more children than maxChildren', 
    ()=>{

        // given
        const objects = createObjects(maxChildren*2);

        // when
        objects.forEach( tree.addChild.bind(tree) ); 
        const children = tree.getChildren();

        // then
        expect(children.length).toBeLessThan(objects.length);
    }); 

    it('should create left and right nodes with (good properties) if we try to push more children than max', 
    ()=>{
        // given
        const objects = createObjects(maxChildren*2);

        // when
        objects.forEach( tree.addChild.bind(tree) ); 

        // then
        expect(tree.getDepth()).toEqual(0);
        expect(tree.getLeft()).not.toBeNull();
        expect(tree.getRight()).not.toBeNull();
        expect(tree.getLeft()?.getDepth()).toEqual(1);
        expect(tree.getRight()?.getDepth()).toEqual(1);
    }); 

    it('should not create left and right nodes if it goes beyond maxDepth', 
    ()=>{
        // given
        const objects = createObjects(maxChildren*2);

        // when
        tree.setDepth(maxDepth);
        objects.forEach( tree.addChild.bind(tree) ); 

        // then
        expect(tree.getLeft()).toBeNull();
        expect(tree.getRight()).toBeNull();
        expect(tree.getChildren().length).toEqual(objects.length);
    }); 

    it('should dispatch children in left and right nodes when it goes beyond maxchildren', 
    ()=>{
        // given
        const objects = createObjects(maxChildren*2);

        // when
        tree.setDepth(maxDepth-1);
        objects.forEach( tree.addChild.bind(tree) ); 
        const total:number = tree.getLeft().getChildren().length + tree.getRight().getChildren().length;

        // then
        expect(total).toBeGreaterThanOrEqual(objects.length);
    }); 
});