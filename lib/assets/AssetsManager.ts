import {Emitter} from "@thetinyspark/tiny-observer";

/**
 * An AssetsManager is used to load,retrieve,transform assets.
 * You can load assets one by one or massively with queue.
 */
export default class AssetsManager extends Emitter{

    private uris:Map<string, string> = new Map<string,string>();
    private data: Map<string, any>;
    private list: any[];

    constructor() {
        super();
        this.data = new Map<string, any>();
        this.list = [];
    }

    /**
     * Returns all loaded data
     * @returns Map<string,any> loaded datas
     */
    public getAll(): Map<string, any>{
        return this.data;
    };

    /**
     * Pushes a new assets to load on the queue
     * @param uri string the asset's uri
     * @param type string the asset's type
     * @param alias string the asset's alias
     */
    public queue(uri: string, type: string = JSON_TYPE, alias: string):void{
        this.list.push({ uri, type, alias });
    };

    /**
     * Returns the current queue
     * @returns any[] the current queue
     */
    public getQueue(): any[]{
        return this.list;
    };

    /**
     * Free the current queue
     */
    public freeQueue():void{
        this.list = [];
    };

    /**
     * Loads the queue and return a Promise<any[]> when any[] represents all the loaded data
     * @returns Promise<any[]>
     */
    public loadQueue(): Promise<any[]>{
        return Promise.all(this.list.map(cur => this.load(cur.uri, cur.type, cur.alias))).then(
            (data: any[]) => {
                this.freeQueue();
                return data;
            }
        );
    };

    /**
     * Returns all the uris of all the loaded data associated to the corresponding aliases
     * @returns any
     */
    public getUris():any{
        const result = {};
        this.uris.forEach( 
            (value:string, key:string)=>{
                result[key] = value;
            }
        );
        return result;
    }

    /**
     * Returns the current uri of the loaded data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns string
     */
    public getUri(alias:string):string{
        return this.uris.get(alias);
    }

    /**
     * Returns the data associated to a specific alias
     * @param alias string the loaded data alias
     * @returns any
     */
    public get(alias: string): any{
        return this.data.get(alias);
    };

    /**
     * Loads an assets and return a Promise<any> where any represents the loaded data.
     * @param uri string the asset's uri you want to load
     * @param type string the asset's type
     * @param alias string the asset's alias
     * @returns Promise<any>
     */
    public load (uri: string, type: string = JSON_TYPE, alias: string): Promise<any>{

        return this._loadBlob(uri).then( 
            (data:Blob)=>{
                switch (type) {
                    case IMAGE_TYPE: 
                        return AssetsManager.blobToImage(data).catch(this._errorHandler);

                    case JSON_TYPE:
                        return AssetsManager.blobToJSON(data).catch(this._errorHandler);

                    case VIDEO_TYPE:
                        return AssetsManager.blobToVideo(data).catch(this._errorHandler);

                    case SOUND_TYPE:
                        return AssetsManager.blobToSound(data).catch(this._errorHandler);

                    default: 
                        return data;
                }
            }
        ).then( 
            (data: any) => {
                this.set(data, alias, uri);
                this.emit(LOAD_SUCCESS, data);
                return data;
            }
        );
    };

    /**
     * Sets a specific data and associate it with an alias and an uri
     * @param data any the specific data
     * @param alias string the specific data's alias
     * @param uri string the specific data's uri
     */
    public set(data: any, alias: string, uri:string = ""){
        this.uris.set(alias, uri);
        this.data.set(alias, data);
    };

    /**
     * Delete the data associated to a specific alias and returns boolean if it has been well deleted
     * @param alias string the loaded data alias
     * @returns boolean
     */
    public delete (alias: string): boolean{
        return this.getAll().delete(alias);
    };

    /**
     * Clear all loaded datas
     */
    public destroy (): void {
        this.getAll().clear();
    };    

