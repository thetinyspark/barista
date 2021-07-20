import { mat2d } from "gl-matrix";
import Emitter from "../event/Emitter";
import IRenderer from "../rendering/IRenderer";
import Texture from "../texture/Texture";
import IDisplayObject from "./IDisplayObject";
import IDisplayObjectContainer from "./IDisplayObjectContainer";
export default class DisplayObject extends Emitter implements IDisplayObject {
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
    parent: IDisplayObjectContainer | null;
    update(worldMatrix: mat2d, worldOpacity?: number): void;
    render(renderer: IRenderer): void;
}
