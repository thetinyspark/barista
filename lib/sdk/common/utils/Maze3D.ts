import { Grid3D } from "../model/space/partitioning/grid";
import { GameNode } from "../model/node";
import MazeNodeType from "./MazeNodeType";

export default class Maze3D{

    private _grid:Grid3D<GameNode> = null;
    private _pathCoords:number[][];
    private _currentRow:number = 0;
    private _currentCol:number = 0;
    private _currentLayer:number = 0;

    public reset(rows:number, cols:number, depth:number, startRow:number, startCol:number, startLayer:number):void{
        this._pathCoords = [];
        this._grid = new Grid3D();
        this._grid.reset(rows, cols, depth);

        this._currentRow = startRow;
        this._currentCol = startCol;
        this._currentLayer = startLayer;

        this._grid.forEach( 
            (value:GameNode, row:number, col:number, layer:number)=>{
                const node = new GameNode();
                node.state.type = (row % 2 == 0 || col % 2 == 0 || layer % 2 == 0) ? MazeNodeType.WALL : MazeNodeType.BLOCK;
                this._grid.addAt( row, col, layer, node);
            }
        );
    }

    public getRows():number{
        return this._grid.numRows;
    }

    public getCols():number{
        return this._grid.numCols;
    }

    public getLayers():number{
        return this._grid.numLayers;
    }

    public getCurrentNode():GameNode{
        return this._grid.getAt(this._currentRow, this._currentCol, this._currentLayer);
    }

    public getData():GameNode[][][]{
        return this._grid.data;
    }

    public isFinished():boolean{
        return this._currentRow === null && this._currentCol === null && this._currentLayer === null;
    }

    public finalize(){
        while( !this.isFinished()){
            this.step();
        }
    }

    public step(){
        if( this.isFinished() )
            return; 

        const grid = this._grid;
        const path = this._pathCoords;
        const row = this._currentRow;
        const col = this._currentCol;
        const layer = this._currentLayer;

            
        // on passe notre case courante à FREE (libre)
        grid.getAt(row,col,layer).state.type = MazeNodeType.FREE;

        // on récupère tous les voisins et les murs qui nous en séparent
        const neighbours = [
            {   // left
                wall: this._grid.getAt(row,col-1, layer),
                target: this._grid.getAt(row,col-2, layer), 
                row: row, 
                col: col-2,
                layer: layer
            },
            {
                // right
                wall: this._grid.getAt(row,col+1, layer),
                target: this._grid.getAt(row,col+2, layer), 
                row: row, 
                col: col+2,
                layer: layer
            },
            {
                // top
                wall: this._grid.getAt(row-1,col, layer),
                target: this._grid.getAt(row-2,col, layer),
                row: row-2, 
                col: col,
                layer: layer
            },
            {
                // bottom
                wall: this._grid.getAt(row+1,col, layer),
                target: this._grid.getAt(row+2,col, layer),
                row: row+2, 
                col: col,
                layer: layer
            },
            {
                // front
                wall: this._grid.getAt(row,col, layer-1),
                target: this._grid.getAt(row,col, layer-2),
                row: row, 
                col: col,
                layer: layer-2
            },
            {
                // back
                wall: this._grid.getAt(row,col, layer+1),
                target: this._grid.getAt(row,col, layer+2),
                row: row, 
                col: col,
                layer: layer+2
            }
        ].filter(
            (value)=>{
                return value.wall !== null && value.target !== null && value.target.state.type === MazeNodeType.BLOCK;
            }
        );
    
        if( neighbours.length > 0 ){
            // on récupère un voisin au hasard
            const index = Math.round( Math.random() * (neighbours.length-1) )
            const current = neighbours[index];
    
            // alors on fait en sorte de passer le mur qui nous sépare du voisin à FREE
            current.wall.state.type = MazeNodeType.FREE

            // on passe notre voisin a FREE aussi
            current.target.state.type = MazeNodeType.FREE
    
            // on ajoute nos coordonnées de départ au chemin 
            // qui nous a mené jusqu'à la nouvelle case
            path.push([row, col, layer]);
    
            // on spécifie notre prochain point de départ
            this._currentRow = current.row;
            this._currentCol = current.col;
            this._currentLayer = current.layer;
        }
        else if(path.length > 0 ){
            // si aucune case adjacente n'est intéréssante, alors on remonte le chemin
            // à rebours et on tente de "creuser" à partir d'une des cases précédentes
            // on retire le dernier élément du chemin
            let coords = path.pop();

            // on spécifie notre prochain point de départ
            this._currentRow = coords[0];
            this._currentCol = coords[1];
            this._currentLayer = coords[2];
        }
        else{    
            // C'est fini
            this._currentRow = null;
            this._currentCol = null;
            this._currentLayer = null;
        }
    }
}