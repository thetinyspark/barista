import IDisplayObject from "../display/IDisplayObject";
import IDisplayObjectContainer from "../display/IDisplayObjectContainer";
/**
 * Says wether or not the object passed in param is a DisplayObjectContainer.
 * @param value IDisplayObject|IDisplayObjectContainer
 * @returns boolean
 */
export declare function isDisplayObjectContainer(value: IDisplayObject | IDisplayObjectContainer): value is IDisplayObjectContainer;
/**
 * Says wether or not webGL is available
 * @returns boolean
 */
export declare function isWebGLAvailable(): boolean;
