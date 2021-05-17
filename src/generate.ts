import { Graph, GraphNode, GraphLink } from './types';
import { toNodes, toLinks, toGraph } from './genUtil';
import * as fs from 'fs';

const toSuccessMessage = (): void => console.log(`Random graph written to ${OUTFILE}`);

// Main
const N: number = 5;
const OUTFILE: string = './src/output/graph.json';
// const p: number = (.5) * (1/N);
// const p: number = (1/N);
// const p: number = (1.25) * (1/N);
// const p: number = 0;
const p: number = 1;

const nodes: GraphNode[] = toNodes(N);
const links: GraphLink[] = toLinks(nodes, p);

const graph: Graph = toGraph(nodes, links);
fs.writeFile(
  OUTFILE,
  JSON.stringify(graph),
  toSuccessMessage,
);