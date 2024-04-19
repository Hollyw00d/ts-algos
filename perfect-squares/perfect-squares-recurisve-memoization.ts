let minSquares = (n: number): number[] => {
  if (n === 0) return [];

  const results: number[][] = [];
  for (let root = 1; root ** 2 <= n; root++) {
    // `square` is a square number
    // let's take this away from n and recurse with (n - square)
    const square = root ** 2;

    // each array of numbers is a candidate answer
    // we want to choose the shortest one
    results.push([square, ...minSquares(n - square)])
  }

  // choose the shortest result
  return results.sort((a, b) => a.length - b.length)[0];
}

function memoize<T>(f: (x: number) => T) {
  const cache: Map<number, T> = new Map();

  return (x: number) => {
    if (!cache.has(x)) cache.set(x, f(x));

    const result = cache.get(x);
    if (!result) throw new Error(); // show ts this is not a falsely value
    return result;
  };
}

minSquares = memoize(minSquares);

console.log(minSquares(8));