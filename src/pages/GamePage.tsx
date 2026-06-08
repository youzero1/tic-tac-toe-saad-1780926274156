import { useGame } from '@/hooks/useGame';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import StatusBanner from '@/components/StatusBanner';
import { RotateCcw, Trash2 } from 'lucide-react';

export default function GamePage() {
  const { state, handleCellClick, resetGame, resetAll } = useGame();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}
    >
      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Tic<span className="text-blue-400">-</span>Tac<span className="text-blue-400">-</span>Toe
        </h1>
        <p className="mt-2 text-blue-300 text-sm tracking-widest uppercase">
          Two Player Game
        </p>
      </div>

      {/* Score Board */}
      <ScoreBoard
        scoreX={state.scoreX}
        scoreO={state.scoreO}
        draws={state.draws}
        currentPlayer={state.currentPlayer}
        status={state.status}
      />

      {/* Status Banner */}
      <StatusBanner
        status={state.status}
        winner={state.winner}
        currentPlayer={state.currentPlayer}
      />

      {/* Board */}
      <Board
        board={state.board}
        winningLine={state.winningLine}
        onCellClick={handleCellClick}
        status={state.status}
      />

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={resetGame}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-900/50"
        >
          <RotateCcw size={18} />
          New Game
        </button>
        <button
          onClick={resetAll}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 border border-blue-600 hover:bg-blue-900/40 active:bg-blue-900/60 transition-all duration-200"
        >
          <Trash2 size={18} />
          Reset Scores
        </button>
      </div>
    </div>
  );
}
