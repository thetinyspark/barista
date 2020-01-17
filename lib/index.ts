function init(){
    let canvas = getCanvas();
    let context  = getContext(); 

    // on détermine les dimensions du canvas
    canvas.width = 640;
    canvas.height = 480;

    // sauvegarder le contexte = t1
    context.save();

    context.scale(0.5,0.5); 
    context.translate(10,10);
    // on applique une rotation de 45° au repère
    context.rotate(45 * Math.PI / 180);

    // sauvegarde le contexte tel qu'il est en t2
    context.save();

    // crée un nouveau "path"
    context.beginPath(); 
    // on va donc définir un style de remplissage
    context.fillStyle = "blue";
    // dessiner un carré
    context.fillRect(300,220, 100, 100);
    // remplir le cercle 
    context.fill();

    // on restaure le dernier contexte sauvegardé avec save();
    context.restore();

    // on redéfinit l'opacité des dessins qui vont suivre 
    context.globalAlpha = 0.5;
    
    // crée un nouveau "path"
    context.beginPath(); 
    // on va donc définir un style de remplissage
    context.fillStyle = "#ff0000";
    // dessiner un rectangle
    context.fillRect(320,240, 100, 30);
    // remplir le cercle 
    context.fill();
}

function getContext(){
    return getCanvas().getContext("2d");
}

function getCanvas(){
    return document.querySelector("canvas"); 
}

window.addEventListener("load", init);