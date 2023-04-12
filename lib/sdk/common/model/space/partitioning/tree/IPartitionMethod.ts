import PartitionTreeNode from "./PartitionTreeNode"

export default interface IPartitionMethod<T>{
    split(objects:Array<T>):{
        left:Array<T>, 
        right:Array<T>, 
        leftFunction:IPartitionMethod<T>,
        rightFunction:IPartitionMethod<T>,
    };

    search( node:PartitionTreeNode<T>, ...params:any[] ):Array<T>;
}