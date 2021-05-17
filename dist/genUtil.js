"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGraph = exports.toLinks = exports.toNodes = void 0;
const toCombinations = (xs) => {
    return xs.flatMap((x, i) => {
        return xs.slice(i + 1).map((y) => ([x, y]));
    });
};
const toAllPossibleLinks = (nodes) => {
    return toCombinations(nodes);
};
const toNodes = (N) => {
    return Array.from({ length: N }, (_, ix) => ix);
};
exports.toNodes = toNodes;
const toLinks = (nodes, p) => {
    const possibleLinks = toAllPossibleLinks(nodes);
    const links = possibleLinks.reduce((existingLinks, possibleLink) => {
        const randomFactor = Math.random();
        if (randomFactor < p)
            return [...existingLinks, possibleLink];
        return existingLinks;
    }, []);
    return links;
};
exports.toLinks = toLinks;
const toGraph = (nodes, links) => {
    return {
        nodes,
        links,
    };
};
exports.toGraph = toGraph;
//# sourceMappingURL=genUtil.js.map