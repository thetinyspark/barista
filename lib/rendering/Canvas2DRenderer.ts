import IDisplayObject from "../display/IDisplayObject";
import IRenderer from "./IRenderer";

export default class Canvas2DRenderer implements IRenderer{
    private _children:IDisplayObject[] = []; 

    add(child: IDisplayObject): void {
        this._children.push(child);
    }

    getChildren(): IDisplayObject[] {
        return this._children;
    }

    clear(): void {
        this._children = []; 
    }
    
    draw(canvas:HTMLCanvasElement, context: CanvasRenderingContext2D): void {

        context.clearRect(0, 0, canvas.width, canvas.height); 

        this._children.forEach( 
            (child:IDisplayObject)=>{
                if( child.texture === null )
                    return; 

                const matrix = child.worldMatrix;
                context.save();
                context.globalAlpha = child.worldOpacity;
                context.setTransform(matrix[0],matrix[1],matrix[2],matrix[3], matrix[4], matrix[5]);
                context.drawImage(
                    child.texture.data, 
                    child.texture.sx, 
                    child.texture.sy, 
                    child.texture.sw, 
                    child.texture.sh, 
                    0, 
                    0, 
                    child.width, 
                    child.height
                );
                context.restore();
            }
        ); 
    }
    
}