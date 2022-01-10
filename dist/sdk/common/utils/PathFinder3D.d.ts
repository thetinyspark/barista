import { Grid3D } from "../model/space/partitioning/grid";
import { GameNode } from "../model/node";
export default class PathFinder3D {
    private opened;
    private closed;
    createGraphe(grid: Grid3D<number>, walkableValue: number): Grid3D<GameNode>;
    resetGraphe(graphe: Grid3D<GameNode>): void;
    findPath(graphe: Grid3D<GameNode>, startNode: GameNode, endNode: GameNode, allowDiagonals?: boolean): GameNode[];
    private _addToCloseList;
    private _addToOpenList;
    private _isOnOpenList;
    private _isOnCloseList;
}
export declare const NODE_DISTANCE_VALUE = 10;
