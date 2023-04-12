import BoundingBox from "../../../../../../../lib/sdk/common/model/space/partitioning/tree/BoundingBox";

describe('Partition2D test suite', 
()=>{
    it('should be able to create a new BoundingBox by splitting in 2 the current one according to a specific axis', 
    ()=>{
        //given
        const data = [
            {
                base: {x:0,y:0,width:1000,height:1000},
                hori: [
                    {x:0,y:0,width:1000,height:500},
                    {x:0,y:500,width:1000,height:500},
                ],
                vert: [
                    {x:0,y:0,width:500,height:1000},
                    {x:500,y:0,width:500,height:1000},
                ],
            },
            {
                base: {x:25000,y:25000,width:25000,height:25000},
                hori: [
                    {x:25000,y:25000,width:25000,height:12500},
                    {x:25000,y:37500,width:25000,height:12500},
                ],
                vert: [
                    {x:25000,y:25000,width:12500,height:25000},
                    {x:37500,y:25000,width:12500,height:25000},
                ],
            },
        ]; 
 
        data.forEach( 
            (current)=>{
                // when
                const box = new BoundingBox(current.base.x, current.base.y, current.base.width, current.base.height);
                const vert = box.splitVertical();
                const hori = box.splitHorizontal();

                // then 
                expect(vert[0].x).toEqual(current.vert[0].x);
                expect(vert[0].y).toEqual(current.vert[0].y);
                expect(vert[0].width).toEqual(current.vert[0].width);
                expect(vert[0].height).toEqual(current.vert[0].height);

                expect(vert[1].x).toEqual(current.vert[1].x);
                expect(vert[1].y).toEqual(current.vert[1].y);
                expect(vert[1].width).toEqual(current.vert[1].width);
                expect(vert[1].height).toEqual(current.vert[1].height);

                expect(hori[0].x).toEqual(current.hori[0].x);
                expect(hori[0].y).toEqual(current.hori[0].y);
                expect(hori[0].width).toEqual(current.hori[0].width);
                expect(hori[0].height).toEqual(current.hori[0].height);

                expect(hori[1].x).toEqual(current.hori[1].x);
                expect(hori[1].y).toEqual(current.hori[1].y);
                expect(hori[1].width).toEqual(current.hori[1].width);
                expect(hori[1].height).toEqual(current.hori[1].height);
            }
        );
    }); 

    it('should be able to say if a boundingbox collides a point', 
    ()=>{

        //given
        const box1 = new BoundingBox(20,20,100,100); 
        const box2 = new BoundingBox(0,0,30,30); 
        const box3 = new BoundingBox(100,100,30,30); 
        const point1 = {x:30,y:30};
        const point2 = {x:-2,y:30};
        // when

        const result1 =  box1.collidePoint(point1.x, point1.y);
        const result2 =  box2.collidePoint(point1.x, point1.y);
        const result3 =  box3.collidePoint(point1.x, point1.y);
        const result4 =  box1.collidePoint(point2.x, point2.y);
        const result5 =  box2.collidePoint(point2.x, point2.y);
        const result6 =  box3.collidePoint(point2.x, point2.y);

        // then 
        expect(result1).toBeTrue();
        expect(result2).toBeTrue();
        expect(result3).toBeFalse();
        expect(result4).toBeFalse();
        expect(result5).toBeFalse();
        expect(result6).toBeFalse();
        
    }); 

    it('should be able to say if a boundingbox collides another one', 
    ()=>{

        //given
        const box1 = new BoundingBox(20,20,100,100); 
        const box2 = new BoundingBox(0,0,30,30); 
        const box3 = new BoundingBox(100,100,30,30); 
        const box4 = new BoundingBox(50,50,10,10);
        // when

        const result1 =  box1.collideBox(box2);
        const result2 =  box1.collideBox(box3);
        const result3 =  box2.collideBox(box3);
        const result4 =  box1.collideBox(box4);
        const result5 =  box4.collideBox(box1);

        // then 
        expect(result1).toBeTrue();
        expect(result2).toBeTrue();
        expect(result3).toBeFalse();
        expect(result4).toBeTrue();
        expect(result5).toBeTrue();
        
    }); 
});