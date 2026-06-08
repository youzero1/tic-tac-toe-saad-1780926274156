import { useState, useCallback } from 'react';
import type { GameState, Player } from '@/types';
import { createEmptyBoard, checkWinner, checkDraw } from '@/lib/gameLogic';

function createInitialState(scoreX = 0, scoreO = 0, draws = 0): GameState {
  return {
    board: createEmptyBoard(),
    currentPlayer: 'X',
    status: 'playing',
    winner: null,
    winningLine: null,
    scoreX,
    scoreO,
    draws,
  };
}

export function useGame() {
  const [state, setState] = useState<GameState>(createInitialState());

  const handleCellClick = useCallback((index: number) => {
    setState((prev) => {
      if (prev.status !== 'playing') return prev;
      if (prev.board[index] !== null) return prev;

      const newBoard = [...prev.board];
      newBoard[index] = prev.currentPlayer;

      const { winner, line } = checkWinner(newBoard);

      if (winner) {
        return {
          ...prev,
          board: newBoard,
          status: 'won',
          winner,
          winningLine: line,
          scoreX: winner === 'X' ? prev.scoreX + 1 : prev.scoreX,
          scoreO: winner === 'O' ? prev.scoreO + 1 : prev.scoreO,
        };
      }

      if (checkDraw(newBoard)) {
        return {
          ...prev,
          board: newBoard,
          status: 'draw',
          winner: null,
          winningLine: null,
          draws: prev.draws + 1,
        };
      }

      const nextPlayer: Player = prev.currentPlayer === 'X' ? 'O' : 'X';
      return {
        ...prev,
        board: newBoard,
        currentPlayer: nextPlayer,
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setState((prev) =>
      createInitialState(prev.scoreX, prev.scoreO, prev.draws)
    );
  }, []);

  const resetAll = useCallback(() => {
    setState(createInitialState());
  }, []);

  return { state, handleCellClick, resetGame, resetAll };
}
