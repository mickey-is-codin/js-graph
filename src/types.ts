export type GraphNode = number;
export type GraphLink = [GraphNode, GraphNode];
export interface Graph {
  nodes: GraphNode[],
  links: GraphLink[],
}