import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {

  const snap = useSnapshot(state)

  return (
    <div className='absolute ml-3 left-full'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          '#000000', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff'
        ]}
       />
    </div>
  )
}

export default ColorPicker
