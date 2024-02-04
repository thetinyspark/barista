const fs = require("fs"); 

fs.unlinkSync("./lib/index.ts");
fs.copyFileSync("./scripts/tpl/index.node.ts", "./lib/index.ts");