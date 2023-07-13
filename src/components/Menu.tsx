import React from 'react'
import CategoryTab from './CategoryTab'
import MenuGrid from './MenuGrid'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="menu__heading">
            <h1>Our Menu</h1>
            <div className="line"></div>
        </div>
        <CategoryTab></CategoryTab>
        <MenuGrid></MenuGrid>
    </div>
  )
}

export default Menu