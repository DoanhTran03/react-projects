import React, { useState } from 'react'
import CategoryTab from './CategoryTab'
import MenuGrid from './MenuGrid'
import dishes from "../data/data"
const categories = ["All", ...new Set(dishes.map(dish => dish.category))];

export interface Dish {
  id: number;
  title: string;
  desc: string;
  price: number;
  img: string;
  category: string;
}

const Menu = () => {
  const [selectedCat,setSelectedCat] = useState<String>("All");
  const changeCat = (category: String) => {
    setSelectedCat(category);
  } 
  let shownDishes = [];
  if (selectedCat === "All") {
    shownDishes = dishes;
  }
  else {
    shownDishes = dishes.filter(dish => dish.category === selectedCat);
  }
  return (
    <div className='menu'>
        <div className="menu__heading">
            <h1>Our Menu</h1>
            <div className="line"></div>
        </div>
        <CategoryTab clickHandle={changeCat} categories={categories}></CategoryTab>
        <MenuGrid dishes={shownDishes}></MenuGrid>
    </div>
  )
}

export default Menu