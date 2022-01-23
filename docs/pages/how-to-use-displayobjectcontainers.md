## What is a DisplayObjectContainer ? 


DisplayObjectContainer objects are inspired by AS3 DisplayObjectContainer class (which is abstract, so not instanciable). 
DisplayObjectContainer are usefull if you want to group DisplayObject objects together and apply them some transformations. 

A DisplayObjectContainer object inherits from DisplayObject so it can be rendered.
You can set the "texture" property of a DisplayObjectContainer, but it would be useless, 
because the main purpose of a DisplayObjectContainer is to contain "children" (displayobjects)
and render them. 

<iframe src="https://codesandbox.io/embed/how-to-use-displayobjectcontainers-in-barista-4776d?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How to use DisplayObjectContainers in Barista ?"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

You can play with DisplayObjectContainers here on codesandbox

## How to create a DisplayObjectContainer ? 

Here is the easiest way to create a DisplayObject from an Image

```typescript
const container = new DisplayObjectContainer();
```

## How to render a DisplayObjectContainer ? 

There's multiple ways to render a DisplayObjectContainer with Barista. 
The easiest one is also the recommended way: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="dist/main.js"></script>
</head>
<body>
    <img src="./moocaccino.png" alt="moocaccino logo" id="my_img_id"/>
</body>
</html>
```
```typescript

function start(){
    window.removeEventListener("load", start);

    // create the scene/stage, note: Stage inherits from DisplayObjectContainer
    const stage = new Stage();
    
    // define stage width and height
    stage.getCanvas().width = 1024;
    stage.getCanvas().height = 768;

    // adds canvas to html page
    document.body.appendChild(stage.getRenderer().getCanvas());

    // load image
    const image = document.getElementById("my_img_id");

    // create texture from image
    const texture = Texture.createFromSource("my_tex", image);

    // create display object
    const sprite = DisplayObject.createFromTexture(texture);

    // create display object container
    const container = new DisplayObjectContainer();

    // add display object to the container's children list
    container.addChild(sprite);

    // add DisplayObjectContainer to the stage
    stage.addChild(container);

    // the container's transformations will be added to its children
    container.x = 100;

    // render next frame
    stage.nextFrame();
    // And voilà !
}

window.addEventListener("load", start);

```

## Is that all ? 
No. Obviously not, this is just the very beginning. 


