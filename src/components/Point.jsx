import React from 'react'

export const Point = ({ pointPlace, pointDeg }) => {
  const handlePointPlace = () => {
    const up = -30
    const down = 10
    return (pointPlace === "up") ? up : down
  }
  return (
    <div style={{ position: "absolute", height: "150px", left: '50%', translate: "-50% 0%", rotate: `${(pointDeg)}deg`, transformOrigin: "bottom" }}>
      <div className='bg-white' style={{ width: "15px", height: "15px", translate: `0 ${handlePointPlace()}px`, transition: ".3s" }}></div>
    </div>
  )
}
