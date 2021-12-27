import { mat2d } from "gl-matrix";
import Camera from "../../lib/display/Camera";
describe("Camera test suite",
()=>{
    it('should be able to instanciate a Camera object', 
    ()=>{
        // given
        const camera = new Camera(); 

        // then 
        expect(camera).toBeTruthy();
    });

    it('should be able to get the reverted matrix of a Camera object', 
    ()=>{
        // given
        const camera = new Camera(); 
        camera.x = 10;
        camera.y = 10; 
        camera.width = 100; 
        camera.height = 100;
        camera.scaleX = camera.scaleY = 2;

        // when
        camera.update(mat2d.create(), 1);
        const rmatrix = camera.getRevertWorldMatrix();
        const tmatrix = camera.worldMatrix;

        // then 
        expect(rmatrix).toBeTruthy();
        expect(mat2d.multiply(mat2d.create(), tmatrix, rmatrix)).toEqual(mat2d.create());
    });

    it('should be able to get the real bounds of a Camera Object', 
    ()=>{
        // given
        const camera = new Camera(); 
        camera.x = 10;
        camera.y = 10; 
        camera.width = 100; 
        camera.height = 100;
        camera.scaleX = camera.scaleY = 2;

        // when
        camera.update(mat2d.create(), 1);
        const bounds = camera.getBounds();

        // then 
        expect(bounds).toBeTruthy();
        expect(bounds.x).toEqual(camera.x);
        expect(bounds.y).toEqual(camera.y);
        expect(bounds.width).toEqual(camera.width * camera.scaleX);
        expect(bounds.height).toEqual(camera.height * camera.scaleY);
    });
});