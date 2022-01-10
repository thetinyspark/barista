import { Grid2D } from "../../common/model/space/partitioning/grid";
import { GameNode } from "../model/node";
export default class PathFinder2D {
    private opened;
    private closed;
    createGraphe(grid: Grid2D<number>, walkableValue: number): Grid2D<GameNode>;
    resetGraphe(graphe: Grid2D<GameNode>): void;
    findPath(graphe: Grid2D<GameNode>, startNode: GameNode, endNode: GameNode, allowDiagonals?: boolean): GameNode[];
    private _addToCloseList;
    private _addToOpenList;
    private _isOnOpenList;
    private _isOnCloseList;
}
export declare const NODE_DISTANCE_VALUE = 10;
