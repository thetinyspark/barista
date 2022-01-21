import IDisplayObject from "../display/IDisplayObject";
/**
 * The IRenderer interface defines the main functionnalities a renderer needs.
 */
export default interface IRenderer{
    /**
     * Adds an IDisplayObject to the rendering pipeline
     * @param child IDisplayObject
     */
    add(child:IDisplayObject):void;

    /**
     * Returns the current rendering pipeline
     * @returns IDisplayObject[]
     */
    getChildren():IDisplayObject[];

    /**
     * Clears the current rendering pipeline
     */
    clear():void;

    /**
     * The current rendering context
     * @returns CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext
     */
    getContext():CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext; 

    /**
     * The current renderer's canvas instance
     * @returns HTMLCanvasElement
     */
    getCanvas():HTMLCanvasElement;

    /**
     * Draws the current rendering pipeline (sets of IDisplayObjects) 
     * into the specified canvas, with the specified rendering context
     * @param canvas HTMLCanvasElement 
     * @param context CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext
     */
    draw(canvas:HTMLCanvasElement, context:CanvasRenderingContext2D|WebGLRenderingContext|WebGL2RenderingContext):void; 

    /**
     * Get the number of draw calls
     */
    getNumDrawCalls():number;
}