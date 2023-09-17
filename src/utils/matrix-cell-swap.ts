export default function matrixCellSwap<T>(
  matrix: T[][] | null,
  row1: number,
  col1: number,
  row2: number,
  col2: number,
): T[][] | null {
  if (matrix === null) return null;

  // Clone the original matrix to avoid mutating it directly
  const clonedMatrix = matrix.map((row) => [...row]);

  // Swap the cells
  const temp = clonedMatrix[row1][col1];
  clonedMatrix[row1][col1] = clonedMatrix[row2][col2];
  clonedMatrix[row2][col2] = temp;

  return clonedMatrix;
}
