"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphGen_1 = require("./graphGen");
// Main
const N = 5;
// const p: number = (.5) * (1/N);
// const p = (1/N);
// const p = (1.25) * (1/N);
const p = 0;
const nodes = graphGen_1.toNodes(N);
const links = graphGen_1.toLinks(nodes, p);
//# sourceMappingURL=index.js.map