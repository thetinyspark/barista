import { Grid2D } from "../../common/model/space/partitioning/grid";
import { GameNode } from "../model/node";

export default class PathFinder2D {
    private opened: GameNode[] = [];
    private closed: GameNode[] = [];

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
                graphe.addAt(row,col,node);
            }
        ); 

        return graphe;
    }

    public resetGraphe(graphe:Grid2D<GameNode>):void{
        this.opened = new Array();
        this.closed = new Array();
        graphe.forEach( 
            (node:GameNode, row:number, col:number)=>{

                if( node ){
                    node.state.row = row;
                    node.state.col = col;
                    node.state.g = 0;
                    node.state.f = 0;
                    node.state.h = 0;
                    node.state.parent = null;
                }
                
            }
        ); 
    }

    public findPath(graphe:Grid2D<GameNode>, startNode:GameNode, endNode:GameNode, allowDiagonals:boolean = false): GameNode[] {

        // on crée les listes fermées et les listes ouvertes
        this.opened = new Array();
        this.closed = new Array();

        // - Ajout du node de départ à la liste ouverte.

        this._addToOpenList(startNode);


        //  stopper la boucle si la liste ouverte est vide
        let hasNextStep: boolean = true;
        while (hasNextStep) {
            // a. Récupération du node avec le plus petit F contenu dans la liste ouverte. 
            // On le nommera CURRENT.
            this.opened.sort((a, b) => a.state.f < b.state.f ? -1 : 1);

            //  stopper la méthode si le liste ouverte est vide ou si le prochain noeud est le noeud d'arrivée
            if ( this.opened.length === 0 || this.opened[0] === endNode) {
                hasNextStep = false;
                break;
            }
            
            const currentNode = this.opened[0];

            // b. Basculer CURRENT dans la liste fermée.
            this._addToCloseList(currentNode);

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

            // Pour chacun des nodes adjacents à CURRENT appliquer la méthode suivante:
            nonEmpty.forEach(
                (node)=>{
                    //Si le node est un obstacle ou est dans la liste fermée ignorez-le et passer à l'analyse d'un autre node.
                    if (this._isOnCloseList(node) || !node.state || !node.state.walkable )
                        return;

                    const opened: boolean = this._isOnOpenList(node);

                    /* on calcule le nouveau g */
                    const newG = currentNode.state.g + NODE_DISTANCE_VALUE;

                    /*on calcule le nouveau h */
                    const newH = (Math.abs(endNode.state.row - node.state.row) + Math.abs(endNode.state.col - node.state.col)) * NODE_DISTANCE_VALUE;

                    /*on calcule le nouveau F*/
                    const newF = newH + newG;
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
                            this._addToOpenList(node);
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
        if (this.opened.length > 0) {
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

        const index = this.opened.indexOf(param_node);
        if (index > -1)
            this.opened.splice(index, 1);

        this.closed.push(param_node);
    }

    private _addToOpenList(param_node) {

        const index = this.closed.indexOf(param_node);
        if (index > -1)
            this.closed.splice(index, 1);

        this.opened.push(param_node);
    }

    private _isOnOpenList(param_node) {
        return this.opened.indexOf(param_node) > -1;
    }

    private _isOnCloseList(param_node) {
        return this.closed.indexOf(param_node) > -1;
    }
}

export const NODE_DISTANCE_VALUE = 10;