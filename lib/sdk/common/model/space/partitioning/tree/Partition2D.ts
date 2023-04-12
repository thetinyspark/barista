import IPartitionMethod from "./IPartitionMethod";
import BoundingBox from "./BoundingBox";
import PartitionTreeNode from "./PartitionTreeNode";

export default class Partition2D implements IPartitionMethod<BoundingBox>{
    constructor(
        public box:BoundingBox,
        public axis:'x'|'y'
    ){}

    search( node:PartitionTreeNode<BoundingBox>, target:BoundingBox, results:Array<BoundingBox> = []):Array<BoundingBox>{
        const method:Partition2D = node.getPartitionMethod() as Partition2D;
        const nodeBox:BoundingBox = method.box;
        if( !nodeBox.collideBox(target))
            return; 

        if( node.getLeft() !== null ){
            node.getLeft().search(target, results)
            node.getRight().search(target, results)
        }
        else{
            const children = node.getChildren();
            const max:number = children.length;
            for( let i:number = 0; i < max; i++){
                if( children[i].collideBox(target))
                    results.push(children[i]);
            }
        }

        return results;
    }

    split(objects:Array<BoundingBox>):{
        left:Array<BoundingBox>, 
        right:Array<BoundingBox>, 
        leftFunction:IPartitionMethod<BoundingBox>, 
        rightFunction:IPartitionMethod<BoundingBox>
    }{

        const left = [];
        const right = [];
        const max:number = objects.length;
        const midX:number = this.box.getMidX();
        const midY:number = this.box.getMidY();

        for( let i:number = 0; i < max; i++){
            const current:BoundingBox = objects[i]; 

            if( this.axis === 'x'){
                if( current.x >= midX ){
                    right.push(current);
                }
                else{
                    left.push(current);
                }
            }
            else{
                if( current.y >= midY ){
                    right.push(current);
                }
                else{
                    left.push(current);
                }
            }
        }

        const boxes = ( this.axis === 'x' ) ? this.box.splitVertical() : this.box.splitHorizontal();
        const newAxis = ( this.axis === 'x') ? 'y' : 'x';
        const leftFunction = new Partition2D( boxes[0], newAxis);
        const rightFunction = new Partition2D( boxes[1], newAxis);

        return {left,right, leftFunction, rightFunction};
    }
}