import React from 'react'

export const Wall = ({ wallPlace, wallDeg }) => {
  const handleWallPlace = () => {
    const up = -40
    const down = -2
    return (wallPlace === "up") ? up : down
  }
  return (
    <div style={{ position: "absolute", height: "150px", left: '50%', translate: "-50% 0%", rotate: `${(wallDeg)}deg`, transformOrigin: "bottom" }}>
      <div className='bg-black' style={{ width: "10px", height: "40px", translate: `0 ${handleWallPlace()}px`, transition: ".3s" }}></div>
    </div>
  )
}
