import { Matrix } from '../@types/matrix.ts';

export function getUpperCell<T>(matrix: Matrix<T>, row: number, col: number): T | null {
  if (row === 0) {
    return null; // Top edge
  }
  return matrix[row - 1][col];
}

export function getRightCell<T>(matrix: Matrix<T>, row: number, col: number): T | null {
  if (col === matrix[0].length - 1) {
    return null; // Right edge
  }
  return matrix[row][col + 1];
}

export function getLowerCell<T>(matrix: Matrix<T>, row: number, col: number): T | null {
  if (row === matrix.length - 1) {
    return null; // Bottom edge
  }
  return matrix[row + 1][col];
}

export function getLeftCell<T>(matrix: Matrix<T>, row: number, col: number): T | null {
  if (col === 0) {
    return null; // Left edge
  }
  return matrix[row][col - 1];
}
