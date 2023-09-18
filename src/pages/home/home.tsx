import { useCallback, useEffect, useState } from 'react';
import Tile from '@components/tile/tile.tsx';
import EmptyTile from '@components/tile/empty-tile.tsx';
import matrixCellSwap from '../../utils/matrix-cell-swap.ts';
import generateUniqueRandomMatrix from '../../utils/generate-random-matrix.ts';
import { getLeftCell, getLowerCell, getRightCell, getUpperCell } from '../../utils/relative-matrix-cell.ts';
import isMatrixSorted from '../../utils/is-matrix-sorted.ts';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Home() {
  const rows = 2;
  const columns = rows;
  const emptyCell = rows * columns;

  const [matrix, setMatrix] = useState<number[][] | null>(generateUniqueRandomMatrix(rows, columns));

  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (isMatrixSorted(matrix)) {
      setIsExploding(true);
      return () => setIsExploding(false);
    }
  }, [matrix]);

  const handleClick = useCallback(
    (row: number, col: number) => {
      if (getUpperCell(matrix, row, col) === emptyCell)
        setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row - 1, col));
      else if (getRightCell(matrix, row, col) === emptyCell)
        setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row, col + 1));
      else if (getLowerCell(matrix, row, col) === emptyCell)
        setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row + 1, col));
      else if (getLeftCell(matrix, row, col) === emptyCell)
        setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row, col - 1));
    },
    [matrix, emptyCell],
  );

  if (matrix === null) {
    return <div className="flex items-center justify-center text-red-500">There is a problem with the matrix.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4" style={{ gridTemplateColumns: `repeat(${rows}, minmax(0, 1fr))` }}>
        {matrix.map((row, rowIndex) =>
          row.map((cell, columnIndex) => {
            if (cell === emptyCell) return <EmptyTile key={emptyCell} />;
            return <Tile number={cell} onClick={() => handleClick(rowIndex, columnIndex)} key={cell}></Tile>;
          }),
        )}
      </div>
      {isExploding && <ConfettiExplosion />}
    </>
  );
}

// todo use framer motion for animation
