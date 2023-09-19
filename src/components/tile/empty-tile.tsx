import CSS from 'csstype';

interface EmptyTileParam {
  style?: CSS.Properties;
}

export default function EmptyTile({ style = {} }: EmptyTileParam) {
  return (
    <div
      style={style}
      className="w-16 h-16rounded flex items-center justify-center text-white text-4xl transition-transform"
    >
      😈
    </div>
  );
}
