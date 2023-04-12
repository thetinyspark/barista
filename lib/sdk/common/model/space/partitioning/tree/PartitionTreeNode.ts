import IPartitionMethod from "./IPartitionMethod";

export default class PartitionTreeNode<T>{

    public parent:PartitionTreeNode<T> = null;
    private _left:PartitionTreeNode<T> = null;
    private _right:PartitionTreeNode<T> = null;
    private _children:Array<T> = [];

    constructor(
        private _maxChildren:number,
        private _depth:number, 
        private _maxDepth:number, 
        private _partitionMethod:IPartitionMethod<T>
    ){
        this.reset();
    }

    search(...params:any[]):Array<T>{
        return this._partitionMethod.search(this, ...params);
    }

    reset(){
        this._children = [];
        this._left = null;
        this._right = null;
    }

    createSubNodes(){
        const results = this._partitionMethod.split(this.getChildren());

        this._left = new PartitionTreeNode(
            this._maxChildren, 
            this._depth+1, 
            this._maxDepth, 
            results.leftFunction
        );

        this._right = new PartitionTreeNode(
            this._maxChildren, 
            this._depth+1, 
            this._maxDepth, 
            results.rightFunction
        );

        results.left.forEach( this._left.addChild.bind(this._left) );
        results.right.forEach( this._right.addChild.bind(this._right) );
        this._left.parent = this;
        this._right.parent = this;

        this._children = [];
    }

    getChildren():Array<T>{
        return this._children;
    }

    addChild(object:T){
        if( this._children.length >= this._maxChildren && this._depth < this._maxDepth){
            this.createSubNodes();
        }

        if( this._left === null && this._right === null ){
            this._children.push(object);
        }
        else{
            const results = this._partitionMethod.split([object]);
            if( results.left.length > 0 )
                this._left.addChild(results.left[0]);

            if( results.right.length > 0 )
                this._right.addChild(results.right[0]);
        }
    }

    getPartitionMethod():IPartitionMethod<T>{
        return this._partitionMethod;
    }

    getLeft():PartitionTreeNode<T>{
        return this._left;
    }

    getRight():PartitionTreeNode<T>{
        return this._right;
    }

    getDepth():number{
        return this._depth;
    }

    setDepth(depth:number){
        this._depth = depth;
    }
}