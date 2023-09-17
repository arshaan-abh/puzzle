import { useState } from 'react';
import Tile from '@components/tile/tile.tsx';
import EmptyTile from '@components/tile/empty-tile.tsx';
import matrixCellSwap from '../../utils/matrix-cell-swap.ts';
import generateUniqueRandomMatrix from '../../utils/generate-random-matrix.ts';
import { getLeftCell, getLowerCell, getRightCell, getUpperCell } from '../../utils/relative-matrix-cell.ts';

export default function Home() {
  const rows: number = 4;
  const columns: number = 4;
  const emptyCell: number = rows * columns;

  const [matrix, setMatrix] = useState<number[][] | null>(generateUniqueRandomMatrix(rows, columns));

  function handleClick(row: number, col: number) {
    if (getUpperCell(matrix, row, col) === emptyCell)
      setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row - 1, col));
    else if (getRightCell(matrix, row, col) === emptyCell)
      setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row, col + 1));
    else if (getLowerCell(matrix, row, col) === emptyCell)
      setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row + 1, col));
    else if (getLeftCell(matrix, row, col) === emptyCell)
      setMatrix((prevMatrix) => matrixCellSwap(prevMatrix, row, col, row, col - 1));
  }

  if (matrix === null) {
    return <div className="flex items-center justify-center text-red-500">There is a problem with the matrix.</div>;
  }

  return (
    <div className={`grid grid-cols-${rows} gap-4`}>
      {matrix.map((row, rowIndex) =>
        row.map((cell, columnIndex) => {
          if (cell === emptyCell) return <EmptyTile key={emptyCell} />;
          else return <Tile number={cell} onClick={() => handleClick(rowIndex, columnIndex)} key={cell}></Tile>;
        }),
      )}
    </div>
  );
}
