import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
const BudItem = () => {
  return (
    <div className='budItem'>
        <p className='budItem__name'>Clean the house</p>
        <div className="budItem__buttons">
            <button className="edit"><FaEdit></FaEdit></button>
            <button className="trash"><FaTrash></FaTrash></button>
        </div>
    </div>
  )
}

export default BudItem