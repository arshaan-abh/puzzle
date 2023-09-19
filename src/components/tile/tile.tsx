import CSS from 'csstype';
import { MouseEventHandler } from 'react';

export interface TileParam {
  number: number;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  style?: CSS.Properties;
}

export default function Tile({ number, onClick, style = {} }: TileParam) {
  return (
    <div
      style={style}
      onClick={onClick}
      className="w-16 h-16 rounded bg-sky-500 flex items-center justify-center text-white transition-transform"
    >
      {number}
    </div>
  );
}
