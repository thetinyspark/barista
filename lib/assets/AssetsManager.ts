import {Emitter} from "@thetinyspark/tiny-observer";

export default class AssetsManager extends Emitter{

    private uris:Map<string, string> = new Map<string,string>();
    private data: Map<string, any>;
    private list: any[];

    constructor() {
        super();
        this.data = new Map<string, any>();
        this.list = [];
    }

    public getAll(): Map<string, any>{
        return this.data;
    };


    public queue(uri: string, type: string = JSON_TYPE, alias: string):void{
        this.list.push({ uri, type, alias });
    };

    public getQueue(): any[]{
        return this.list;
    };

    public freeQueue():void{
        this.list = [];
    };

    public loadQueue(): Promise<any[]>{
        return Promise.all(this.list.map(cur => this.load(cur.uri, cur.type, cur.alias))).then(
            (data: any[]) => {
                this.freeQueue();
                return data;
            }
        );
    };


    public getUris():any{
        const result = {};
        this.uris.forEach( 
            (value:string, key:string)=>{
                result[key] = value;
            }
        );
        return result;
    }

    public getUri(alias:string):string{
        return this.uris.get(alias);
    }

    public get(alias: string): any{
        return this.data.get(alias);
    };

    public load (uri: string, type: string = JSON_TYPE, alias: string): Promise<any>{

        return this._loadBlob(uri).then( 
            (data:Blob)=>{
                switch (type) {
                    case IMAGE_TYPE: 
                        return AssetsManager.blobToImage(data).catch(this._errorHandler);

                    case JSON_TYPE:
                        return AssetsManager.blobToJSON(data).catch(this._errorHandler);

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

    public set(data: any, alias: string, uri:string = ""){
        this.uris.set(alias, uri);
        this.data.set(alias, data);
    };

    public delete (alias: string): boolean{
        return this.getAll().delete(alias);
    };

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

    public static blobToImage(data:Blob): Promise<HTMLImageElement> {
        return new Promise(
            (resolve) => {
                const image = new Image();
                image.addEventListener(
                    "load",
                    (e: Event) => {
                        resolve(image);
                    }
                );

                const objectURL: string = URL.createObjectURL(data);
                image.src = objectURL;
            }
        );
    };
}


export const LOAD_ERROR:string = "LOAD_ERROR";
export const LOAD_SUCCESS:string = "LOAD_SUCCESS";

export const IMAGE_TYPE: string = "IMAGE_TYPE";
export const JSON_TYPE: string = "JSON_TYPE";
export const BLOB_TYPE: string = "BLOB_TYPE";