import Stats from "./stats/Stats";
import Stage from "./display/Stage";
import IDisplayObject from "./display/IDisplayObject";
import DisplayObject from "./display/DisplayObject";

const stats:Stats = new Stats();

function renderRawLoop(canvas:HTMLCanvasElement, context:CanvasRenderingContext2D, lastTime:number = 0):void{
   const currentTime = new Date().getTime();
   const elapsedTime = currentTime - lastTime; 

   const texture = document.getElementById("img") as HTMLImageElement;
   context.clearRect(0,0,canvas.width, canvas.height);
   context.save();
   for( let i:number = 0; i < 1; i++ ){
      const x = Math.round( Math.random() * window.innerWidth - 100 ); 
      const y = Math.round( Math.random() * window.innerHeight - 100 );
      context.save();
      context.translate(x, y);
      context.scale(0.1,0.1);
      context.rotate(0);
      context.globalAlpha = 0.5;
      context.drawImage(texture, 0, 0, texture.width, texture.height, 0, 0, 100, 100);
      context.restore();
   }

   const fps = Math.round( 1000 / elapsedTime );
   
   context.fillStyle = "black";
   context.fillRect(0,0,100,100);
   context.fill();
   
   context.fillStyle = "red"; 
   context.fillText(fps.toString(), 0, 50);
   context.fill();

   context.restore();

   window.requestAnimationFrame(
      ()=>{
         renderRawLoop(canvas, context, currentTime);
      }
   );
}

function renderLoop(stage:Stage){
  
   
   stage.getChildren().forEach( 
      (child:IDisplayObject)=>{
         child.x = Math.round( Math.random() * window.innerWidth - 100 ); 
         child.y = Math.round( Math.random() * window.innerHeight - 100 );
      }
   );

   stats.x = stats.y = 0;
   
   stage.updateMatrix();
   stage.nextFrame();
   
   
   window.requestAnimationFrame(
      ()=>{
         renderLoop(stage);
      }
   );
}

function addChildren(stage:Stage):void{
   for( let i:number = 0; i < 1000; i++ ){
      const bmp:DisplayObject = new DisplayObject();
      bmp.texture = document.getElementById("img") as HTMLImageElement;
      bmp.width = 100;
      bmp.height = 100;
      bmp.opacity = 0.5;
      bmp.scaleX = bmp.scaleY = 0.1;
      bmp.x = Math.round( Math.random() * window.innerWidth - 100 ); 
      bmp.y = Math.round( Math.random() * window.innerHeight - 100 );
      stage.addChild(bmp);
   }
}

async function init() {

   const stage:Stage = new Stage();
   

   stats.setStage(stage);
   
   stats.start();

   document.body.appendChild(stage.getCanvas());

   stage.getCanvas().width = stage.width = window.innerWidth - 100;
   stage.getCanvas().height = stage.height = window.innerHeight - 100;
   

   addChildren(stage);
   stage.addChild(stats);

   stats.width = 50; 
   stats.height = 30;

   renderLoop(stage);
   // renderRawLoop(stage.getCanvas(), stage.getContext());
}

window.addEventListener("load", init);