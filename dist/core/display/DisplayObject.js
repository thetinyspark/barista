"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const tiny_observer_1 = require("@thetinyspark/tiny-observer");
const Canvas2DRenderer_1 = require("../rendering/canvas/Canvas2DRenderer");
const utils_1 = require("../utils");
/**
 * The DisplayObject class is the base class for all objects that can be placed on the display list.
 * It supports basic functionality like the x and y position of an object, as well as more advanced
 * properties of the object such as its transformation matrix.
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
 * // Get the image
 * const img:HTMLImageElement = document.getElementById("my_img_id") as HTMLImageElement;
 *
 * // Create stage instance
 * const stage:Stage = new Stage();
 *
 * // Then, create a texture from the img
 * const texture:Texture = Texture.createFromSource("id",img);
 *
 * // And now, you can create a DisplayObject from the Texture
 * const sprite:IDisplayObject = DisplayObject.createFromTexture(texture);
 *
 * // Defines renderer's canvas width & height
 * stage.getRenderer().getCanvas().width = stage.width = 1024;
 * stage.getRenderer().getCanvas().height = stage.height = 1024;
 *
 * // If you want to see DisplayObject on the scene (stage),
 * // you have to add it on stage children list.
 * stage.addChild(sprite);
 *
 * // Now process the next frame
 * stage.nextFrame();
 *
 * // Add the canvas to the HTML document.
 * document.body.appendChild(stage.getRenderer().getCanvas());
 * ```
 */
class DisplayObject extends tiny_observer_1.Emitter {
    filters = [];
    texture = null;
    worldMatrix = gl_matrix_1.mat2d.create();
    matrix = gl_matrix_1.mat2d.create();
    x = 0;
    y = 0;
    opacity = 1;
    worldOpacity = 1;
    scaleX = 1;
    scaleY = 1;
    rotation = 0;
    width = 0;
    height = 0;
    transformOrigin = { x: 0, y: 0 };
    parent = null;
    visible = true;
    name = '';
    mouseEventsEnabled = true;
    snapshot() {
        const renderer = new Canvas2DRenderer_1.default();
        const saveMatrix = this.matrix;
        const saveWMatrix = this.worldMatrix;
        const canvas = renderer.getCanvas();
        const context = renderer.getContext();
        gl_matrix_1.mat2d.identity(this.matrix);
        gl_matrix_1.mat2d.identity(this.worldMatrix);
        canvas.width = this.width;
        canvas.height = this.height;
        renderer.add(this);
        renderer.draw(canvas, context);
        this.matrix = saveMatrix;
        this.worldMatrix = saveWMatrix;
        return renderer.getCanvas();
    }
    update(worldMatrix, worldOpacity = 1) {
        utils_1.Geometry.updateTransform(worldMatrix, this);
        if (this.opacity > 1)
            this.opacity = 1;
        if (this.opacity < 0)
            this.opacity = 0;
        this.worldOpacity = worldOpacity * this.opacity;
    }
    render(renderer) {
        if (this.visible)
            renderer.add(this);
    }
    /**
     * Creates and returns a Display Object from a Texture object.
     * The resulting object will have the same width and height
     * as the "sx" and "sy" properties of the Texture object.
     * The "texture" property will contains the Texture object.
     **/
    static createFromTexture(texture) {
        const disp = new DisplayObject();
        disp.width = texture.sw;
        disp.height = texture.sh;
        disp.texture = texture;
        return disp;
    }
}
exports.default = DisplayObject;
