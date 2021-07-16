"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const Emitter_1 = require("../event/Emitter");
class DisplayObject extends Emitter_1.default {
    constructor() {
        super(...arguments);
        this.texture = null;
        this.worldMatrix = gl_matrix_1.mat2d.create();
        this.matrix = gl_matrix_1.mat2d.create();
        this.x = 0;
        this.y = 0;
        this.opacity = 1;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.width = 0;
        this.height = 0;
        this.parent = null;
    }
    updateMatrix(worldMatrix = null) {
        gl_matrix_1.mat2d.identity(this.matrix);
        gl_matrix_1.mat2d.translate(this.matrix, this.matrix, [this.x, this.y]);
        gl_matrix_1.mat2d.rotate(this.matrix, this.matrix, this.rotation * (Math.PI / 180));
        gl_matrix_1.mat2d.scale(this.matrix, this.matrix, [this.scaleX, this.scaleY]);
        if (worldMatrix !== null)
            gl_matrix_1.mat2d.multiply(this.worldMatrix, worldMatrix, this.matrix);
        else
            this.worldMatrix = this.matrix;
    }
    render(renderer) {
        renderer.add(this);
    }
}
exports.default = DisplayObject;
