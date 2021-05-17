import { Graph, GraphvizConfig } from './types';
import _graph from './output/graph.json';
import { toGraphvizString } from './dotUtil';

import * as fs from 'fs';

const toSuccessMessage = (): void => console.log(`Wrote graphviz output to ${OUTFILE}`);
const OUTFILE: string = './src/output/graph.dot';

const GRAPHVIZ_CONFIG: GraphvizConfig = {
  nodeOptions: {
    width: 5,
  },
  linkOptions: {
    width: 5,
  },
};

const graph = _graph as Graph;
const graphvizString = toGraphvizString(graph, GRAPHVIZ_CONFIG);

fs.writeFile(OUTFILE, graphvizString, toSuccessMessage);