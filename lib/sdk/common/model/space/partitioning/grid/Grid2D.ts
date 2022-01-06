export default class Grid2D<T> {
  private _map: T | null[][] = [];
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

  public forEach(func: Function): void {
    for (let i: number = 0; i < this.numRows; i++) {
      for (let j: number = 0; j < this.numCols; j++) {
        func(this._map[i][j], i, j);
      }
    }
  }

  public get numCols(): number {
    return this._numRows;
  }
  public get numRows(): number {
    return this._numCols;
  }
}
