"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PartitionTreeNode {
    constructor(_maxChildren, _depth, _maxDepth, _partitionMethod) {
        this._maxChildren = _maxChildren;
        this._depth = _depth;
        this._maxDepth = _maxDepth;
        this._partitionMethod = _partitionMethod;
        this.parent = null;
        this._left = null;
        this._right = null;
        this._children = [];
        this.reset();
    }
    search(...params) {
        return this._partitionMethod.search(this, ...params);
    }
    reset() {
        this._children = [];
        this._left = null;
        this._right = null;
    }
    createSubNodes() {
        const results = this._partitionMethod.split(this.getChildren());
        this._left = new PartitionTreeNode(this._maxChildren, this._depth + 1, this._maxDepth, results.leftFunction);
        this._right = new PartitionTreeNode(this._maxChildren, this._depth + 1, this._maxDepth, results.rightFunction);
        results.left.forEach(this._left.addChild.bind(this._left));
        results.right.forEach(this._right.addChild.bind(this._right));
        this._left.parent = this;
        this._right.parent = this;
        this._children = [];
    }
    getChildren() {
        return this._children;
    }
    addChild(object) {
        if (this._children.length >= this._maxChildren && this._depth < this._maxDepth) {
            this.createSubNodes();
        }
        if (this._left === null && this._right === null) {
            this._children.push(object);
        }
        else {
            const results = this._partitionMethod.split([object]);
            if (results.left.length > 0)
                this._left.addChild(results.left[0]);
            if (results.right.length > 0)
                this._right.addChild(results.right[0]);
        }
    }
    getPartitionMethod() {
        return this._partitionMethod;
    }
    getLeft() {
        return this._left;
    }
    getRight() {
        return this._right;
    }
    getDepth() {
        return this._depth;
    }
    setDepth(depth) {
        this._depth = depth;
    }
}
exports.default = PartitionTreeNode;
