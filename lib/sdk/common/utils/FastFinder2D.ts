import { Grid2D } from "../model/space/partitioning/grid";
import { GameNode } from "../model/node";

export default class FastFinder2D {
    private nodes: GameNode[] = [];
    // private opened: GameNode[] = [];
    // private closed: GameNode[] = [];

    public createGraphe(grid:Grid2D<number>, walkableValue:number):Grid2D<GameNode>{
        const graphe = new Grid2D<GameNode>();
        graphe.reset(grid.numRows, grid.numCols);

        grid.forEach( 
            (value:Number, row:number, col:number)=>{
                const node = new GameNode();
                node.state.row = row;
                node.state.col = col;
                node.state.g = 0;
                node.state.f = 0;
                node.state.h = 0;
                node.state.walkable = value === walkableValue;
                node.state.parent = null;
                node.state.opened = false;
                node.state.closed = false;
                graphe.addAt(row,col,node);
            }
        ); 

        return graphe;
    }

    public resetGraphe(graphe:Grid2D<GameNode>):void{
        this.nodes = new Array();
        // this.opened = new Array();
        // this.closed = new Array();
        let node:GameNode|null = null;
        const data = graphe.data;
        for( let i = 0; i < data.length; i++ ){
            for( let j = 0; j < data[i].length; j++ ){
                node = data[i][j];
                if( node ){
                    node.state.row = i;
                    node.state.col = j;
                    node.state.g = 0;
                    node.state.f = 0;
                    node.state.h = 0;
                    node.state.parent = null;
                }
            }
        }
        // graphe.forEach( 
        //     (node:GameNode, row:number, col:number)=>{

        //         if( node ){
        //             node.state.row = row;
        //             node.state.col = col;
        //             node.state.g = 0;
        //             node.state.f = 0;
        //             node.state.h = 0;
        //             node.state.parent = null;
        //         }
                
        //     }
        // ); 
    }

    public findPath(graphe:Grid2D<GameNode>, startNode:GameNode, endNode:GameNode, allowDiagonals:boolean = false): GameNode[] {

        // on crée les listes fermées et les listes ouvertes
        this.nodes = new Array();
        // this.opened = new Array();
        // this.closed = new Array();

        // - Ajout du node de départ à la liste ouverte.
        this.nodes.push(startNode);
        startNode.state.opened = true;
        startNode.state.closed = false;


        //  stopper la boucle si la liste ouverte est vide
        let hasNextStep: boolean = true;
        while (hasNextStep) {
            // a. Récupération du node avec le plus petit F contenu dans la liste ouverte. 
            // On le nommera CURRENT.
            this.nodes.sort((a, b) => a.state.f < b.state.f ? -1 : 1);

            //  stopper la méthode si le liste ouverte est vide ou si le prochain noeud est le noeud d'arrivée
            if ( this.nodes.length === 0 || this.nodes[0] === endNode) {
                hasNextStep = false;
                break;
            }

            const currentNode = this.nodes[0];

            // b. Basculer CURRENT dans la liste fermée.
            // this._addToCloseList(currentNode);
            currentNode.state.closed = true;
            currentNode.state.opened = false;
            this.nodes.shift();

            //  récupération des voisins de CURRENT
            const neighbours = [
                graphe.getLeft(currentNode.state.row, currentNode.state.col),
                graphe.getRight(currentNode.state.row, currentNode.state.col),
                graphe.getTop(currentNode.state.row, currentNode.state.col),
                graphe.getBottom(currentNode.state.row, currentNode.state.col),
            ];

            if( allowDiagonals ){
                neighbours.push(
                    graphe.getTopLeft(currentNode.state.row, currentNode.state.col),
                    graphe.getTopRight(currentNode.state.row, currentNode.state.col),
                    graphe.getBottomLeft(currentNode.state.row, currentNode.state.col),
                    graphe.getBottomRight(currentNode.state.row, currentNode.state.col)
                )
            }
            // we remove non existing neighbours
            const nonEmpty = neighbours.filter( node => node !== null );

            var opened = false;
            var newG = 0;
            var newH = 0;
            var newF = 0;
            var distRow = 0;
            var distCol = 0;
            // Pour chacun des nodes adjacents à CURRENT appliquer la méthode suivante:
            nonEmpty.forEach(
                (node)=>{
                    //Si le node est un obstacle ou est dans la liste fermée ignorez-le et passer à l'analyse d'un autre node.
                    // if (this._isOnCloseList(node) || !node.state || !node.state.walkable )
                    if (node.state.closed == true || !node.state || !node.state.walkable )
                        return;

                    opened = node.state.opened == true;

                    /* on calcule le nouveau g */
                    newG = currentNode.state.g + NODE_DISTANCE_VALUE;

                    /*on calcule le nouveau h */
                    distRow = endNode.state.row - node.state.row;
                    distCol = endNode.state.col - node.state.col;
                    distRow = distRow < 0 ? -distRow : distRow;
                    distCol = distCol < 0 ? -distCol : distCol;
                    newH = (distRow + distCol) * NODE_DISTANCE_VALUE;
                    // const newH = (Math.abs(endNode.state.row - node.state.row) + Math.abs(endNode.state.col - node.state.col)) * NODE_DISTANCE_VALUE;

                    /*on calcule le nouveau F*/
                    newF = newH + newG;
                    if ( (opened && newG < node.state.g) || !opened ) {
                        //Si le node est déjà dans la liste ouverte, recalculez son G, s'il est inférieur à l'ancien, 
                        //faites de CURRENT  son parent(P) et recalculez et enregistrez ses propriétés F et H.

                        //Si le node n'est pas dans la liste ouverte, ajoutez-le à la dite liste et faites de CURRENT son parent(P). 
                        //Calculez et enregistrez ses propriétés F, G et H.

                        node.state.parent = currentNode;
                        node.state.g = newG;
                        node.state.h = newH;
                        node.state.f = newF;
                        if (!opened) {
                            // this._addToOpenList(node);
                            this.nodes.push(node);
                            node.state.opened = true;
                            node.state.closed = false;
                        }
                    }
                }
            );

        }

        // on finalise notre algo
        const finalPath = [];

        // on est sorti de la liste, on a deux solutions, soit la liste ouverte est vide dans ces cas là il 
        // n'y a pas de solutions et on retourne un finalPath vide
        // soit il y a au moins un élément dans la liste ouverte et on peut reconstruire le chemin à rebours.
        if (this.nodes.length > 0) {
            // Soit on construit le chemin à rebours;
            let lastNode: GameNode = endNode;

            while (lastNode != startNode) {
                finalPath.unshift(lastNode);
                lastNode = lastNode.state.parent;
            }

            finalPath.unshift(startNode);
        }
        //on retourne nos résultats
        return finalPath;
    }

    private _addToCloseList(param_node) {
    }

    private _addToOpenList(param_node) {
    }

    private _isOnOpenList(param_node) {
    }

    private _isOnCloseList(param_node) {
    }
}

export const NODE_DISTANCE_VALUE = 10;