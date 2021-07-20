import Stats from "../../lib/display/Stats";
import Stage from "../../lib/display/Stage";

export function wait(ms:number):Promise<void>{
    return new Promise( 
        (resolve, reject)=>{
            setTimeout( resolve, ms );
        }
    );
}

describe(
    "Stats test suite", 
    ()=>{
        it('constructor', 
            ()=>{
                const stats:Stats = new Stats();
                expect(stats).toBeTruthy();
            }
        ); 

        it('should able to set / get stage', 
            ()=>{
                const stats:Stats = new Stats();
                const stage:Stage = new Stage();
                stats.setStage(stage);
                expect(stats.getStage()).toBe(stage);
            }
        ); 

        it('should be able to start and stop monitoring', 
            async ()=>{
                // given 
                const stats:Stats = new Stats();
                const stage:Stage = new Stage();
                stats.setStage(stage);
                stats.start();
                
                // when 
                stats.stop();
                stage.nextFrame();
                await(1000);
                stage.nextFrame();

                // then 
                const fps:number = stats.getFps(); 
                expect(fps).toEqual(-1);
            }
        );

        it('should be able to calculate fps based on elapsed time',
            async ()=>{
                // given 
                const stats:Stats = new Stats();
                const stage:Stage = new Stage();
                stats.setStage(stage);
                stats.start();
                
                // when 
                stage.nextFrame();
                await wait(100);
                stage.nextFrame();
                
                
                // then 
                const fps:number = stats.getFps(); 
                expect(fps).toBeGreaterThan(0);
            }
        );
    }
)