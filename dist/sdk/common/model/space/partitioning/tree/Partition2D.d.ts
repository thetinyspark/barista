import IPartitionMethod from "./IPartitionMethod";
import BoundingBox from "./BoundingBox";
import PartitionTreeNode from "./PartitionTreeNode";
export default class Partition2D implements IPartitionMethod<BoundingBox> {
    box: BoundingBox;
    axis: 'x' | 'y';
    constructor(box: BoundingBox, axis: 'x' | 'y');
    search(node: PartitionTreeNode<BoundingBox>, target: BoundingBox, results?: Array<BoundingBox>): Array<BoundingBox>;
    split(objects: Array<BoundingBox>): {
        left: Array<BoundingBox>;
        right: Array<BoundingBox>;
        leftFunction: IPartitionMethod<BoundingBox>;
        rightFunction: IPartitionMethod<BoundingBox>;
    };
}
