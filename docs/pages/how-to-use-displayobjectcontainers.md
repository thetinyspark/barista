## What is a DisplayObjectContainer ? 


DisplayObjectContainer objects are inspired by AS3 DisplayObjectContainer class (which is abstract, so not instanciable). 
DisplayObjectContainer are usefull if you want to group DisplayObject objects together and apply them some transformations. 

A DisplayObjectContainer object inherits from DisplayObject so it can be rendered.
You can set the "texture" property of a DisplayObjectContainer, but it would be useless, 
because the main purpose of a DisplayObjectContainer is to contain "children" (displayobjects)
and render them. 

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


