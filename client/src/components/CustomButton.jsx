import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'

const CustomButton = ({handleClick, type, title, customStyles}) => {

  const snap = useSnapshot(state)

  const generateStyle = (type) => {
    if (type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: '#fff'

      }
    }
  }
  return (
    <button className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style = {generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
