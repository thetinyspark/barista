import IsoNode from "../model/node/IsoNode";
export declare type Constructable<T> = new (...args: any[]) => T;
export interface Isometric {
    isoNode: IsoNode | null;
    syncWithNode(): void;
}
export default function makeIsometric<T extends Constructable<any>>(userClass: T): {
    new (...args: any[]): {
        [x: string]: any;
        isoNode: IsoNode;
        syncWithNode(): void;
    };
} & T;
