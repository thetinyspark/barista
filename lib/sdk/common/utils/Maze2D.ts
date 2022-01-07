import { Grid2D } from "../model/space/partitioning/grid";
import { GameNode } from "../model/node";

export default class Maze2D{

    private _grid:Grid2D<GameNode> = null;
    private _pathCoords:number[][];
    private _currentRow:number = 0;
    private _currentCol:number = 0;

    public reset(rows:number, cols:number, startRow:number, startCol:number):void{
        this._pathCoords = [];
        this._grid = new Grid2D();
        this._grid.reset(rows, cols);

        this._currentRow = startRow;
        this._currentCol = startCol;

        this._grid.forEach( 
            (value:GameNode, row:number, col:number)=>{
                const node = new GameNode();
                node.state.type = (row % 2 == 0 || col % 2 == 0) ? MazeNodeType.WALL : MazeNodeType.BLOCK;
                this._grid.addAt( row, col, node);
            }
        );
    }

    public getRows():number{
        return this._grid.numRows;
    }

    public getCols():number{
        return this._grid.numCols;
    }

    public getCurrentNode():GameNode{
        return this._grid.getAt(this._currentRow, this._currentCol);
    }

    public getData():GameNode[][]{
        return this._grid.data;
    }

    public isFinished():boolean{
        return this._currentRow === null && this._currentCol === null;
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

            
        // on passe notre case courante à FREE (libre)
        grid.getAt(row,col).state.type = MazeNodeType.FREE;

        // on récupère tous les voisins et les murs qui nous en séparent
        const neighbours = [
            {
                wall: this._grid.getLeft(row, col), 
                target: this._grid.getLeft(row, col-1), 
                row: row, 
                col: col-2
            },
            {
                wall: this._grid.getRight(row, col), 
                target: this._grid.getRight(row, col+1), 
                row: row, 
                col: col+2
            },
            {
                wall: this._grid.getTop(row, col), 
                target: this._grid.getTop(row-1, col), 
                row: row-2, 
                col: col
            },
            {
                wall: this._grid.getBottom(row, col), 
                target: this._grid.getBottom(row+1, col), 
                row: row+2, 
                col: col
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
            path.push([row, col]);
    
            // on spécifie notre prochain point de départ
            this._currentRow = current.row;
            this._currentCol = current.col;
        }
        else if(path.length > 0 ){
            // si aucune case adjacente n'est intéréssante, alors on remonte le chemin
            // à rebours et on tente de "creuser" à partir d'une des cases précédentes
            // on retire le dernier élément du chemin
            let coords = path.pop();

            // on spécifie notre prochain point de départ
            this._currentRow = coords[0];
            this._currentCol = coords[1];
        }
        else{    
            // C'est fini
            this._currentRow = null;
            this._currentCol = null;
        }
    }
}

export enum MazeNodeType{
    WALL = "WALL", 
    FREE = "FREE",
    BLOCK = "BLOCK"
}