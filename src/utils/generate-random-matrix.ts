import { Matrix } from '../@types/matrix.ts';

export default function generateUniqueRandomMatrix<T>(
  rows: number,
  columns: number,
  generateCell: (number: number) => T,
): Matrix<T> {
  if (rows <= 0 || columns <= 0) {
    throw 'Invalid matrix dimensions';
  }

  if (rows * columns < Math.max(rows, columns)) {
    throw 'Matrix dimensions too large, causing potential infinite loop';
  }

  const totalElements = rows * columns;

  // Create a one-dimensional array of unique numbers from 1 to totalElements
  const uniqueNumbers = Array.from({ length: totalElements }, (_, i) => i + 1);
  for (let i = uniqueNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueNumbers[i], uniqueNumbers[j]] = [uniqueNumbers[j], uniqueNumbers[i]]; // Shuffle the array
  }

  // Initialize the matrix
  const matrix: Matrix<T> = [];
  let index = 0;

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];

    for (let j = 0; j < columns; j++) {
      matrix[i][j] = generateCell(uniqueNumbers[index++]);
    }
  }

  return matrix;
}
