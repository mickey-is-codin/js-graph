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
  const possibleLinks: GraphLink[] = toAllPossibleLinks(nodes);
  const links: GraphLink[] = possibleLinks.reduce((existingLinks: GraphLink[], possibleLink: GraphLink) => {
    const randomFactor: number = Math.random();
    console.log('link ', possibleLink, ' ', randomFactor < p ? 'does ' : 'does not ', 'form');
    if (randomFactor < p) return [...existingLinks, possibleLink];
    return existingLinks;
  }, []);
  return links;
};