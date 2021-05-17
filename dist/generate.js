"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const genUtil_1 = require("./genUtil");
const fs = __importStar(require("fs"));
const toSuccessMessage = () => console.log(`Random graph written to ${OUTFILE}`);
// Main
const N = 5;
const OUTFILE = './src/output/graph.json';
// const p: number = (.5) * (1/N);
// const p: number = (1/N);
// const p: number = (1.25) * (1/N);
// const p: number = 0;
const p = 1;
const nodes = genUtil_1.toNodes(N);
const links = genUtil_1.toLinks(nodes, p);
const graph = genUtil_1.toGraph(nodes, links);
fs.writeFile(OUTFILE, JSON.stringify(graph), toSuccessMessage);
//# sourceMappingURL=generate.js.map