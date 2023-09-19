import { Matrix } from '../@types/matrix.ts';

export default function matrixCellSwap<T>(
  matrix: Matrix<T>,
  row1: number,
  col1: number,
  row2: number,
  col2: number,
  setTransform: (transform: string, cell: T) => void,
  setTransitionDuration: (transitionDuration: string, cell: T) => void,
): Matrix<T> {
  // Clone the original matrix to avoid mutating it directly
  const clonedMatrix = matrix.map((row) => [...row]);

  // Swap the cells
  const temp = clonedMatrix[row1][col1];
  clonedMatrix[row1][col1] = clonedMatrix[row2][col2];
  clonedMatrix[row2][col2] = temp;

  for (const row of clonedMatrix) {
    for (const cell of row) {
      setTransform('translate(0, 0)', cell);
      setTransitionDuration('0ms', cell);
    }
  }

  return clonedMatrix;
}
