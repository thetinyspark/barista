import AssetsManager, { BLOB_TYPE, IMAGE_TYPE, JSON_TYPE, LOAD_ERROR, LOAD_SUCCESS, SOUND_TYPE, VIDEO_TYPE } from "../../lib/assets/AssetsManager";
import {createAudioBlob, createVideoBlob} from "../test_utils/canvas.utils.spec";

describe(
    "AssetsManager test suite",
    () => {

        var imageBlob: Blob = null;
        const videoBlob = createVideoBlob();
        const audioBlob = createAudioBlob();

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
        ); 

        // INSTANCE TEST
        it(
            "expect AssetsManager instance to be truthy",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                expect(manager).toBeTruthy();
                done();
            }
        );


        // EVENT DISPATCH 
        it("should dispatch an event on loading error",
        (done)=>{
            // given
            const manager: AssetsManager = new AssetsManager();
            const fake = Promise.resolve(new Response(imageBlob, {status: 404, statusText: "not found"}));
            const fakeurl: string = "omagade ?";
            spyOn(window, "fetch").and.returnValue(fake);

            // when
            manager.subscribe(
                LOAD_ERROR, 
                ()=>{
                    // then
                    expect( manager.get("mydata") ).toBeUndefined();
                    done();
                }
            );

            manager.load(fakeurl, BLOB_TYPE, "mydata");
            
        });

        it("should dispatch an event on loading success",
        (done)=>{
            // given
            const manager: AssetsManager = new AssetsManager();
            const fake = Promise.resolve(new Response(imageBlob));
            const fakeurl: string = "omagade ?";
            spyOn(window, "fetch").and.returnValue(fake);

            // when
            manager.subscribe(
                LOAD_SUCCESS, 
                ()=>{
                    // then
                    expect( manager.get("mydata") ).toBeTruthy();
                    done();
                }
            );

            manager.load(fakeurl, BLOB_TYPE, "mydata");
            
        });

        
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

        // VIDEO LOADING TEST
        it("should load a video ressource",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(videoBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, VIDEO_TYPE, "mydata").then(
                    (video: HTMLVideoElement) => {
                        expect(video).toBeTruthy();
                        done();
                    }
                );
            }
        );

        it("the video ressource should be available at the right alias",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(videoBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, VIDEO_TYPE, "myvid").then(
                    (video: HTMLVideoElement) => {
                        expect(manager.get("myvid")).toBe(video);
                        done();
                    }
                )
            }
        );

        // AUDIO LOADING TEST
        it("should load an audio ressource",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(audioBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, SOUND_TYPE, "mydata").then(
                    (audio: HTMLAudioElement) => {
                        expect(audio).toBeTruthy();
                        done();
                    }
                );
            }
        );

        it("the audio ressource should be available at the right alias",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(audioBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, SOUND_TYPE, "mysound").then(
                    (audio: HTMLAudioElement) => {
                        expect(manager.get("mysound")).toBe(audio);
                        done();
                    }
                )
            }
        );


        // BLOB LOADING TEST
        it("should load a blob ressource",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(imageBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, BLOB_TYPE, "mydata").then(
                    (blob: Blob) => {
                        expect(blob).toBeTruthy();
                        done();
                    }
                );
            }
        );

        it("the blob ressource should be available at the right alias",
            (done) => {
                const manager: AssetsManager = new AssetsManager();
                const fake = Promise.resolve(new Response(imageBlob));
                const fakeurl: string = "lol who cares ?";
                spyOn(window, "fetch").and.returnValue(fake);
                manager.load(fakeurl, BLOB_TYPE, "myblob").then(
                    (blob: Blob) => {
                        expect(manager.get("myblob")).toBeTruthy();
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
                const fakeBlob = Promise.resolve(new Response(imageBlob));
                const jsonuri = "jsonuri";
                const imguri = "imguri";
                const bloburi = "bloburi";

                spyOn(window, "fetch").and.callFake(
                    (input) => {

                        switch (input) {
                            case jsonuri: return fakeJSON;
                            case imguri: return fakeImg;
                            case bloburi: return fakeBlob;
                            default: return fakeJSON;
                        }

                    }
                );

                manager.queue(jsonuri, JSON_TYPE, "myjson");
                manager.queue(imguri, IMAGE_TYPE, "myimg");
                manager.queue(bloburi, BLOB_TYPE, "myblob");
                manager.loadQueue().then(
                    (data: any[]) => {
                        expect(manager.get("myjson")).toBeTruthy();
                        expect(manager.get("myimg")).toBeTruthy();
                        expect(manager.get("myblob")).toBeTruthy();
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