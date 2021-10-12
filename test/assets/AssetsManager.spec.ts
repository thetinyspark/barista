import AssetsManager, { IMAGE_TYPE, JSON_TYPE } from "../../lib/assets/AssetsManager";

describe(
    "AssetsManager test suite",
    () => {

        var imageBlob: Blob = null;

        beforeAll(
            (done) => {
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.width = 100;
                canvas.height = 100;

                context.beginPath();
                context.fillRect(0, 0, 100, 100);
                context.fill();
                canvas.toBlob(
                    (data) => {
                        imageBlob = data;
                        done();
                    }, "image/png", 1
                );
            }
        )

        it(
            "expect AssetsManager instance to be truthy",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                expect(manager).toBeTruthy();
                done();
            }
        );


        
        // IMAGE LOADING TEST
        it("should load an image ressource",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(imageBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, IMAGE_TYPE, "mydata").then(
                    (image: HTMLImageElement) => {
                        expect(image).toBeTruthy();
                        done();
                    }
                );
            }
        );

        it("the image ressource should be 100 width, 100 height",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(imageBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, IMAGE_TYPE, "mydata").then(
                    (image: HTMLImageElement) => {
                        expect(image.naturalWidth).toBe(100);
                        expect(image.naturalHeight).toBe(100);
                        done();
                    }
                )
            }
        );

        it("the image ressource should be available at the right alias",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(imageBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, IMAGE_TYPE, "myimg").then(
                    (image: HTMLImageElement) => {
                        expect(manager.get("myimg")).toBe(image);
                        done();
                    }
                )
            }
        );




        // JSON LOADING TEST
        it("should load a json ressource",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const mock = { msg: "hello world" };
                const fake = Promise.resolve(new Response(JSON.stringify(mock)));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, JSON_TYPE, "mydata").then(
                    (data: any) => {
                        expect(data).toBeTruthy();
                        done();
                    }
                );
            }
        );

        it("the json ressource should have a specific message",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const mock = { msg: "hello world" };
                const fake = Promise.resolve(new Response(JSON.stringify(mock)));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, JSON_TYPE, "mydata").then(
                    (data: any) => {
                        expect(data.msg).toEqual("hello world");
                        done();
                    }
                );
            }
        );

        it("the json ressource should be available at the right alias",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const mock = { msg: "hello world" };
                const fake = Promise.resolve(new Response(JSON.stringify(mock)));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, JSON_TYPE, "myjson").then(
                    (data: any) => {
                        expect(manager.get("myjson")).toBe(data);
                        done();
                    }
                );
            }
        );



        // SET, UNSET AND DESTROY TEST
        it("the json ressource should be deleted",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const mock = { msg: "hello world" };
                const fake = Promise.resolve(new Response(JSON.stringify(mock)));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, JSON_TYPE, "myjson").then(
                    (data: any) => {
                        manager.delete("myjson");
                        expect(manager.get("myjson")).toBeFalsy();
                        done();
                    }
                );
            }
        );

        it("the ressource should be available at the right alias",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const data = { msg: "hello" };
                manager.set(data, "mydata");
                expect(manager.get("mydata")).toBe(data);
                done();
            }
        );

        it("all the ressources should be deleted",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                manager.set(1, "mydata1");
                manager.set(2, "mydata2");
                manager.destroy();
                expect(manager.get("mydata1")).toBeFalsy();
                expect(manager.get("mydata2")).toBeFalsy();
                done();
            }
        );



        // QUEUE LOADING TEST
        it("should queue and load ressources",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fakeJSON = Promise.resolve(new Response(JSON.stringify({ msg: "hello" })));
                const fakeImg = Promise.resolve(new Response(imageBlob));
                const jsonuri = "jsonuri";
                const imguri = "imguri";

                spyOn(window, "fetch").and.callFake(
                    (input) => {

                        switch (input) {
                            case jsonuri: return fakeJSON;
                            case imguri: return fakeImg;
                            default: return fakeJSON;
                        }

                    }
                );

                manager.queue(jsonuri, JSON_TYPE, "myjson");
                manager.queue(imguri, IMAGE_TYPE, "myimg");
                manager.loadQueue().then(
                    (data: any[]) => {
                        expect(manager.get("myjson")).toBeTruthy();
                        expect(manager.get("myimg")).toBeTruthy();
                        expect(manager.getQueue().length).toEqual(0);
                        done();
                    }
                );
            }
        );

        it("should fill queue",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                manager.queue("uri1", JSON_TYPE, "myjson");
                manager.queue("uri2", IMAGE_TYPE, "myimg");
                expect(manager.getQueue().length).toEqual(2);
                done();
            }
        );

        it("should free queue",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                manager.queue("uri1", JSON_TYPE, "myjson");
                manager.queue("uri2", IMAGE_TYPE, "myimg");
                manager.freeQueue();
                expect(manager.getQueue().length).toEqual(0);
                done();
            }
        );

        // SHOULD BE ABLE TO RETRIEVE THE RIGHT URI FOR A RESSOURCE 
        it("should be able to retrieve the right uri for a specific ressource when using set", 
        ()=>{
            const manager: AssetsManager = new AssetsManager();
            const data = { msg: "hello" };
            const uri = "lol who cares ?";
            manager.set(data, "mydata", uri);
            expect(manager.getUri("mydata")).toBe(uri);
        });

        it("should be able to retrieve the right uri for a specific ressource when using load", 
        ()=>{
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const mock = { msg: "hello world" };
                const fake = Promise.resolve(new Response(JSON.stringify(mock)));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, JSON_TYPE, "mydata").then(
                    (data: any) => {
                        expect(manager.getUri("mydata")).toEqual(fakeurl);
                        done();
                    }
                );
            }
        });

        it("should be able to retrieve the right uri for a specific ressource when using queue", 
        ()=>{
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fakeJSON = Promise.resolve(new Response(JSON.stringify({ msg: "hello" })));
                const jsonuri = "jsonuri";

                spyOn(window, "fetch").and.callFake((input) => fakeJSON);

                manager.queue(jsonuri, JSON_TYPE, "myjson");
                manager.loadQueue().then(
                    (data: any[]) => {
                        expect(manager.getUri("myjson")).toEqual(jsonuri);
                        done();
                    }
                );
            }
        });

        it("should be able to retrieve all uris and aliases", 
        ()=>{
            const manager: AssetsManager = new AssetsManager();
            manager.set(10, "mydata1", "uri1");
            manager.set(12, "mydata2", "uri2");
            expect(manager.getUris()).toEqual(
                {
                    mydata1: "uri1",
                    mydata2: "uri2",
                }
            );
        })

    }
)