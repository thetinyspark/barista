"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const isser_1 = require("./isser");
/**
 * The Geometry class is a set of utilitaries functions.
 */
class Geometry {
    static getFastAngle() {
        const results = [];
        for (let i = 0; i <= 360; i++) {
            results.push(i * this.TO_RADIANS);
        }
        return results;
    }
    static getFastSinus() {
        const results = this.getFastAngle();
        for (let i = 0; i < results.length; i++) {
            results[i] = Math.sin(i * this.TO_RADIANS);
        }
        return results;
    }
    static getFastCosinus() {
        const results = this.getFastAngle();
        for (let i = 0; i < results.length; i++) {
            results[i] = Math.cos(i * this.TO_RADIANS);
        }
        return results;
    }
    static updateTransformAll(worldMatrix, objects) {
        let b0 = worldMatrix[0], b1 = worldMatrix[1], b2 = worldMatrix[2], b3 = worldMatrix[3], b4 = worldMatrix[4], b5 = worldMatrix[5], curwm = gl_matrix_1.mat2d.create(), omat = gl_matrix_1.mat2d.create(), wmat = gl_matrix_1.mat2d.create(), object = null, lastparent = null, rot = 0, s = 0, c = 0, p0 = 0, p1 = 0, v0 = 0, v1 = 0;
        for (let i = 0; i < objects.length; i++) {
            object = objects[i];
            omat = object.matrix;
            wmat = object.worldMatrix;
            rot = ((object.rotation % 360 + 360) % 360) >> 0;
            s = Geometry.FAST_SIN[rot],
                c = Geometry.FAST_COS[rot],
                p0 = object.transformOrigin.x >> 0,
                p1 = object.transformOrigin.y >> 0,
                v0 = object.scaleX,
                v1 = object.scaleY;
            // translate to coords + origin + rotate + scale + translate back
            omat[0] = c * v0;
            omat[1] = s * v0;
            omat[2] = -s * v1;
            omat[3] = c * v1;
            omat[4] = omat[0] * -p0 + omat[2] * -p1 + object.x + object.offsetX + p0;
            omat[5] = omat[1] * -p0 + omat[3] * -p1 + object.y + object.offsetY + p1;
            // multiply world matrix
            if (object.parent !== lastparent) {
                curwm = (object.parent !== null) ? object.parent.worldMatrix : worldMatrix;
                lastparent = object.parent;
                b0 = curwm[0];
                b1 = curwm[1];
                b2 = curwm[2];
                b3 = curwm[3];
                b4 = curwm[4];
                b5 = curwm[5];
            }
            wmat[0] = b0 * omat[0] + b2 * omat[1];
            wmat[1] = b1 * omat[0] + b3 * omat[1];
            wmat[2] = b0 * omat[2] + b2 * omat[3];
            wmat[3] = b1 * omat[2] + b3 * omat[3];
            wmat[4] = b0 * omat[4] + b2 * omat[5] + b4;
            wmat[5] = b1 * omat[4] + b3 * omat[5] + b5;
        }
    }
    static updateTransform(worldMatrix, object) {
        const omat = object.matrix;
        const wmat = object.worldMatrix;
        const rot = (object.rotation < 0) ? (360 + object.rotation >> 0) % 360 : (object.rotation >> 0) % 360;
        let a0 = omat[0], a1 = omat[1], a2 = omat[2], a3 = omat[3], a4 = omat[4], a5 = omat[5], b0 = worldMatrix[0], b1 = worldMatrix[1], b2 = worldMatrix[2], b3 = worldMatrix[3], b4 = worldMatrix[4], b5 = worldMatrix[5], s = 0, c = 0, v0 = 0, v1 = 0;
        // translate to coords + origin
        omat[0] = 1;
        omat[1] = 0;
        omat[2] = 0;
        omat[3] = 1;
        omat[4] = object.x + object.offsetX + object.transformOrigin.x >> 0;
        omat[5] = object.y + object.offsetY + object.transformOrigin.y >> 0;
        // rotate 
        a0 = omat[0];
        a1 = omat[1];
        a2 = omat[2];
        a3 = omat[3];
        a4 = omat[4];
        a5 = omat[5];
        s = this.FAST_SIN[rot];
        c = this.FAST_COS[rot];
        omat[0] = a0 * c + a2 * s;
        omat[1] = a1 * c + a3 * s;
        omat[2] = a0 * -s + a2 * c;
        omat[3] = a1 * -s + a3 * c;
        omat[4] = a4;
        omat[5] = a5;
        // scale 
        a0 = omat[0];
        a1 = omat[1];
        a2 = omat[2];
        a3 = omat[3];
        a4 = omat[4];
        a5 = omat[5];
        v0 = object.scaleX,
            v1 = object.scaleY;
        omat[0] = a0 * v0;
        omat[1] = a1 * v0;
        omat[2] = a2 * v1;
        omat[3] = a3 * v1;
        omat[4] = a4;
        omat[5] = a5;
        // translate back
        a0 = omat[0];
        a1 = omat[1];
        a2 = omat[2];
        a3 = omat[3];
        a4 = omat[4];
        a5 = omat[5];
        v0 = -object.transformOrigin.x >> 0;
        v1 = -object.transformOrigin.y >> 0;
        omat[0] = a0;
        omat[1] = a1;
        omat[2] = a2;
        omat[3] = a3;
        omat[4] = a0 * v0 + a2 * v1 + a4;
        omat[5] = a1 * v0 + a3 * v1 + a5;
        // multiply world matrix
        b0 = omat[0];
        b1 = omat[1];
        b2 = omat[2];
        b3 = omat[3];
        b4 = omat[4];
        b5 = omat[5];
        a0 = worldMatrix[0];
        a1 = worldMatrix[1];
        a2 = worldMatrix[2];
        a3 = worldMatrix[3];
        a4 = worldMatrix[4];
        a5 = worldMatrix[5];
        wmat[0] = a0 * b0 + a2 * b1;
        wmat[1] = a1 * b0 + a3 * b1;
        wmat[2] = a0 * b2 + a2 * b3;
        wmat[3] = a1 * b2 + a3 * b3;
        wmat[4] = a0 * b4 + a2 * b5 + a4;
        wmat[5] = a1 * b4 + a3 * b5 + a5;
    }
    /**
     * Calculates and returns the IDisplayObject's Hitbox
     * in the world space coordinates.
     * @param child IDisplayObject
     * @returns HitBox
     */
    static getHitbox(child) {
        if (isser_1.isDisplayObjectContainer(child)) {
            const hitboxes = child.getChildren().map(child => this.getHitbox(child));
            const allX = [];
            const allY = [];
            hitboxes.forEach((box) => {
                allX.push(box.topLeft.x, box.topRight.x, box.bottomLeft.x, box.bottomRight.x);
                allY.push(box.topLeft.y, box.topRight.y, box.bottomLeft.y, box.bottomRight.y);
            });
            const left = Math.min(...allX);
            const right = Math.max(...allX);
            const top = Math.min(...allY);
            const bottom = Math.max(...allY);
            const result = {
                topLeft: { x: left, y: top },
                topRight: { x: right, y: top },
                bottomLeft: { x: left, y: bottom },
                bottomRight: { x: right, y: bottom }
            };
            return result;
        }
        else {
            const matrix = child.worldMatrix;
            const topLeft = this.transformPoint(0, 0, matrix);
            const topRight = this.transformPoint(child.width, 0, matrix);
            const bottomLeft = this.transformPoint(0, child.height, matrix);
            const bottomRight = this.transformPoint(child.width, child.height, matrix);
            const result = {
                topLeft: topLeft,
                topRight: topRight,
                bottomLeft: bottomLeft,
                bottomRight: bottomRight
            };
            return result;
        }
    }
    /**
     * Calculates and returns the IDisplayObject's bouding Rectangle
     * in the world space coordinates.
     * @param child IDisplayObject
     * @returns Rectangle
     */
    static getBoundingRect(child) {
        const hitbox = this.getHitbox(child);
        const left = Math.min(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        const right = Math.max(hitbox.topLeft.x, hitbox.topRight.x, hitbox.bottomLeft.x, hitbox.bottomRight.x);
        const top = Math.min(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        const bottom = Math.max(hitbox.topLeft.y, hitbox.topRight.y, hitbox.bottomLeft.y, hitbox.bottomRight.y);
        return {
            x: left,
            y: top,
            width: right - left,
            height: bottom - top
        };
    }
    /**
     * Transforms a pair of x,y coordinates with a matrix
     * @param x number
     * @param y number
     * @param matrix mat2d
     * @returns Point
     */
    static transformPoint(x, y, matrix) {
        return {
            x: Math.round(x * matrix[0] + y * matrix[2] + matrix[4]),
            y: Math.round(x * matrix[1] + y * matrix[3] + matrix[5]),
        };
    }
    /**
     * Says if the IDisplayObject collides the x,y coordinates or not
     * @param x number
     * @param y number
     * @param child IDisplayObject
     * @returns boolean
     */
    static collide(x, y, child) {
        const rect = this.getBoundingRect(child);
        const out = (x < rect.x ||
            x > rect.x + rect.width ||
            y < rect.y ||
            y > rect.y + rect.height);
        return !out;
    }
}
exports.default = Geometry;
Geometry.TO_RADIANS = Math.PI / 180;
/**
 * Array of precompute degree to radians angles
 */
Geometry.FAST_ANGLES = Geometry.getFastAngle();
/**
 * Array of precompute sinus(degree to radians angles)
 */
Geometry.FAST_SIN = Geometry.getFastSinus();
/**
 * Array of precompute cosinus(degree to radians angles)
 */
Geometry.FAST_COS = Geometry.getFastCosinus();
