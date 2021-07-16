import { mat2d } from "gl-matrix";
import IEmitter from "../event/IEmitter";
import IRenderer from "../rendering/IRenderer";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
export default interface IDisplayObject extends IEmitter {
    render(renderer: IRenderer): void;
    updateMatrix(worldMatrix: mat2d | null): void;
    texture: HTMLImageElement | HTMLCanvasElement | null;
    parent: IDisplayObjectContainer | null;
    matrix: mat2d;
    worldMatrix: mat2d;
    scaleX: number;
    scaleY: number;
    rotation: number;
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;
}
