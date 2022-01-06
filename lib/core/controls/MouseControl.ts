import IDisplayObjectContainer from "../display/IDisplayObjectContainer";
import IDisplayObject from "../display/IDisplayObject";
import Stage from "../display/Stage";
import Geometry from "../utils/Geometry";
import { isDisplayObjectContainer } from "../utils/isser";
/**
 * A MouseControl object is used to monitor mouse events which happened on the scene's canvas.
 * It will map native events to custom events. 
 * It will also remap the original events coordinates into the scene's coordinate system.
 * And finally, it can detect which DisplayObject is targeted by the event. 
 */
export default class MouseControl{
    private _stage:Stage; 

    constructor(stage:Stage){
        this._stage = stage;
    }

    /**
     * Starts stage monitoring
     */
    public activate():void{
        this.deactivate();
        this._stage.getCanvas().addEventListener("click", this._handler );
        this._stage.getCanvas().addEventListener("mouseup", this._handler );
        this._stage.getCanvas().addEventListener("mousedown", this._handler );
        this._stage.getCanvas().addEventListener("mousemove", this._handler );
    }

    /**
     * Stops stage monitoring
     */
    public deactivate():void{
        this._stage.getCanvas().removeEventListener("click", this._handler );
        this._stage.getCanvas().removeEventListener("mouseup", this._handler );
        this._stage.getCanvas().removeEventListener("mousedown", this._handler );
        this._stage.getCanvas().removeEventListener("mousemove", this._handler );
    }

    private _handler = (e:MouseEvent)=>{
        const canvas = this._stage.getCanvas(); 
        const bounds = canvas.getBoundingClientRect();
        const x:number = ( e.clientX - bounds.x ) >> 0;
        const y:number = ( e.clientY - bounds.y ) >> 0;
        


        switch( e.type ){
            case "click": this.dispatchAt(x,y,MouseControlEvent.MOUSE_CONTROL_CLICK); break;
            case "mouseup":this.dispatchAt(x,y,MouseControlEvent.MOUSE_CONTROL_UP); break;
            case "mousedown": this.dispatchAt(x,y,MouseControlEvent.MOUSE_CONTROL_DOWN); break;
            case "mousemove": this.dispatchAt(x,y,MouseControlEvent.MOUSE_CONTROL_MOVE); break;
        }
        
    }

    private _getObjectUnderPointRecursive(x:number, y:number, container:IDisplayObjectContainer):IDisplayObject|null{
        const children:IDisplayObject[] = container.getChildren(); 
        let i:number = children.length; 
        while( --i > -1 ){
            const current = children[i]; 
            if( isDisplayObjectContainer(current )){
                const result = this._getObjectUnderPointRecursive(x, y, current); 
                if( result !== null )
                    return result;
            }
            else{
                const result = Geometry.collide(x, y, current); 
                if( result )
                    return current;
            }
        }
        return null; 
    }

    /**
     * Generates a, event at a specific position on the Stage. 
     * It acts like a virtual mouse. 
     * @param x number The x position of the virtual mouse
     * @param y number The y position of the virtual mouse
     * @param type The virtual mouse event type
     */
    public dispatchAt(x:number, y:number, type:MouseControlEvent):void{
        const object = this._getObjectUnderPointRecursive(x,y, this._stage);
        const target:IDisplayObject = ( object === null ) ? this._stage : object;
        let current = target; 

        while( current !== null ){
            current.emit(type, {x:x, y:y, target:target} );
            current = current.parent;
        }
    }
    
}
export enum MouseControlEvent{
    MOUSE_CONTROL_CLICK = "MOUSE_CONTROL_CLICK",
    MOUSE_CONTROL_MOVE = "MOUSE_CONTROL_MOVE",
    MOUSE_CONTROL_UP = "MOUSE_CONTROL_UP",
    MOUSE_CONTROL_DOWN = "MOUSE_CONTROL_DOWN"
}