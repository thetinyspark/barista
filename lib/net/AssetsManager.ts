
export default class AssetsManager {

    private data: Map<string, any>;
    private list: any[];

    constructor() {
        this.data = new Map<string, any>();
        this.list = [];
    }

    public getAll = (): Map<string, any> => {
        return this.data;
    };


    public queue = (uri: string, type: string = JSON_TYPE, alias: string):void => {
        this.list.push({ uri, type, alias });
    };

    public getQueue = (): any[] => {
        return this.list;
    };

    public freeQueue = ():void => {
        this.list = [];
    };

    public loadQueue = (): Promise<any[]> => {
        return Promise.all(this.list.map(cur => this.load(cur.uri, cur.type, cur.alias))).then(
            (data: any[]) => {
                this.freeQueue();
                return data;
            }
        );
    };



    public get = (alias: string): any => {
        return this.data.get(alias);
    };

    public load = (uri: string, type: string = JSON_TYPE, alias: string): Promise<any> => {

        let promise: Promise<any> = null;

        switch (type) {
            case IMAGE_TYPE: promise = this.loadImage(uri); break;
            case JSON_TYPE: promise = this.loadJSON(uri); break;

            default:
                return Promise.reject("unhandled data type");
        }

        return promise.then(
            (data: any) => {
                this.set(data, alias);
                return data;
            }
        );

    };

    public set = (data: any, alias: string) => {
        this.data.set(alias, data);
    };

    public delete = (alias: string): boolean => {
        return this.getAll().delete(alias);
    };

    public destroy = (): void => {
        this.getAll().clear();
    };



    private loadJSON = (uri: string): Promise<any> => {
        return fetch(uri).then(response => response.json());
    };

    private loadImage = (uri: string): Promise<HTMLImageElement> => {
        return fetch(uri).then(response => response.blob()).then(
            (data: Blob) => {
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
            }
        );
    };
}

export const IMAGE_TYPE: string = "IMAGE_TYPE";
export const JSON_TYPE: string = "JSON_TYPE";