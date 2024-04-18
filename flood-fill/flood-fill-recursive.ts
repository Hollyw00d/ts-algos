type Matrix = number[][];

// const directions: [number, number][] = [
const directions: [number, number][] = [
  [1, 0], // down
  [-1, 0], // up
  [0, 1], // right
  [0, -1] // left
];

function floodFill(matrix: Matrix, r: number, c: number, val: number): Matrix {
  const oldVal = matrix[r][c];
  const modified = oldVal !== val;

  if (modified) {
    // we only need to do work if the color is not yet set
    // this prevents infinite loops
    matrix[r][c] = val;

    for (const [dR, dC] of directions) {
      // this might be out of bounds
      // use optional chaining short
      if (matrix[r + dR]?.[c + dC] === oldVal) {
        floodFill(matrix, r + dR, c + dC, val);
      }
    }
  }

  return matrix;
  // return modified;
}

const matrix = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 2, 2]
];

console.log(floodFill(matrix, 1, 1, 3));