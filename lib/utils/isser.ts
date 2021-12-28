import IDisplayObject from "../display/IDisplayObject";
import IDisplayObjectContainer from "../display/IDisplayObjectContainer";

export function isDisplayObjectContainer(value: IDisplayObject | IDisplayObjectContainer): value is IDisplayObjectContainer {
    return (value as IDisplayObjectContainer).getChildren !== undefined;
}

export function isWebGLAvailable():boolean{
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl");
    return context !== null;
}