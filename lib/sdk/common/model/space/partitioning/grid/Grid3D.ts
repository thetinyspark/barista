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

    for (let i: number = 0; i < rows; i++) {
      const col = [];
      this._map.push(col);

      for (let j: number = 0; j < cols; j++) {
        const layer: T | null[] = [];
        col.push(layer);

        for (let k = 0; k < layers; k++) {
          layer.push(null);
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

    return this._map[row][col][layer];
  }

  public addAt(row: number, col: number, layer: number, value: T): void {
    if (this.isOutOfBounds(row, col, layer)) return;

    this._map[row][col][layer] = value;
  }

  public removeAt(row: number, col: number, layer: number): void {
    if (this.isOutOfBounds(row, col, layer)) return;

    this._map[row][col][layer] = null;
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

  public forEach(func: Function): void {
    for (let i: number = 0; i < this.numRows; i++) {
      for (let j: number = 0; j < this.numCols; j++) {
        for (let k: number = 0; k < this.numLayers; k++) {
            func(this._map[i][j][k], i, j, k);
        }
      }
    }
  }

  public get numLayers(): number {
    return this._numLayers;
  }
  public get numCols(): number {
    return this._numRows;
  }
  public get numRows(): number {
    return this._numCols;
  }
}
