import { MouseEventHandler } from 'react';

export type TileType = {
  number: number;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
};
export default function Tile({ number, onClick }: TileType) {
  return (
    <div onClick={onClick} className="w-16 h-16 rounded bg-sky-500 flex items-center justify-center text-white">
      {number}
    </div>
  );
}
