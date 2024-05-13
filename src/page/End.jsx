import React from 'react'
import { Btn } from '../components/Btn'

export const End = ({ setMode, score }) => {
  const bestPoint = 45
  const currentPoint = 22
  return (
    <div style={{ height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div className='my-2rem'>
        <h1 style={{ fontSize: "5rem", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className='color-white'>{score}</div>
        </h1>
      </div>
      <div className='my-2rem'>
        <div className='fs-3rem' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className='color-black'>BEST</div>
          <div className='color-black'>{bestPoint}</div>
        </div>
      </div>
      <div className='my-2rem'>
        <div className='fs-3rem' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div>GAME <span className='color-white'>OVER!</span></div>
        </div>
      </div>
      <Btn setMode={setMode} modeText={"start"} />
    </div >
  )
}
