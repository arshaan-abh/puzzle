import { Matrix } from '../@types/matrix.ts';

export default function isMatrixSorted<T>(matrix: Matrix<T> | null, elementGenerator: (index: T) => number): boolean {
  if (matrix === null) return false;

  // Initialize the expected value to 1
  let expectedValue = 1;

  // Iterate through the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // If the current element is not equal to the expected value, return false
      if (elementGenerator(matrix[i][j]) !== expectedValue) {
        return false;
      }

      // Increment the expected value
      expectedValue++;
    }
  }

  // If all elements are in the expected order, return true
  return true;
}
