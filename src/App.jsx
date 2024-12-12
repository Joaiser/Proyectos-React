import { useState, useEffect } from 'react'
import './App.css'

const FollowMouse = ({ followMouseEnabled }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      if (!followMouseEnabled) return
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    window.addEventListener('pointermove', handleMove)

    // Definición de cleanup dentro de useEffect
    const cleanup = () => {
      window.removeEventListener('pointermove', handleMove)
    }

    // Uso de cleanup en el return de useEffect
    return cleanup
  }, [followMouseEnabled])

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  )
}

function App() {
  const [followMouseEnabled, setFollowMouseEnabled] = useState(false)
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      <h1>Proyecto 3</h1>
      {mounted && <FollowMouse followMouseEnabled={followMouseEnabled} />}
      <button onClick={() => setFollowMouseEnabled(!followMouseEnabled)}>
        {followMouseEnabled ? 'Desactivar' : 'Activar'} Seguir Puntero
      </button>
      <button onClick={() => setMounted(!mounted)}>
        {mounted ? 'Desmontar' : 'Montar'} Componente FollowMouse
      </button>
    </main>
  )
}

export default App