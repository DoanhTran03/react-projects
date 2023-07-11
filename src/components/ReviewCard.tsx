import React from 'react'
import ImageContainer from './ImageContainer'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const ReviewCard = () => {
  return (
      <div className="reviewCard">
          <ImageContainer></ImageContainer>
          <h3>Harry John</h3>
          <p className='reviewCard__title'>HR</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo error eligendi est a ab ducimus consequatur perspiciatis hic culpa quia doloribus, facere quod neque temporibus repellendus in blanditiis veritatis.</p>
          <div className="reviewCard__buttons">
              <button className='reviewCard__Chevbtn '>
                  <FaChevronLeft></FaChevronLeft>
              </button>
              <button className='reviewCard__Chevbtn'>
                  <FaChevronRight></FaChevronRight>
              </button>
          </div>
          <button className='reviewCard__btn'>Suprise Me</button>
      </div>
  )
}

export default ReviewCard