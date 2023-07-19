import image from "../assets/pexels-andrea-piacquadio-774909.jpg"
import {FaQuoteRight} from "react-icons/fa"
import {Review} from "./ReviewSlider";

interface Props {
    review: Review;
    position: string;
}

const ReviewCard = ({review, position}: Props) => {
  return (
    <div className={"reviewCard reviewCard--" + position}>
    <img className="reviewCard__img" src={review.image} alt="" />
    <h3 className="name">{review.name}</h3>
    <h4 className="title">{review.title}</h4>
    <p className="description">{review.quote}</p>
    <span className="icon"><FaQuoteRight></FaQuoteRight></span>
    </div>
  )
}

export default ReviewCard