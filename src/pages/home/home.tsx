import { useCallback, useEffect, useState } from 'react';
import Tile from '@components/tile/tile.tsx';
import EmptyTile from '@components/tile/empty-tile.tsx';
import matrixCellSwap from '../../utils/matrix-cell-swap.ts';
import generateUniqueRandomMatrix from '../../utils/generate-random-matrix.ts';
import { getLeftCell, getLowerCell, getRightCell, getUpperCell } from '../../utils/relative-matrix-cell.ts';
import isMatrixSorted from '../../utils/is-matrix-sorted.ts';
import ConfettiExplosion from 'react-confetti-explosion';
import { Matrix } from '../../@types/matrix.ts';
import { PuzzleTile } from '../../@types/puzzle-tile.ts';
import matrixCellTransform, { TransformType } from '../../utils/matrix-cell-transform.ts';
import { TRANSITION_DURATION } from '../../constants/transition.ts';

export default function Home() {
  const rows = 4;
  const columns = rows;
  const emptyCell: PuzzleTile = { number: rows * columns };

  const [matrix, setMatrix] = useState<Matrix<PuzzleTile>>(
    generateUniqueRandomMatrix(rows, columns, (number) => {
      return { number: number };
    }),
  );

  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (
      isMatrixSorted<PuzzleTile>(matrix, (index) => {
        return index.number;
      })
    ) {
      setIsExploding(true);
      return () => setIsExploding(false);
    }
  }, [matrix]);

  const handleClick = useCallback(
    (row: number, col: number) => {
      if (getUpperCell(matrix, row, col)?.number === emptyCell.number) {
        setMatrix((prevMatrix) => matrixCellTransform(prevMatrix, row, col, TransformType.swapUpperCell));
        setTimeout(() => {
          setMatrix((prevMatrix) =>
            matrixCellSwap(
              prevMatrix,
              row,
              col,
              row - 1,
              col,
              (transform, cell) => (cell.style = { ...{ transform: transform } }),
              (transitionDuration, cell) => (cell.style = { ...{ transitionDuration: transitionDuration } }),
            ),
          );
        }, TRANSITION_DURATION);
      } else if (getRightCell(matrix, row, col)?.number === emptyCell.number) {
        setMatrix((prevMatrix) => matrixCellTransform(prevMatrix, row, col, TransformType.swapRightCell));
        setTimeout(() => {
          setMatrix((prevMatrix) =>
            matrixCellSwap(
              prevMatrix,
              row,
              col,
              row,
              col + 1,
              (transform, cell) => (cell.style = { ...{ transform: transform } }),
              (transitionDuration, cell) => (cell.style = { ...{ transitionDuration: transitionDuration } }),
            ),
          );
        }, TRANSITION_DURATION);
      } else if (getLowerCell(matrix, row, col)?.number === emptyCell.number) {
        setMatrix((prevMatrix) => matrixCellTransform(prevMatrix, row, col, TransformType.swapBottomCell));
        setTimeout(() => {
          setMatrix((prevMatrix) =>
            matrixCellSwap(
              prevMatrix,
              row,
              col,
              row + 1,
              col,
              (transform, cell) => (cell.style = { ...{ transform: transform } }),
              (transitionDuration, cell) => (cell.style = { ...{ transitionDuration: transitionDuration } }),
            ),
          );
        }, TRANSITION_DURATION);
      } else if (getLeftCell(matrix, row, col)?.number === emptyCell.number) {
        setMatrix((prevMatrix) => matrixCellTransform(prevMatrix, row, col, TransformType.swapLeftCell));
        setTimeout(() => {
          setMatrix((prevMatrix) =>
            matrixCellSwap(
              prevMatrix,
              row,
              col,
              row,
              col - 1,
              (transform, cell) => (cell.style = { ...{ transform: transform } }),
              (transitionDuration, cell) => (cell.style = { ...{ transitionDuration: transitionDuration } }),
            ),
          );
        }, TRANSITION_DURATION);
      }
    },
    [matrix, emptyCell.number],
  );

  return (
    <div className="relative grid grid-cols-1 gap-4" style={{ gridTemplateColumns: `repeat(${rows}, minmax(0, 1fr))` }}>
      {matrix.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          if (cell.number === emptyCell.number) return <EmptyTile style={cell.style} key={emptyCell.number} />;
          return (
            <Tile
              style={cell.style}
              number={cell.number}
              onClick={() => handleClick(rowIndex, columnIndex)}
              key={cell.number}
            />
          );
        }),
      )}
      {isExploding && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ConfettiExplosion force={0.75} particleCount={200} />
        </div>
      )}
    </div>
  );
}

// todo disable click handler when mid animation
// todo make the gap dynamic
