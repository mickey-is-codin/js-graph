import { GraphNode, GraphLink } from './types';
import { toNodes, toLinks } from './graphGen';

// Main
const N: number = 5;
const p: number = (.5) * (1/N);
// const p: number = (1/N);
// const p: number = (1.25) * (1/N);
// const p: number = 0;
// const p: number = 1;

const nodes: GraphNode[] = toNodes(N);
const links: GraphLink[] = toLinks(nodes, p);