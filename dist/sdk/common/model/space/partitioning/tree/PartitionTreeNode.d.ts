import IPartitionMethod from "./IPartitionMethod";
export default class PartitionTreeNode<T> {
    private _maxChildren;
    private _depth;
    private _maxDepth;
    private _partitionMethod;
    parent: PartitionTreeNode<T>;
    private _left;
    private _right;
    private _children;
    constructor(_maxChildren: number, _depth: number, _maxDepth: number, _partitionMethod: IPartitionMethod<T>);
    search(...params: any[]): Array<T>;
    reset(): void;
    createSubNodes(): void;
    getChildren(): Array<T>;
    addChild(object: T): void;
    getPartitionMethod(): IPartitionMethod<T>;
    getLeft(): PartitionTreeNode<T>;
    getRight(): PartitionTreeNode<T>;
    getDepth(): number;
    setDepth(depth: number): void;
}
