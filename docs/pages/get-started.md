# How to setup a Barista project ? 


## Create your project directory
Open a terminal and type:
```bash
# create your project directory
mkdir <my_project_dir>

# go into it
cd <my_project_dir>

# then create a src folder
mkdir src
```


## Installation

Open a terminal and type:
```bash
npm i typescript @thetinyspark/moocaccino-barista webpack webpack-cli http-server
```



## Configuration
Then create a tsconfig.json file
```js
{
    "include": [
        "src"
    ],
    "compilerOptions": {
        "target": "es2021",
        "module": "commonjs",
        "declaration": true,
        "outDir": "./dist",
        "strict": false,
        "typeRoots": [
            "node_modules/@types"
        ],
        "types": [
            "@types/node"
        ],
    }
}
```
And a webpack.config.js file
```js
const path = require('path');

module.exports = {
    mode: "development",
    entry: './dist/index.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```
Now you can add an index.html file
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <script src="dist/main.js"></script>
    <style>
        html{height: 99%;}
        body{
            height: 99%;
            background: #111;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        canvas{
            border: 1px solid black;
            background-color: black;
        }
    </style>
</head>
<body>
</body>
</html>
```

## Create an empty scene with monitoring
Create the src/index.ts file and paste this code into it
```typescript
import {Stage, Stats} from "@thetinyspark/moocaccino-barista";
function start(){
    window.removeEventListener("load", start);

    // create the scene/stage, note: Stage inherits from DisplayObjectContainer
    const stage = new Stage();

    // define stage width and height
    stage.getCanvas().width = 1024;
    stage.getCanvas().height = 768;

    // adds canvas to html page
    document.body.appendChild(stage.getRenderer().getCanvas());

    // create stats object
    const stats = new Stats();
    
    // specify to stats object which object to monitore
    stats.setStage(stage);

    // start monitoring
    stats.start();

    // add stats object to the stage
    stage.addChild(stats);


    // start render loop
    render(stage);
}

// render loop
function render(stage){
    stage.nextFrame();
    window.requestAnimationFrame( 
        ()=>{
            render(stage);
        }
    )
}

window.addEventListener("load", start);
```

## Compile and run
Create a new script into your package.json 
```js
{
    "scripts": {
        "start": "tsc && npx webpack --config webpack.config.js"
    }
}
This command will compile & package your project.
```
Open a terminal and type
```bash
# Compile your project and package it with webpack
npm run start

# Now serve the project with http-server
http-server ./
```