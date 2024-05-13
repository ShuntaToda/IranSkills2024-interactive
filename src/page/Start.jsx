import React from 'react'
import { Btn } from '../components/Btn'

export const Start = ({ setMode }) => {
  const bestPoint = 45
  return (
    <div style={{ height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div className='my-3rem'>
        <h1 className='fs-4rem' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className='color-black'>TRICKY</div>
          <div className='color-white'>RING</div>
        </h1>
      </div>
      <div className='my-3rem'>
        <div className='fs-4rem' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className='color-black'>BEST</div>
          <div className='color-black'>{bestPoint}</div>
        </div>
      </div>
      <Btn setMode={setMode} modeText={"game"} />
    </div >
  )
}
