import IDisplayObject from "../display/IDisplayObject";
import IFilter from "./IFilter";
export default class PixelateFilter implements IFilter {
    private _save;
    scaleX: number;
    scaleY: number;
    save(child: IDisplayObject): void;
    apply(child: IDisplayObject): void;
    rollback(child: IDisplayObject): void;
}
