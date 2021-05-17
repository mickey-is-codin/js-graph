import { GraphNode, GraphLink } from './types';

const toCombinations = (xs: any[]): any[] => {
  return xs.flatMap((x, i) => {
    return xs.slice(i + 1).map((y) => ([x, y]));
  });
};

const toAllPossibleLinks = (nodes: GraphNode[]): GraphLink[] => {
  return toCombinations(nodes);
};

export const toNodes = (N: number): GraphNode[] => {
  return Array.from({ length: N }, (_, ix: number) => ix);
};

export const toLinks = (nodes: GraphNode[], p: number): GraphLink[] => {
  const possibleLinks = toAllPossibleLinks(nodes);
  return possibleLinks;
};