"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Partition2D {
    constructor(box, axis) {
        this.box = box;
        this.axis = axis;
    }
    search(node, target, results = []) {
        const method = node.getPartitionMethod();
        const nodeBox = method.box;
        if (!nodeBox.collideBox(target))
            return;
        if (node.getLeft() !== null) {
            node.getLeft().search(target, results);
            node.getRight().search(target, results);
        }
        else {
            const children = node.getChildren();
            const max = children.length;
            for (let i = 0; i < max; i++) {
                if (children[i].collideBox(target))
                    results.push(children[i]);
            }
        }
        return results;
    }
    split(objects) {
        const left = [];
        const right = [];
        const max = objects.length;
        const midX = this.box.getMidX();
        const midY = this.box.getMidY();
        for (let i = 0; i < max; i++) {
            const current = objects[i];
            if (this.axis === 'x') {
                if (current.x >= midX) {
                    right.push(current);
                }
                else {
                    left.push(current);
                }
            }
            else {
                if (current.y >= midY) {
                    right.push(current);
                }
                else {
                    left.push(current);
                }
            }
        }
        const boxes = (this.axis === 'x') ? this.box.splitVertical() : this.box.splitHorizontal();
        const newAxis = (this.axis === 'x') ? 'y' : 'x';
        const leftFunction = new Partition2D(boxes[0], newAxis);
        const rightFunction = new Partition2D(boxes[1], newAxis);
        return { left, right, leftFunction, rightFunction };
    }
}
exports.default = Partition2D;