    private _errorHandler = (reason:any) =>{
        this.emit(LOAD_ERROR, reason);
    };

    private _loadBlob(uri:string):Promise<void|Blob>{
        return fetch(uri).then(
            response => {
                if( response.status === 200){
                    return response.blob(); 
                }
                else{
                    this._errorHandler(response.statusText);
                }
            }
        ).catch(this._errorHandler);
    }

    // add static conversion method

    /**
     * Converts a Blob into an HTMLAudioElement.
     * @param data Blob
     * @returns Promise<HTMLAudioElement>
     */
    public static blobToSound(data: Blob): Promise<HTMLAudioElement>{
        return new Promise(
            (resolve, reject) => {
                const audio = document.createElement("audio");
                const objectURL: string = URL.createObjectURL(data);

                const cbk = (e:Event)=>{
                    audio.removeEventListener("loadeddata", cbk);
                    audio.removeEventListener("error", err);
                    resolve(audio);
                }; 

                const err = (e:Event)=>{
                    audio.removeEventListener("loadeddata", cbk);
                    audio.removeEventListener("error", err);
                    reject("unable to load audio from source");
                };


                audio.addEventListener("loadeddata", cbk);
                audio.addEventListener("error", err);
                audio.src = objectURL;
                audio.load();
            }
        );
    };

    /**
     * Converts a Blob into an JSON Object .
     * @param data Blob
     * @returns Promise<any>
     */
    public static blobToJSON (data: Blob): Promise<any>{ 
        return new Promise( 
            (resolve)=>{
                const reader = new FileReader(); 
                reader.addEventListener(
                    "load", 
                    ()=>{
                        resolve( JSON.parse(reader.result.toString()));
                    }
                );
                reader.readAsText(data, "utf8")
            }
        );
    };

    /**
     * Converts a Blob into an Image Object .
     * @param data Blob
     * @returns Promise<HTMLImageElement>
     */
    public static blobToImage(data:Blob): Promise<HTMLImageElement> {
        return new Promise(
            (resolve, reject) => {
                const image = new Image();

                const err = (e:Event)=>{
                    image.removeEventListener("load", cbk);
                    image.removeEventListener("error", err);
                    reject("unable to load image from source");
                };

                const cbk =  (e: Event) => {
                    image.removeEventListener("load", cbk);
                    image.removeEventListener("error", err);
                    resolve(image);
                }; 

                image.addEventListener("load", cbk);
                image.addEventListener("error", err);

                const objectURL: string = URL.createObjectURL(data);
                image.src = objectURL;
            }
        );
    };

    /**
     * Converts a Blob into an HTMLVideoElement Object .
     * @param data Blob
     * @returns Promise<HTMLVideoElement>
     */
    public static blobToVideo(data:Blob): Promise<HTMLVideoElement> {
        return new Promise(
            (resolve, reject) => {
                const video = document.createElement("video");
                const objectURL: string = URL.createObjectURL(data);

                const cbk = (e:Event)=>{
                    video.removeEventListener("loadeddata", cbk);
                    video.removeEventListener("error", err);
                    resolve(video);
                }; 

                const err = (e:Event)=>{
                    video.removeEventListener("loadeddata", cbk);
                    video.removeEventListener("error", err);
                    reject("unable to load video from source");
                };


                video.addEventListener("loadeddata", cbk);
                video.addEventListener("error", err);
                video.src = objectURL;
                video.load();
            }
        );
    };
}


export const LOAD_ERROR:string = "LOAD_ERROR";
export const LOAD_SUCCESS:string = "LOAD_SUCCESS";

export const IMAGE_TYPE: string = "IMAGE_TYPE";
export const VIDEO_TYPE: string = "VIDEO_TYPE";
export const SOUND_TYPE: string = "SOUND_TYPE";
export const JSON_TYPE: string = "JSON_TYPE";
export const BLOB_TYPE: string = "BLOB_TYPE";