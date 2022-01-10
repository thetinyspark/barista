export default class Grid2D<T> {
  private _map: T[][] | null[][] = [];
  private _numRows: number = 0;
  private _numCols: number = 0;

  constructor() {}

  public reset(rows: number, cols: number): void {
    this._numRows = rows;
    this._numCols = cols;

    this._map = [];

    for (let i: number = 0; i < rows; i++) {
      const col: T | null[] = [];
      for (let j: number = 0; j < cols; j++) {
        col.push(null);
      }
      this._map.push(col);
    }
  }

  public destroy(): void {
    this._map = [];
    this._numRows = 0;
    this._numCols = 0;
  }

  public getNeighbours(row:number, col:number): {topLeft:T, top:T, topRight:T, left:T, center:T, right:T, bottomLeft:T, bottom:T, bottomRight:T}{
    return {
        topLeft: this.getTopLeft(row,col),
        top: this.getTop(row,col),
        topRight: this.getTopRight(row,col),
        left: this.getLeft(row,col),
        center: this.getAt(row,col),
        right: this.getRight(row,col),
        bottomLeft: this.getBottomLeft(row,col),
        bottom: this.getBottom(row,col),
        bottomRight: this.getBottomRight(row,col),
    };
  }

  public getLeft(row:number, col:number):T{
    return this.getAt(row, col-1);
  }

  public getRight(row:number, col:number):T{
    return this.getAt(row, col+1);
  }

  public getBottom(row:number, col:number):T{
    return this.getAt(row+1,col);
  }

  public getBottomLeft(row:number, col:number):T{
    return this.getAt(row+1,col-1);
  }

  public getBottomRight(row:number, col:number):T{
    return this.getAt(row+1,col+1);
  }

  public getTop(row:number, col:number):T{
    return this.getAt(row-1,col);
  }

  public getTopLeft(row:number, col:number):T{
    return this.getAt(row-1,col-1);
  }

  public getTopRight(row:number, col:number):T{
    return this.getAt(row-1,col+1);
  }

  public getAt(row: number, col: number): T | null {
    if (this.isOutOfBounds(row, col)) return null;

    return this._map[row][col];
  }

  public addAt(row: number, col: number, value: T): void {
    if (this.isOutOfBounds(row, col)) return;

    this._map[row][col] = value;
  }

  public removeAt(row: number, col: number): void {
    if (this.isOutOfBounds(row, col)) return;

    this._map[row][col] = null;
  }

  public isOutOfBounds(row: number, col: number): boolean {
    return (
      row > this.numRows - 1 || col > this.numCols - 1 || row < 0 || col < 0
    );
  }

  public forEach(func: (value:T, row:number, col:number)=>void): void {
    for (let i: number = 0; i < this.numRows; i++) {
      for (let j: number = 0; j < this.numCols; j++) {
        func(this._map[i][j], i, j);
      }
    }
  }

  public map<U>(func: (value:T, row:number, col:number)=>U):Grid2D<U>{
    const data:U[][] = [];

    for (let i: number = 0; i < this.numRows; i++) {
      data[i] = [];
      for (let j: number = 0; j < this.numCols; j++) {
        data[i][j] = func(this._map[i][j], i, j);
      }
    }

    return Grid2D.from<U>(data);
  }

  public extract( fromRow:number, toRow:number, fromCol:number, toCol:number ):Grid2D<T>{
    const data = []; 
    toRow = toRow > this.numRows - 1 ? this.numRows - 1 : toRow;
    toCol = toCol > this.numCols - 1 ? this.numCols - 1 : toCol;

    fromRow = fromRow < 0 ? 0 : fromRow;
    fromCol = fromCol < 0 ? 0 : fromCol;

    for (let i: number = fromRow; i <= toRow; i++) {
      const row = []
      for (let j: number = fromCol; j <= toCol; j++) {
        row.push(this.getAt(i,j));
      }
      data.push(row);
    }
      
  
    return Grid2D.from(data);
  }

  public get numCols(): number {
    return this._numCols;
  }

  public get numRows(): number {
    return this._numRows;
  }

  public get data(){
    return this._map;
  }

  public static from<T>(data:T[][]):Grid2D<T>{
    const grid = new Grid2D<T>();
    const rows = data.length; 
    const cols = data[0]?.length || 0;
    grid.reset(rows, cols);
    for (let i: number = 0; i < rows; i++) {
      for (let j: number = 0; j < cols; j++) {
        grid.addAt(i,j,data[i][j]);
      }
    }

    return grid;
  }
}
