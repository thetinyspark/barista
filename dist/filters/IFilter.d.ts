import IDisplayObject from "../display/IDisplayObject";
export default interface IFilter {
    save(child: IDisplayObject): void;
    apply(child: IDisplayObject): void;
    rollback(child: IDisplayObject): void;
}
