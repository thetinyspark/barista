const fs = require("fs"); 

fs.unlinkSync("./lib/index.ts");
fs.copyFileSync("./scripts/tpl/index.browser.ts", "./lib/index.ts");