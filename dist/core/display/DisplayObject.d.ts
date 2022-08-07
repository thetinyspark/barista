import { mat2d } from "gl-matrix";
import { Emitter } from "@thetinyspark/tiny-observer";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
import IFilter from "../filters/IFilter";
import { Point } from "../..";
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
export default class DisplayObject extends Emitter implements IDisplayObject {
    filters: IFilter[];
    texture: Texture | null;
    worldMatrix: mat2d;
    matrix: mat2d;
    offsetX: number;
    offsetY: number;
    x: number;
    y: number;
    opacity: number;
    worldOpacity: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    width: number;
    height: number;
    transformOrigin: Point;
    parent: IDisplayObjectContainer | null;
    visible: boolean;
    name: string;
    mouseEventsEnabled: boolean;
    snapshot(): HTMLCanvasElement;
    update(worldMatrix: mat2d, worldOpacity?: number): void;
    render(renderer: IRenderer): void;
    /**
     * Creates and returns a Display Object from a Texture object.
     * The resulting object will have the same width and height
     * as the "sx" and "sy" properties of the Texture object.
     * The "texture" property will contains the Texture object.
     **/
    static createFromTexture(texture: Texture): IDisplayObject;
}
