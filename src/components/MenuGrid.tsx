import React from 'react'
import FoodItem from './FoodItem'
import { Dish } from './Menu'
interface Props {
  dishes: Dish[];
}
const MenuGrid = ({dishes} : Props) => {
  return (
    <div className='menuGrid'>
        {dishes.map(dish => <FoodItem dish={dish}></FoodItem>)}
    </div>
  )
}

export default MenuGrid