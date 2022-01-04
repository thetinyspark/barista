import CanvasUtils from "../utils/CanvasUtils";
import IDisplayObject from "../display/IDisplayObject";
import IDisplayObjectContainer from "../display/IDisplayObjectContainer";

/**
 * Says wether or not the object passed in param is a DisplayObjectContainer.
 * @param value IDisplayObject|IDisplayObjectContainer
 * @returns boolean
 */
export function isDisplayObjectContainer(value: IDisplayObject | IDisplayObjectContainer): value is IDisplayObjectContainer {
    return (value as IDisplayObjectContainer).getChildren !== undefined;
}

/**
 * Says wether or not webGL is available
 * @returns boolean
 */
export function isWebGLAvailable():boolean{
    const canvas = CanvasUtils.create();
    const context = canvas.getContext("webgl");
    return context !== null;
}