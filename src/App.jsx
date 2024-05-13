import { useState } from 'react'
import './App.css'
import { Start } from './page/Start'
import { End } from './page/End'
import { Game } from './page/Game'

function App() {
  const [mode, setMode] = useState("start")
  const [score, setScore] = useState(0)

  const modeNum = () => {
    switch (mode) {
      case "start":
        return 0
      case "game":
        return 100
      case "end":
        return 200
    }
  }
  return (
    <div className='bg-primary' style={{ width: "100vw", height: "100vh", overflow: 'hidden' }}>
      <div style={{ width: "100%", height: "100%", translate: `0 -${modeNum()}%`, transition: "1s" }}>
        <Start setMode={setMode} />
        <Game setMode={setMode} mode={mode} score={score} setScore={setScore} />
        <End setMode={setMode} score={score} />
      </div>
    </div>
  )
}

export default App
