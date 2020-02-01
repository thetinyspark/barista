function init(){
    let canvas = getCanvas();
    let context  = getContext(); 

    // on détermine les dimensions du canvas
    canvas.width = 640;
    canvas.height = 480;

    // on sauvegarde le contexte
    context.save();

    // on récupère l'élément html de type image qui nous sert de texture (ici kirby)
    const kirby = document.querySelector("img"); 

    // on définit les propriétés de l'ombre portée pour tous les dessins 
    // qui vont suivre. 

    context.shadowBlur = 10; 
    context.shadowColor = "#ff0000"; // l'ombre sera rouge
    context.shadowOffsetX = 10; // ombre décalée de 10px vers la droite 
    context.shadowOffsetY = 10; // ombre décalée de 10px vers le bas 

    // on va dessiner notre kirby à travers un masque circulaire
    // commençons par dessiner le cercle en question 

    context.beginPath();
    context.fillStyle = "red"; // ici peu importe la couleur du moment que le cercle est plein
    context.moveTo(225,225); 
    context.arc(225,255,125, 0, 360 * Math.PI / 180); 
    context.fill();

    // une fois notre cercle dessiné, on change le mode de fusion
    // de la balise canvas pour le définir à source-in. 
    // tous les dessins qui vont suivre seront dessinés à travers un masque

    context.globalCompositeOperation = "source-in";


    // puis on le dessine à l'aide de la méthode drawImage de l'objet de type context
    context.drawImage(kirby, 0,0);

    // on restaure le contexte
    context.restore();
}

function getContext(){
    return getCanvas().getContext("2d");
}

function getCanvas(){
    return document.querySelector("canvas"); 
}

window.addEventListener("load", init);