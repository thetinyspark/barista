import { Emitter } from "@thetinyspark/tiny-observer";
export default class AssetsManager extends Emitter {
    private uris;
    private data;
    private list;
    constructor();
    getAll(): Map<string, any>;
    queue(uri: string, type: string, alias: string): void;
    getQueue(): any[];
    freeQueue(): void;
    loadQueue(): Promise<any[]>;
    getUris(): any;
    getUri(alias: string): string;
    get(alias: string): any;
    load(uri: string, type: string, alias: string): Promise<any>;
    set(data: any, alias: string, uri?: string): void;
    delete(alias: string): boolean;
    destroy(): void;
    private _errorHandler;
    private _loadBlob;
    static blobToSound(data: Blob): Promise<HTMLAudioElement>;
    static blobToJSON(data: Blob): Promise<any>;
    static blobToImage(data: Blob): Promise<HTMLImageElement>;
    static blobToVideo(data: Blob): Promise<HTMLVideoElement>;
}
export declare const LOAD_ERROR: string;
export declare const LOAD_SUCCESS: string;
export declare const IMAGE_TYPE: string;
export declare const VIDEO_TYPE: string;
export declare const SOUND_TYPE: string;
export declare const JSON_TYPE: string;
export declare const BLOB_TYPE: string;
