import BoundingBox from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/BoundingBox";
import Partition2D from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/Partition2D";
import PartitionTreeNode from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/PartitionTreeNode";

describe('Partition2D test suite', 
()=>{

    function createObjects(
        num:number = 10, 
        maxX:number = 800, 
        maxY:number = 800, 
        maxW:number = 200, 
        maxH:number = 200
    ){
        const objects:BoundingBox[] = []; 
        for( let i:number = 0; i < num; i++){
            const obj = new BoundingBox();
            obj.x       = Math.round( Math.random() * maxX );
            obj.y       = Math.round( Math.random() * maxY );
            obj.width   = Math.round( Math.random() * maxW );
            obj.height  = Math.round( Math.random() * maxH );
            objects.push(obj);
        }
        return objects;
    }

    it('should be split the objects passed in param in two sides according to the axis (x)', 
    ()=>{

        //given
        const partition:Partition2D = new Partition2D( new BoundingBox(0,0,1000,1000),'x');
        const objects = createObjects(20); 
        

        // when 
        const results = partition.split(objects); 
        const midX:number = partition.box.getMidX()
        const total:number = results.left.length  + results.right.length;
        const leftFunction = results.leftFunction as Partition2D;
        const rightFunction = results.rightFunction as Partition2D;


        // then 
        expect(total).toBeGreaterThan(0);
        results.left.forEach( 
            (b:BoundingBox)=>{
                expect(b.x).toBeLessThanOrEqual(midX);
            }
        );

        results.right.forEach( 
            (b:BoundingBox)=>{
                expect(b.x).toBeGreaterThanOrEqual(midX);
            }
        );

        expect(leftFunction.axis).toEqual('y');
        expect(rightFunction.axis).toEqual('y');
        expect(rightFunction.box.x).toEqual(partition.box.getMidX());
        expect(leftFunction.box.width).toEqual(partition.box.getMidX());
    }); 

    it('should be split the objects passed in param in two sides according to the axis (y)', 
    ()=>{

        //given
        const partition:Partition2D = new Partition2D( new BoundingBox(0,0,1000,1000),'y');
        const objects = createObjects(20); 
        

        // when 
        const results = partition.split(objects); 
        const midY:number = partition.box.getMidY()
        const total:number = results.left.length  + results.right.length;
        const leftFunction = results.leftFunction as Partition2D;
        const rightFunction = results.rightFunction as Partition2D;


        // then 
        expect(total).toBeGreaterThan(0);
        results.left.forEach( 
            (b:BoundingBox)=>{
                expect(b.y).toBeLessThanOrEqual(midY);
            }
        );

        results.right.forEach( 
            (b:BoundingBox)=>{
                expect(b.y).toBeGreaterThanOrEqual(midY);
            }
        );

        expect(leftFunction.axis).toEqual('x');
        expect(rightFunction.axis).toEqual('x');
        expect(rightFunction.box.y).toEqual(partition.box.getMidY());
        expect(leftFunction.box.height).toEqual(partition.box.getMidY());
    }); 

    it('should be able to search on a tree node', 
    ()=>{
        // given
        const maxChildren:number = 200; 
        const currentDepth:number = 0;
        const maxDepth:number = 10;    
        const partition:Partition2D = new Partition2D( new BoundingBox(0,0,100000,100000),'x');
        const tree = new PartitionTreeNode<BoundingBox>(maxChildren, currentDepth, maxDepth, partition);
        const objects = createObjects(100000,99800,99800,200,200); 

        // when 
        const camera = new BoundingBox(500,500,1980,1080);
        objects.forEach( tree.addChild.bind(tree) );
        const searched = tree.search(camera);
        const filtered = searched.filter( b=>b.collideBox(camera));
        
        // then
        expect(searched.length).toBeGreaterThan(0);
        expect(searched.length).toEqual(filtered.length);
    })
});