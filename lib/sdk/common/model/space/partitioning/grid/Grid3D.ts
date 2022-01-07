export default class Grid3D<T> {
  protected _map: Array<Array<Array<T | null>>> = [];
  private _numRows: number = 0;
  private _numCols: number = 0;
  private _numLayers: number = 0;

  constructor() {}

  public reset(rows: number, cols: number, layers: number): void {
    this._numRows = rows;
    this._numCols = cols;
    this._numLayers = layers;

    this._map = [];

    for (let k: number = 0; k < layers; k++) {
      const layer = [];
      this._map.push(layer);

      for (let i: number = 0; i < rows; i++) {
        const row = [];
        layer.push(row);

        for (let j = 0; j < cols; j++) {
          row.push(null);
        }
      }
    }
  }

  public destroy(): void {
    this._map = [];
    this._numRows = 0;
    this._numCols = 0;
    this._numLayers = 0;
  }

  public getAt(row: number, col: number, layer: number): T | null {
    if (this.isOutOfBounds(row, col, layer)) return null;

    return this._map[layer][row][col];
  }

  public addAt(row: number, col: number, layer: number, value: T): void {
    if (this.isOutOfBounds(row, col, layer)) return;

    this._map[layer][row][col] = value;
  }

  public removeAt(row: number, col: number, layer: number): void {
    if (this.isOutOfBounds(row, col, layer)) return;

    this._map[layer][row][col] = null;
  }

  public isOutOfBounds(row: number, col: number, layer: number): boolean {
    return (
      row > this.numRows - 1 ||
      col > this.numCols - 1 ||
      layer > this.numLayers - 1 ||
      layer < 0 ||
      row < 0 ||
      col < 0
    );
  }

  public forEach(func: (value:T, row:number,col:number,layer:number)=>void): void {

    for (let k: number = 0; k < this.numLayers; k++) {
      for (let i: number = 0; i < this.numRows; i++) {
        for (let j: number = 0; j < this.numCols; j++) {
            func(this._map[k][i][j], i, j, k);
        }
      }
    }
  }

  public getNeighbours(row:number, col:number, layer:number): {
    topLeftFront:T, 
    topFront:T, 
    topRightFront:T, 
    leftFront:T, 
    centerFront:T, 
    rightFront:T, 
    bottomLeftFront:T, 
    bottomFront:T, 
    bottomRightFront:T,

    topLeftBack:T, 
    topBack:T, 
    topRightBack:T, 
    leftBack:T, 
    centerBack:T, 
    rightBack:T, 
    bottomLeftBack:T, 
    bottomBack:T, 
    bottomRightBack:T

    topLeft:T, 
    top:T, 
    topRight:T, 
    left:T, 
    center:T, 
    right:T, 
    bottomLeft:T, 
    bottom:T, 
    bottomRight:T
  }{
    return {
      topLeftFront: this.getTopLeftFront(row,col,layer),
      topFront: this.getTopFront(row,col,layer),
      topRightFront: this.getTopRightFront(row,col,layer),
      leftFront: this.getLeftFront(row,col,layer),
      centerFront: this.getFront(row,col, layer),
      rightFront: this.getRightFront(row,col,layer),
      bottomLeftFront: this.getBottomLeftFront(row,col,layer),
      bottomFront: this.getBottomFront(row,col,layer),
      bottomRightFront: this.getBottomRightFront(row,col,layer),

      topLeftBack: this.getTopLeftBack(row,col,layer),
      topBack: this.getTopBack(row,col,layer),
      topRightBack: this.getTopRightBack(row,col,layer),
      leftBack: this.getLeftBack(row,col,layer),
      centerBack: this.getBack(row,col, layer),
      rightBack: this.getRightBack(row,col,layer),
      bottomLeftBack: this.getBottomLeftBack(row,col,layer),
      bottomBack: this.getBottomBack(row,col,layer),
      bottomRightBack: this.getBottomRightBack(row,col,layer),

      topLeft: this.getTopLeft(row,col,layer),
      top: this.getTop(row,col,layer),
      topRight: this.getTopRight(row,col,layer),
      left: this.getLeft(row,col,layer),
      center: this.getAt(row,col, layer),
      right: this.getRight(row,col,layer),
      bottomLeft: this.getBottomLeft(row,col,layer),
      bottom: this.getBottom(row,col,layer),
      bottomRight: this.getBottomRight(row,col,layer),
    };
  }

  public getLeftFront(row:number, col:number,layer:number):T{
    return this.getAt(row, col-1,layer-1);
  }

  public getRightFront(row:number, col:number,layer:number):T{
    return this.getAt(row, col+1,layer-1);
  }

  public getBottomFront(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col,layer-1);
  }

  public getBottomLeftFront(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col-1,layer-1);
  }

  public getBottomRightFront(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col+1,layer-1);
  }

  public getTopFront(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col,layer-1);
  }

  public getTopLeftFront(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col-1,layer-1);
  }

  public getTopRightFront(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col+1,layer-1);
  }

  public getFront(row:number, col:number,layer:number):T{
    return this.getAt(row,col,layer-1);
  }

  public getBack(row:number, col:number,layer:number):T{
    return this.getAt(row,col,layer+1);
  }

  public getLeftBack(row:number, col:number,layer:number):T{
    return this.getAt(row, col-1,layer+1);
  }

  public getRightBack(row:number, col:number,layer:number):T{
    return this.getAt(row, col+1,layer+1);
  }

  public getBottomBack(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col,layer+1);
  }

  public getBottomLeftBack(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col-1,layer+1);
  }

  public getBottomRightBack(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col+1,layer+1);
  }

  public getTopBack(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col,layer+1);
  }

  public getTopLeftBack(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col-1,layer+1);
  }

  public getTopRightBack(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col+1,layer+1);
  }

  public getLeft(row:number, col:number,layer:number):T{
    return this.getAt(row, col-1,layer);
  }

  public getRight(row:number, col:number,layer:number):T{
    return this.getAt(row, col+1,layer);
  }

  public getBottom(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col,layer);
  }

  public getBottomLeft(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col-1,layer);
  }

  public getBottomRight(row:number, col:number,layer:number):T{
    return this.getAt(row+1,col+1,layer);
  }

  public getTop(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col,layer);
  }

  public getTopLeft(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col-1,layer);
  }

  public getTopRight(row:number, col:number,layer:number):T{
    return this.getAt(row-1,col+1,layer);
  }


  public get numLayers(): number {
    return this._numLayers;
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
}
