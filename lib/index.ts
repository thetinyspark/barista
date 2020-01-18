
const data = [
    {amount: 0, time: 0},
    {amount: 10, time: 5},
    {amount: 12, time: 10},
    {amount: 5, time: 15},
    {amount: 7, time: 20},
    {amount: 20, time: 25},
    {amount: 10, time: 30},
    {amount: 0, time: 35}
]; 

function init(){
    let canvas = getCanvas();
    let context  = getContext(); 

    // on détermine les dimensions du canvas
    canvas.width = 640;
    canvas.height = 480;

    const step = 640 / 35;

    context.save();
    context.strokeStyle ="blue";
    context.moveTo(0,240);
    data.map( 
        (obj) => {
            context.lineTo(obj.time * step, 240 - obj.amount * 5);
        }
    );

    context.stroke();
    context.restore();
}

function getContext(){
    return getCanvas().getContext("2d");
}

function getCanvas(){
    return document.querySelector("canvas"); 
}

window.addEventListener("load", init);