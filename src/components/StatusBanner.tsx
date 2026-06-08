import clsx from 'clsx';
import type { Player, GameStatus } from '@/types';

type StatusBannerProps = {
  status: GameStatus;
  winner: Player | null;
  currentPlayer: Player;
};

export default function StatusBanner({ status, winner, currentPlayer }: StatusBannerProps) {
  let message = '';
  let subMessage = '';

  if (status === 'won' && winner) {
    message = `Player ${winner} Wins! 🎉`;
    subMessage = 'Click "New Game" to play again';
  } else if (status === 'draw') {
    message = "It's a Draw! 🤝";
    subMessage = 'Click "New Game" to play again';
  } else {
    message = `Player ${currentPlayer}'s Turn`;
    subMessage = currentPlayer === 'X' ? 'Make your move!' : 'Your turn!';
  }

  return (
    <div
      className={clsx(
        'mb-6 px-8 py-3 rounded-full text-center transition-all duration-300',
        {
          'bg-yellow-400/20 border border-yellow-400/60 text-yellow-200': status === 'won',
          'bg-blue-400/20 border border-blue-400/60 text-blue-200': status === 'draw',
          'bg-blue-900/40 border border-blue-700/40 text-blue-100': status === 'playing',
        }
      )}
    >
      <p className="text-lg font-bold">{message}</p>
      <p className="text-xs text-blue-300/80 mt-0.5">{subMessage}</p>
    </div>
  );
}
