import React from 'react'
import ColorItem from './ColorItem'
import Values from 'values.js';

interface Props {
  colors: Values[];
}

const ColorGrid = ({colors}: Props) => {
  return (
    <div className='colorGrid'>
        {colors.map((color, index)=> <ColorItem index={index} color={color} key={index}></ColorItem>)}
    </div>
  )
}

export default ColorGrid