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
                context.globalAlpha = context.globalAlpha * child.opacity;
                context.setTransform(matrix[0],matrix[1],matrix[2],matrix[3], matrix[4], matrix[5]);
                context.drawImage(child.texture, 0, 0, child.texture.width, child.texture.height, 0, 0, child.width, child.height);
                context.restore();
            }
        ); 
    }
    
}