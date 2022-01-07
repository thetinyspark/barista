"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DisplayObject_1 = require("./DisplayObject");
/**
 * The DisplayObjectContainer class is the base class for every DisplayObjects containers.
 * It supports basic functionality like adding, removing, containing children at a specific index or not.
 * It inherits from DisplayObject, so it could be transformed, but it's texture property is useless.
 *
 * index.html
 * ```html
 * <!DOCTYPE html>
 * <html lang="en">
 * <head>
 *     <meta charset="UTF-8">
 *     <meta http-equiv="X-UA-Compatible" content="IE=edge">
 *     <meta name="viewport" content="width=device-width, initial-scale=1.0">
 *     <title>Document</title>
 *     <script src="dist/main.js"></script>
 * </head>
 * <body>
 *     <img src="./moocaccino.png" alt="moocaccino logo" id="my_img_id"/>
 * </body>
 * </html>
 * ```
 * index.ts
 * ```typescript
 * import {DisplayObject, DisplayObjectContainer, Stage} from "@thetinyspark/moocaccino-barista";
 *
 * // Get the image
 * const img:HTMLImageElement = document.getElementById("my_img_id") as HTMLImageElement;
 *
 * // Create stage instance
 * const stage:Stage = new Stage();
 *
 * // Then, create a texture from the img
 * const texture:Texture = Texture.createFromSource("id",img);
 *
 * // You can create a DisplayObjectContainer
 * const container = new DisplayObjectContainer();
 *
 * // And now, you multiple DisplayObjects from the Texture
 * for( let i:number = 0; i < 10; i++){
 *  const sprite:IDisplayObject = DisplayObject.createFromTexture(texture);
 *  sprite.x = Math.round( Math.random() * 1024 );
 *  sprite.y = Math.round( Math.random() * 1024 );
 *  // add the new DisplayObject to the container
 *  container.addChild(sprite);
 * }
 *
 * // All the container's transformations will be added to its children
 * container.rotation = Math.round( Math.random() * 360 );
 *
 * // Defines renderer's canvas width & height
 * stage.getRenderer().getCanvas().width = stage.width = 1024;
 * stage.getRenderer().getCanvas().height = stage.height = 1024;
 *
 * // If you want to see all the DisplayObject's inside the container's display list
 * // then you have to add the container itself into the stage's display list.
 * // you have to add it on stage children list.
 * stage.addChild(container);
 *
 * // Now process the next frame
 * stage.nextFrame();
 *
 * // Add the canvas to the HTML document.
 * document.body.appendChild(stage.getRenderer().getCanvas());
 * ```
 */
class DisplayObjectContainer extends DisplayObject_1.default {
    constructor() {
        super(...arguments);
        this._children = [];
    }
    addChild(child) {
        if (this.contains(child))
            this.removeChild(child);
        this._children.push(child);
        child.parent = this;
    }
    removeChild(child) {
        const pos = this.getChildIndex(child);
        return this.removeChildAt(pos);
    }
    addChildAt(child, index) {
        if (this.contains(child))
            this.removeChild(child);
        const before = this._children.splice(0, index);
        child.parent = this;
        this._children = [...before, child, ...this._children];
    }
    removeChildAt(index) {
        const child = this._children[index] || null;
        if (child === null)
            throw new Error("out of bound index for removeChildAt");
        this._children.splice(index, 1);
        child.parent = null;
        return child;
    }
    getChildren() {
        return this._children;
    }
    getChildIndex(child) {
        return this._children.indexOf(child);
    }
    contains(child) {
        return child.parent === this && this.getChildIndex(child) > -1;
    }
    removeChildren() {
        while (this._children.length > 0) {
            this.removeChildAt(0);
        }
    }
    update(worldMatrix, worldOpacity) {
        super.update(worldMatrix, worldOpacity);
        this._children.forEach((child) => {
            child.update(this.worldMatrix, this.worldOpacity);
        });
    }
    render(renderer) {
        super.render(renderer);
        if (!this.visible)
            return;
        this._children.forEach((child) => {
            child.render(renderer);
        });
    }
}
exports.default = DisplayObjectContainer;
