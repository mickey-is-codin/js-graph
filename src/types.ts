// Generate
export type GraphNode = number;
export type GraphLink = [GraphNode, GraphNode];
export interface Graph {
  nodes: GraphNode[],
  links: GraphLink[],
}

// Display
export interface NodeOptions {
  width: number;
}

export interface LinkOptions {
  width: number;
}

export interface GraphvizConfig {
  nodeOptions: NodeOptions,
  linkOptions: LinkOptions,
}