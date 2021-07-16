export default class AssetsManager {
    private data;
    private list;
    constructor();
    getAll: () => Map<string, any>;
    queue: (uri: string, type: string, alias: string) => void;
    getQueue: () => any[];
    freeQueue: () => void;
    loadQueue: () => Promise<any[]>;
    get: (alias: string) => any;
    load: (uri: string, type: string, alias: string) => Promise<any>;
    set: (data: any, alias: string) => void;
    delete: (alias: string) => boolean;
    destroy: () => void;
    private loadJSON;
    private loadImage;
}
export declare const IMAGE_TYPE: string;
export declare const JSON_TYPE: string;
