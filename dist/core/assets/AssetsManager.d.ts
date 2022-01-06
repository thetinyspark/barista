import { Emitter } from "@thetinyspark/tiny-observer";
/**
 * An AssetsManager is used to load,retrieve,transform assets.
 * You can load assets one by one or massively with queue.
 */
export default class AssetsManager extends Emitter {
    private uris;
    private data;
    private list;
    constructor();
    /**
     * Returns all loaded data
     * @returns Map<string,any> loaded datas
     */
    getAll(): Map<string, any>;
    /**
     * Pushes a new assets to load on the queue
     * @param uri string the asset's uri
     * @param type string the asset's type
     * @param alias string the asset's alias
     */
    queue(uri: string, type: string, alias: string): void;
    /**
     * Returns the current queue
     * @returns any[] the current queue
     */
    getQueue(): any[];
    /**
     * Free the current queue
     */
    freeQueue(): void;
    /**
     * Loads the queue and return a Promise<any[]> when any[] represents all the loaded data
     * @returns Promise<any[]>
     */
    loadQueue(): Promise<any[]>;
    /**
     * Returns all the uris of all the loaded data associated to the corresponding aliases
     * @returns any
     */
    getUris(): any;
    /**
     * Returns the current uri of the loaded data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns string
     */
    getUri(alias: string): string;
    /**
     * Returns the data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns any
     */
    get(alias: string): any;
    /**
     * Loads an assets and return a Promise<any> where any represents the loaded data.
     * @param uri string the asset's uri you want to load
     * @param type string the asset's type
     * @param alias string the asset's alias
     * @returns Promise<any>
     */
    load(uri: string, type: string, alias: string): Promise<any>;
    /**
     * Sets a specific data and associate it with an alias and an uri
     * @param data any the specific data
     * @param alias string the specific data's alias
     * @param uri string the specific data's uri
     */
    set(data: any, alias: string, uri?: string): void;
    /**
     * Delete the data associated to a specific alias and returns boolean if it has been well deleted
     * @param alias string the loaded data alias
     * @returns boolean
     */
    delete(alias: string): boolean;
    /**
     * Clear all loaded datas
     */
    destroy(): void;
    private _errorHandler;
    private _loadBlob;
    /**
     * Converts a Blob into an HTMLAudioElement.
     * @param data Blob
     * @returns Promise<HTMLAudioElement>
     */
    static blobToSound(data: Blob): Promise<HTMLAudioElement>;
    /**
     * Converts a Blob into an JSON Object .
     * @param data Blob
     * @returns Promise<any>
     */
    static blobToJSON(data: Blob): Promise<any>;
    /**
     * Converts a Blob into an Image Object .
     * @param data Blob
     * @returns Promise<HTMLImageElement>
     */
    static blobToImage(data: Blob): Promise<HTMLImageElement>;
    /**
     * Converts a Blob into an HTMLVideoElement Object .
     * @param data Blob
     * @returns Promise<HTMLVideoElement>
     */
    static blobToVideo(data: Blob): Promise<HTMLVideoElement>;
}
export declare const LOAD_ERROR: string;
export declare const LOAD_SUCCESS: string;
export declare const IMAGE_TYPE: string;
export declare const VIDEO_TYPE: string;
export declare const SOUND_TYPE: string;
export declare const JSON_TYPE: string;
export declare const BLOB_TYPE: string;
