import clsx from 'clsx';
import type { Player, GameStatus } from '@/types';

type ScoreBoardProps = {
  scoreX: number;
  scoreO: number;
  draws: number;
  currentPlayer: Player;
  status: GameStatus;
};

export default function ScoreBoard({ scoreX, scoreO, draws, currentPlayer, status }: ScoreBoardProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Player X */}
      <div
        className={clsx(
          'flex flex-col items-center px-6 py-3 rounded-xl border-2 transition-all duration-300',
          status === 'playing' && currentPlayer === 'X'
            ? 'bg-blue-600/40 border-blue-400 shadow-lg shadow-blue-500/30'
            : 'bg-blue-950/60 border-blue-800/40'
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Player X</span>
        <span className="text-3xl font-extrabold text-white">{scoreX}</span>
      </div>

      {/* Draws */}
      <div className="flex flex-col items-center px-4 py-3 rounded-xl border-2 bg-blue-950/40 border-blue-900/40">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Draws</span>
        <span className="text-3xl font-extrabold text-blue-300">{draws}</span>
      </div>

      {/* Player O */}
      <div
        className={clsx(
          'flex flex-col items-center px-6 py-3 rounded-xl border-2 transition-all duration-300',
          status === 'playing' && currentPlayer === 'O'
            ? 'bg-blue-600/40 border-blue-400 shadow-lg shadow-blue-500/30'
            : 'bg-blue-950/60 border-blue-800/40'
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-1">Player O</span>
        <span className="text-3xl font-extrabold text-white">{scoreO}</span>
      </div>
    </div>
  );
}
