import React from 'react'

export const Btn = ({ setMode, modeText }) => {
  return (
    <div className='fs-4rem bg-secondary my-3rem' style={{ color: 'white', width: "80%", textAlign: 'center', borderRadius: "10px" }}>
      <div onClick={() => setMode(modeText)}>{"=>"}</div>
    </div>
  )
}
