import clsx from 'clsx';
import type { CellValue } from '@/types';

type CellProps = {
  value: CellValue;
  index: number;
  isWinning: boolean;
  onClick: (index: number) => void;
  disabled: boolean;
};

export default function Cell({ value, index, isWinning, onClick, disabled }: CellProps) {
  const isEmpty = value === null;

  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled || !isEmpty}
      className={clsx(
        'w-24 h-24 sm:w-28 sm:h-28 rounded-xl flex items-center justify-center',
        'text-5xl font-extrabold transition-all duration-200 select-none',
        'border-2 focus:outline-none',
        {
          'bg-blue-900/80 border-blue-700/60 hover:bg-blue-800/80 hover:border-blue-500 cursor-pointer active:scale-95':
            isEmpty && !disabled,
          'bg-blue-900/50 border-blue-800/40 cursor-default': isEmpty && disabled,
          'bg-blue-800/60 border-blue-500 cursor-default': !isEmpty && !isWinning,
          'bg-blue-500/30 border-blue-300 shadow-lg shadow-blue-400/40 animate-pulse': isWinning,
        }
      )}
      aria-label={`Cell ${index + 1}${value ? `, ${value}` : ''}`}
    >
      {value && (
        <span
          className={clsx(
            'drop-shadow-md',
            {
              'text-white': value === 'X',
              'text-blue-300': value === 'O',
              'scale-110 text-yellow-200': isWinning,
            }
          )}
        >
          {value}
        </span>
      )}
    </button>
  );
}
