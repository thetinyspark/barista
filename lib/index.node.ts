export * from "@thetinyspark/tiny-observer";

export * from "./core/controls/index";
export * from "./core/display/index";
export * from "./core/filters/index";
export * from "./core/rendering/index";
export * from "./core/rendering/canvas/index";

export * from "./sdk/common/utils/index";
export * from "./sdk/common/utils/fsm/index";
export * from "./sdk/common/model/node/index";
export * from "./sdk/common/model/space/partitioning/grid/index";
export * from "./sdk/common/model/space/partitioning/tree/index";
export * from "./sdk/common/model/space/storage/index";
export * from "./sdk/isometric/mixins/index";
export * from "./sdk/isometric/model/node/index";
export * from "./sdk/isometric/utils/index";
export * from "./sdk/isometric/view/map/index";



export * from "./core/assets/index.node";
export * from "./core/texture/index.node";
export * from "./core/utils/index.node";

import { glMatrix } from "gl-matrix";
import Stage from "./core/display/Stage";

/*test*/
import {CanvasUtils} from ".";
import {Texture} from ".";
import DisplayObject from "./core/display/DisplayObject";
import * as fs from "fs";

glMatrix.setMatrixArrayType(Array);

const stage = new Stage();
const canvas = CanvasUtils.create(100,100); 
const ctx = canvas.getContext("2d"); 
ctx.fillStyle = "red"; 
ctx.fillRect(0,0,100,100);
ctx.fill();

const texture = Texture.createFromSource("red", canvas);

const disp = DisplayObject.createFromTexture(texture); 
stage.getCanvas().width = 200;
stage.getCanvas().height = 200;

disp.transformOrigin.x = disp.width >> 1;
disp.transformOrigin.y = disp.height >> 1;
disp.rotation = 45;

stage.addChild(disp); 
stage.nextFrame();

const buffer = (stage.getCanvas() as any).toBuffer();
fs.writeFileSync("./test.png", buffer);

