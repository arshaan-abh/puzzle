import { PuzzleTile } from '../@types/puzzle-tile.ts';
import { TRANSITION_DURATION } from '../constants/transition.ts';
import { Matrix } from '../@types/matrix.ts';

export enum TransformType {
  swapUpperCell,
  swapRightCell,
  swapBottomCell,
  swapLeftCell,
}

export default function matrixCellTransform(
  matrix: Matrix<PuzzleTile>,
  row: number,
  column: number,
  transformType: TransformType,
): Matrix<PuzzleTile> {
  // Clone the original matrix to avoid mutating it directly
  const clonedMatrix = matrix.map((row) => [...row]);

  for (const row of clonedMatrix) {
    for (const cell of row) {
      cell.style = { ...{ transitionDuration: `${TRANSITION_DURATION}ms` } };
    }
  }

  if (transformType === TransformType.swapUpperCell) {
    clonedMatrix[row][column].style = { ...{ transform: 'translateY(calc(-100% - 1rem))' } };
    clonedMatrix[row - 1][column].style = { ...{ transform: 'translateY(calc(100% + 1rem))' } };
  } else if (transformType === TransformType.swapRightCell) {
    clonedMatrix[row][column].style = { ...{ transform: 'translateX(calc(100% + 1rem))' } };
    clonedMatrix[row][column + 1].style = { ...{ transform: 'translateX(calc(-100% - 1rem))' } };
  } else if (transformType === TransformType.swapBottomCell) {
    clonedMatrix[row][column].style = { ...{ transform: 'translateY(calc(100% + 1rem))' } };
    clonedMatrix[row + 1][column].style = { ...{ transform: 'translateY(calc(-100% - 1rem))' } };
  } else if (transformType === TransformType.swapLeftCell) {
    clonedMatrix[row][column].style = { ...{ transform: 'translateX(calc(-100% - 1rem))' } };
    clonedMatrix[row][column - 1].style = { ...{ transform: 'translateX(calc(100% + 1rem))' } };
  }

  return clonedMatrix;
}
