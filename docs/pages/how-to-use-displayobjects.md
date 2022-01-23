## What is a DisplayObject ? 

In order to display things with Barista, you have to use DisplayObjects. <br/>
DisplayObjects are inspired by AS3 DisplayObject class (which is abstract, so not instanciable). <br/>
As you can see, DisplayObject is the base class for everything which is visible. 

A DisplayObject is an object which is associated to a Texture object. 
- The Texture object represents the source (Image, Video, Canvas ...) which is drawn
- The DisplayObject hold the source and tell the renderer how to render it. 

That's why DisplayObjects have a set of transformation properties like: 

- x,y coordinates
- rotation (in degrees)
- scaleX, scaleY (1 based, 1 = 100%, 2 = 200%)
- width and height (you can distort the source)

<iframe src="https://codesandbox.io/embed/how-to-use-displayobject-in-barista-nphhc?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="How to use DisplayObject in Barista ?"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


You can play with DisplayObjects here on codesandbox

## How to create a DisplayObject ? 

Here is the easiest way to create a DisplayObject from an HTMLImageElement

```typescript
// get the image
const image = document.querySelector('#my_img_id');

// now create a texture object from the image
const texture = Texture.createFromSource("my_tex", image);

// and create a DisplayObject instance from the texture
const sprite = DisplayObject.createFromTexture(texture);
```

## How to render a DisplayObject ? 

There's multiple ways to render a DisplayObject with Barista. 
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

    // create the scene/stage
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

    // add display object to the stage children list
    stage.addChild(sprite);

    // render next frame
    stage.nextFrame();
    // And voilà !
}

window.addEventListener("load", start);

```

## Is that all ? 
No. Obviously not, this is just the very beginning. 
Try to manipulate the object properties, or add more objects, on the stage.