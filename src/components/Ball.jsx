import React from 'react'

export const Ball = ({ ballDeg, ballPlace }) => {
  const handleBallPlace = () => {
    const up = -30
    const down = 10
    return (ballPlace === "up") ? up : down
  }
  return (
    <div style={{ position: "absolute", height: "150px", left: '50%', translate: "-50% 0%", rotate: `${(ballDeg)}deg`, transformOrigin: "bottom" }}>
      <div className='bg-white' style={{ width: "15px", height: "15px", borderRadius: "50%", translate: `0 ${handleBallPlace()}px`, transition: ".3s" }}></div>
    </div>
  )
}
