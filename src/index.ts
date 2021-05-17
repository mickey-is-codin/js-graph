import { GraphNode, GraphLink } from './types';
import { toNodes, toLinks } from './graphGen';

// Main
const N: number = 5;
const p: number = (.5) * (1/N);
// const p = (1/N);
// const p = (1.25) * (1/N);

const nodes: GraphNode[] = toNodes(N);
const links: GraphLink[] = toLinks(nodes, p);
console.log(links);