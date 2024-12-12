import { Square } from './square.jsx'

export function GameBoard({ board, updateBoard }) {
  return (
    <section className='game'>
      {
        board.map((value, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {value}
            </Square>
          )
        })
      }
    </section>
  )
}