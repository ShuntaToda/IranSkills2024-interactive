import React, { useEffect, useState } from 'react'
import { Ball } from '../components/Ball'
import { Point } from '../components/Point'
import { Wall } from './Wall'

export const Game = ({ setMode, mode, score, setScore }) => {
  const [ballDeg, setBallDeg] = useState(360)
  const [ballPlace, setBallPlace] = useState("up")
  const [pointDeg, setPointDeg] = useState(180)
  const [pointPlace, setPointPlace] = useState("up")
  const [walls, setWalls] = useState([])

  const createWall = () => {
    const wallPlace = Math.random() > 0.5 ? "up" : "down"
    return { wallDeg: Math.floor(Math.random() * 360), wallPlace }
  }
  const handleKeyDown = (key) => {
    ballPlace !== "up" ? setBallPlace("up") : setBallPlace("down")
  }

  const replacePoint = () => {
    pointPlace !== "up" ? setPointPlace("up") : setPointPlace("down")
    setPointDeg(Math.floor(Math.random() * 360))

  }

  const checkPoint = () => {
    if (ballDeg - 5 < pointDeg && ballDeg + 5 > pointDeg && pointPlace === ballPlace) {
      setScore(s => s + 1)
      let wallsResult = []
      for (let i = 0; i < Math.floor((Math.random() * 8)) + 3; i++) {
        wallsResult = [...wallsResult, createWall()]
      }
      setWalls([...wallsResult])
      replacePoint()
    }
  }
  const checkWall = () => {
    walls.forEach((wall) => {
      if (ballDeg - 5 < wall.wallDeg && ballDeg + 5 > wall.wallDeg && wall.wallPlace === ballPlace) {
        setMode("end")
      }
    })
  }

  useEffect(() => {
    setWalls([createWall(), createWall(), createWall()])
    setScore(0)
  }, [mode])

  useEffect(() => {
    if (mode !== "game") return
    const interval = setInterval(() => {
      if (0 > ballDeg) return setBallDeg(360)
      checkPoint()
      checkWall()
      setBallDeg(deg => deg - (1 + ((Math.floor(score / 20)) * 0.2)))

    }, 1000 / 60)
    return () => clearInterval(interval)
  }, [ballDeg, mode])

  useEffect(() => {
    if (mode !== "game") return
    document.addEventListener("keypress", handleKeyDown)

    return () => document.removeEventListener("keypress", handleKeyDown)

  }, [ballDeg])
  return (
    <div style={{ height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: "relative" }}>
      <div className='color-white' style={{ padding: "10px 20px", position: "absolute", top: 0, left: "100%", translate: "-100%" }}>
        <div className='fs-4rem'>{score}</div>
      </div>
      <div className='' style={{ width: "300px", height: "300px", border: "7px black solid", borderRadius: "50%", position: "relative" }}>
        <Ball ballDeg={ballDeg} ballPlace={ballPlace} />
        <Point pointPlace={pointPlace} pointDeg={pointDeg} />
        {walls.map((wall, index) => <Wall key={index} wallDeg={wall.wallDeg} wallPlace={wall.wallPlace} />)}
      </div>
    </div>
  )
}
