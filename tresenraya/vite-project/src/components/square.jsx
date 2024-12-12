export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard()
  }
  
    return (
      <div className={className} onClick={() => updateBoard(index)}>
        {children}
      </div>
    )
  }