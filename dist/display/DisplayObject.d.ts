import { mat2d } from "gl-matrix";
import Emitter from "../event/Emitter";
import IRenderer from "../rendering/IRenderer";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
export default class DisplayObject extends Emitter implements IDisplayObject {
    texture: HTMLImageElement | HTMLCanvasElement | null;
    worldMatrix: mat2d;
    matrix: mat2d;
    x: number;
    y: number;
    opacity: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    width: number;
    height: number;
    parent: IDisplayObjectContainer | null;
    updateMatrix(worldMatrix?: mat2d | null): void;
    render(renderer: IRenderer): void;
}
