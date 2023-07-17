import React from 'react'
import BudItem from './BudItem'
import BudForm from './BudForm'

const BudGrid = () => {
  return (
    <div className='budGrid'>
            <BudForm></BudForm>
        <div className="budGrid__items">
            <BudItem></BudItem>
            <BudItem></BudItem>
            <BudItem></BudItem>
            <BudItem></BudItem>
        </div>
        <button className='budGrid__clearBtn'>Clear Item</button>
    </div>
  )
}

export default BudGrid