import IsoNode from "../../../../lib/sdk/isometric/model/node/IsoNode";
describe('IsoNode test suite', 
()=>{

    const node = new IsoNode(); 

    it('should be able to create an IsoNode', 
    ()=>{
        expect(node).toBeTruthy();
    }); 

    it('should be able to reset isoX, isoY, isoZ from row and col', 
    ()=>{   
        node.row = 1;
        node.col = 2;
        node.resetCoordinatesFromRowAndCol();
        expect(node.isoX).toEqual(32);
        expect(node.isoY).toEqual(48);
        expect(node.isoZ).toEqual(0);
    });


    it('should be able to reset row and col from coordinates isoX, isoY, isoZ', 
    ()=>{
        node.isoX = 32; 
        node.isoY = 48; 
        node.isoZ = 10;

        node.resetRowAndColFromCoordinates();
        expect(node.row).toEqual(1);
        expect(node.col).toEqual(2);
    }); 

    it('should be able to calculate the good offsetY and offsetX', 
    ()=>{
        // given 
        node.cellWidth = 64; 
        node.cellHeight = 32; 
        node.width = 100; 
        node.height = 100; 

        // when then 
        expect(node.offsetX).toEqual(18);
        expect(node.offsetY).toEqual(68);
    })
})