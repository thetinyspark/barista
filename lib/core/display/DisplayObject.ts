import { mat2d } from "gl-matrix";
import { Emitter } from "@thetinyspark/tiny-observer";
import Canvas2DRenderer from "../rendering/canvas/Canvas2DRenderer";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
import IFilter from "../filters/IFilter";
import { Point } from "../..";
import { Geometry } from "../utils";
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
  public filters: IFilter[] = [];
  public texture: Texture | null = null;
  public worldMatrix: mat2d = mat2d.create();
  public matrix: mat2d = mat2d.create();
  public offsetX:number = 0; 
  public offsetY:number = 0; 
  public x: number = 0;
  public y: number = 0;
  public opacity: number = 1;
  public worldOpacity: number = 1;
  public scaleX: number = 1;
  public scaleY: number = 1;
  public rotation: number = 0;
  public width: number = 0;
  public height: number = 0;
  public transformOrigin: Point = { x: 0, y: 0 };
  public parent: IDisplayObjectContainer | null = null;
  public visible:boolean = true;
  public name:string = '';
  public mouseEventsEnabled: boolean = true;

  public snapshot(): HTMLCanvasElement {
    const renderer = new Canvas2DRenderer();
    const saveMatrix = this.matrix;
    const saveWMatrix = this.worldMatrix;
    const canvas = renderer.getCanvas();
    const context = renderer.getContext() as CanvasRenderingContext2D;

    mat2d.identity(this.matrix);
    mat2d.identity(this.worldMatrix);

    canvas.width = this.width;
    canvas.height = this.height;

    renderer.add(this);
    renderer.draw(canvas, context);

    this.matrix = saveMatrix;
    this.worldMatrix = saveWMatrix;
    return renderer.getCanvas();
  }

  public update(worldMatrix: mat2d, worldOpacity: number = 1): void {
    Geometry.updateTransform(worldMatrix, this);
    if (this.opacity > 1) this.opacity = 1;
    if (this.opacity < 0) this.opacity = 0;
    this.worldOpacity = worldOpacity * this.opacity;
  }

  public render(renderer: IRenderer): void {
    if(this.visible)
      renderer.add(this);
  }

  /**
   * Creates and returns a Display Object from a Texture object.
   * The resulting object will have the same width and height
   * as the "sx" and "sy" properties of the Texture object.
   * The "texture" property will contains the Texture object.
   **/
  public static createFromTexture(texture: Texture): IDisplayObject {
    const disp = new DisplayObject();
    disp.width = texture.sw;
    disp.height = texture.sh;
    disp.texture = texture;
    return disp;
  }
}
