import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/square.jsx'
import { TURNS } from './constants.js'
import { checkWinner } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { GameBoard } from './components/GameBoard.jsx'

function App() {
  const [board, setBoard] = useState(()=>{
    const savedBoard = window.localStorage.getItem('board')
    if (savedBoard) { return JSON.parse(savedBoard) }
    return Array(9).fill(null)})
    
  const [turn, setTurn] = useState(()=>{
    const savedTurn = window.localStorage.getItem('turn')
    if (savedTurn) { return savedTurn }
    return TURNS.X}
  )
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))  
    setTurn(TURNS.X)
    setWinner(null) 

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = index => {
    //si ya tiene algo el tablero
    if (board[index] || winner) return
    //actualizar el tablero
    let newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    //comprobar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)  
    } else if (newWinner === null && !newBoard.includes(null)) {
      setWinner(false)
    } else {
      //cambiar el turno solo si no hay ganador
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn)
      window.localStorage.setItem('turn', newTurn)
    }
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>
        Reset del juego</button>
        <GameBoard board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn===TURNS.X}>{TURNS.X}
        </Square>
        <Square isSelected={turn===TURNS.O}>{TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App