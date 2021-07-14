import Stats from "./stats/Stats";
import Bitmap from "./display/Bitmap";
import Stage from "./display/Stage";
import IDisplayObject from "./display/IDisplayObject";

const stats:Stats = new Stats();

function renderLoop(stage:Stage){
   stage.nextFrame();
   stage.getChildren().forEach( 
      (child:IDisplayObject)=>{
         child.rotation++;
         child.updateMatrix();
      }
   );
   
   console.log(stats.getFps());
   
   
   window.requestAnimationFrame(
      ()=>{
         renderLoop(stage);
      }
   );
}

function addChildren(stage:Stage):void{
   for( let i:number = 0; i < 1000; i++ ){
      const bmp:Bitmap = new Bitmap();
      bmp.texture = document.getElementById("img") as HTMLImageElement;
      bmp.width = 100;
      bmp.height = 100;
      bmp.x = Math.round( Math.random() * 640 ); 
      bmp.y = Math.round( Math.random() * 480 );
      bmp.scaleX = 0.5;
      bmp.scaleY = 0.5;
      bmp.rotation = 45;
      bmp.updateMatrix();
      stage.addChild(bmp);
   }
}

async function init() {

   const stage:Stage = new Stage();
   

   stats.setStage(stage);
   stats.start();

   document.body.appendChild(stage.getCanvas());

   stage.getCanvas().width = stage.width = 600;
   stage.getCanvas().height = stage.height = 480;
   

   addChildren(stage);

   renderLoop(stage);
}

window.addEventListener("load", init);