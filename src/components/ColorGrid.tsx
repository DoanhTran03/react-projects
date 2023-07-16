import React from 'react'
import ColorItem from './ColorItem'
import Values from 'values.js';

interface Props {
  colors: Values[];
}

const ColorGrid = ({colors}: Props) => {
  console.log(colors);
  return (
    <div className='colorGrid'>
        
    </div>
  )
}

export default ColorGrid