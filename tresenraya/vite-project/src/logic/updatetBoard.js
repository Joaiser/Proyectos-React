import { checkWinner } from './checkWinner.js'
import confetti from 'canvas-confetti'
import { TURNS } from './constants.js'

export const updateBoard = (index, board, winner, turn, setBoard, setWinner, setTurn) => {
    //si ya tiene algo el tablero
    if (board[index] || winner) return
    //actualizar el tablero
    let newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //comprobar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)  
    } else if (newWinner === null && !newBoard.includes(null)) {
      setWinner(false)
    } else {
      //cambiar el turno solo si no hay ganador
      setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)
    }
}