import { IEmitter } from "@thetinyspark/tiny-observer";
import { mat2d } from "gl-matrix";
import { Point } from "..";
import IFilter from "../filters/IFilter";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
export default interface IDisplayObject extends IEmitter {
    render(renderer: IRenderer): void;
    update(worldMatrix: mat2d, worldOpacity: number): void;
    filters: IFilter[];
    texture: Texture | null;
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
    worldOpacity: number;
    transformOrigin: Point;
    snapshot(): HTMLCanvasElement;
}
