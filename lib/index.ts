import Bitmap from "./display/Bitmap";
import Stage from "./display/Stage";

function renderLoop(stage:Stage){
   stage.nextFrame();
   stage.getChildren()[0].rotation++;
   stage.getChildren()[0].updateMatrix();
   window.requestAnimationFrame(
      ()=>{
         renderLoop(stage);
      }
   );
}

async function init() {
   const stage:Stage = new Stage();
   const bmp:Bitmap = new Bitmap();
   document.body.appendChild(stage.getCanvas());

   stage.getCanvas().width = stage.width = 600;
   stage.getCanvas().height = stage.height = 480;
   bmp.texture = document.getElementById("img") as HTMLImageElement;
   bmp.width = 100;
   bmp.height = 100;
   bmp.x = 100; 
   bmp.y = 100;
   bmp.scaleX = 2;
   bmp.scaleY = 2;
   bmp.rotation = 45;
   bmp.updateMatrix();

   stage.addChild(bmp); 

   renderLoop(stage);
}

window.addEventListener("load", init);