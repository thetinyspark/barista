import { mat2d } from "gl-matrix";
import IRenderer from "../rendering/IRenderer";
import DisplayObject from "./DisplayObject";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
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
export default class DisplayObjectContainer extends DisplayObject implements IDisplayObjectContainer {
    private _children;
    addChild(child: IDisplayObject): void;
    removeChild(child: IDisplayObject): IDisplayObject;
    addChildAt(child: IDisplayObject, index: number): void;
    removeChildAt(index: number): IDisplayObject;
    getChildren(): IDisplayObject[];
    getChildByName(name: string): IDisplayObject;
    getAllNestedChildrenIterative(): IDisplayObject[];
    getAllNestedChildren(collection?: IDisplayObject[]): IDisplayObject[];
    getChildIndex(child: IDisplayObject): number;
    contains(child: IDisplayObject): boolean;
    removeChildren(): void;
    update(worldMatrix: mat2d, worldOpacity: number): void;
    render(renderer: IRenderer): void;
}
