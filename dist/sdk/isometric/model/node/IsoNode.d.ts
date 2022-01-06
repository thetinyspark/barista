import GameNode from "../../../common/model/node/GameNode";
export default class IsoNode extends GameNode {
    isoX: number;
    isoY: number;
    isoZ: number;
    row: number;
    col: number;
    cellWidth: number;
    cellHeight: number;
    width: number;
    height: number;
    get offsetY(): number;
    get offsetX(): number;
    resetRowAndColFromCoordinates(): void;
    resetCoordinatesFromRowAndCol(): void;
}
