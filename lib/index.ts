import AssetsManager, { JSON_TYPE } from "./AssetsManager";

async function init() {

   try {
      const manager: AssetsManager = new AssetsManager();
      const list = await manager.load("data.json", JSON_TYPE, "list") as any[];

      list.forEach(
         (current) => {
            manager.queue(current.uri, current.type, current.alias);
         }
      );

      const data = await manager.loadQueue();
      document.body.appendChild(manager.get("kirby"));
      document.body.appendChild(manager.get("curve"));
   } 
   catch (error) {
      console.log(error);
   }

}

window.addEventListener("load", init);