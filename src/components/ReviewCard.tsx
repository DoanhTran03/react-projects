import ImageContainer from './ImageContainer'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { Review } from './ReviewContainer';

interface Props {
    review: Review;
    goBack : () => void;
    goForward: () => void;
    playRandom: () => void;
}

const ReviewCard = ({review, goBack, goForward, playRandom} : Props) => {
  return (
      <div className="reviewCard">
          <ImageContainer imgURL={review.image}></ImageContainer>
          <h3>{review.name}</h3>
          <p className='reviewCard__title'>{review.job}</p>
          <p>{review.text}</p>
          <div className="reviewCard__buttons">
              <button onClick={() => goBack()} className='reviewCard__Chevbtn '>
                  <FaChevronLeft></FaChevronLeft>
              </button>
              <button onClick={() => goForward()} className='reviewCard__Chevbtn'>
                  <FaChevronRight></FaChevronRight>
              </button>
          </div>
          <button onClick={() => playRandom()} className='reviewCard__btn'>Suprise Me</button>
      </div>
  )
}

export default ReviewCard