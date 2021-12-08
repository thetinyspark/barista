import { mat2d } from "gl-matrix";
import { Emitter } from "@thetinyspark/tiny-observer";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
import IFilter from "../filters/IFilter";
import { Point } from "..";
export default class DisplayObject extends Emitter implements IDisplayObject {
    filters: IFilter[];
    texture: Texture | null;
    worldMatrix: mat2d;
    matrix: mat2d;
    x: number;
    y: number;
    opacity: number;
    worldOpacity: number;
    scaleX: number;
    scaleY: number;
    rotation: number;
    width: number;
    height: number;
    transformOrigin: Point;
    parent: IDisplayObjectContainer | null;
    snapshot(): HTMLCanvasElement;
    update(worldMatrix: mat2d, worldOpacity?: number): void;
    render(renderer: IRenderer): void;
}
