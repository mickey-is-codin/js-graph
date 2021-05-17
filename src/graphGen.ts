const N: number = 50;
const p: number = (.5) * (1/N);
// const p = (1/N);
// const p = (1.25) * (1/N);

const toNodes = (N: number): number[] => {
  return Array.from({ length: N }, (x, ix) => ix);
};

const nodes: number[] = toNodes(N);

console.log('nodes: ', nodes);