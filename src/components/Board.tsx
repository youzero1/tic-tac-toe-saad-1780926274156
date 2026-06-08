import clsx from 'clsx';
import type { Board as BoardType, GameStatus } from '@/types';
import Cell from '@/components/Cell';

type BoardProps = {
  board: BoardType;
  winningLine: number[] | null;
  onCellClick: (index: number) => void;
  status: GameStatus;
};

export default function Board({ board, winningLine, onCellClick, status }: BoardProps) {
  return (
    <div
      className={clsx(
        'grid grid-cols-3 gap-3 p-4 rounded-2xl shadow-2xl',
        'bg-blue-950/60 border border-blue-700/40 backdrop-blur-sm'
      )}
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          index={index}
          isWinning={winningLine ? winningLine.includes(index) : false}
          onClick={onCellClick}
          disabled={status !== 'playing'}
        />
      ))}
    </div>
  );
}
