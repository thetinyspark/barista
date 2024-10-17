import { mat2d } from "gl-matrix";
import IRenderer from "../rendering/IRenderer";
import { isDisplayObjectContainer } from "../utils";
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

    private _children:IDisplayObject[] = [];

    public addChild(child: IDisplayObject) {
        if( this.contains(child ))
            this.removeChild(child);

        this._children.push(child);
        child.parent = this;
    }

    public removeChild(child: IDisplayObject):IDisplayObject {
        const pos:number = this.getChildIndex(child);
        return this.removeChildAt(pos);
    }

    public addChildAt(child: IDisplayObject, index: number) {
        if( this.contains(child ))
            this.removeChild(child);

        const before = this._children.splice(0,index); 
        child.parent = this;
        this._children = [...before, child, ...this._children];
    }

    public removeChildAt(index: number):IDisplayObject {
        const child:IDisplayObject = this._children[index] || null;
        if( child === null )
            throw new Error("out of bound index for removeChildAt"); 

        this._children.splice(index, 1);
        child.parent = null;
        return child;
    }

    public getChildren(): IDisplayObject[] {
        return this._children;
    }

    public getChildByName(name:string): IDisplayObject {
        return this._children.find( c=>c.name === name) || null;
    }

    public getAllNestedChildrenIterative():IDisplayObject[]{
        let objects = []; 
        let stack:DisplayObjectContainer[] = [];
        stack.push(this);
        
        while( stack.length > 0 ){
            const container = stack.shift(); 
            const pos = objects.indexOf(container) + 1; 
            const after = objects.splice(pos);

            for( let i = 0; i < container._children.length; i++ ){
                const obj = container._children[i];
                objects.push(obj); 
                if((obj as IDisplayObjectContainer).getChildren !== undefined)
                    stack.push(obj as DisplayObjectContainer);
            }
            objects = objects.concat(after);
        }
        return objects;
    }

    public getAllNestedChildren(collection:IDisplayObject[] = []):IDisplayObject[]{
        for( let i = 0; i < this._children.length; i++ ){
            const object = this._children[i];
            collection.push(object);
            if((object as IDisplayObjectContainer).getChildren !== undefined)
                (object as DisplayObjectContainer).getAllNestedChildren(collection);
        }
        return collection;
    }

    public getChildIndex(child: IDisplayObject): number {
        return this._children.indexOf(child);
    }

    public contains(child: IDisplayObject): boolean {
        return child.parent === this && this.getChildIndex(child) > -1;
    }

    public removeChildren() {
        while( this._children.length > 0 ){
            this.removeChildAt(0);
        }
    }

    public update(worldMatrix:mat2d, worldOpacity:number):void{
        super.update(worldMatrix, worldOpacity);
        this._children.forEach(
            (child:IDisplayObject)=>{
                child.update(this.worldMatrix, this.worldOpacity);
            }
        );
    }

    public render(renderer:IRenderer):void{
        super.render(renderer); 
        if(!this.visible)
            return;

        this._children.forEach( 
            (child:IDisplayObject)=>{
                child.render(renderer);
            }
        ); 
    }
    
}