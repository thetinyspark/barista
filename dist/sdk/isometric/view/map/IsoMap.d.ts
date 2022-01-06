import DisplayObjectContainer from "../../../../core/display/DisplayObjectContainer";
import IRenderer from "../../../../core/rendering/IRenderer";
export default class IsoMap extends DisplayObjectContainer {
    sortAuto: boolean;
    sort(): void;
    render(renderer: IRenderer): void;
}
