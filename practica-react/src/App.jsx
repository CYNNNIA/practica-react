import React, { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [clickCount, setClickCount] = useState(0)

  const increaseCount = () => {
    setClickCount(clickCount + 1)
  }

  const decreaseCount = () => {
    setClickCount(clickCount - 1)
  }

  return (
    <div className='App'>
      <h1>Contador de Clicks</h1>
      <ShowCount clickCount={clickCount} />
      <div className='buttons'>
        <button onClick={increaseCount}>Incrementar</button>
        <button onClick={decreaseCount}>Decrementar</button>
      </div>
    </div>
  )
}

export default App
