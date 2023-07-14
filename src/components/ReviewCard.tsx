import image from "../assets/pexels-andrea-piacquadio-774909.jpg"
import {FaQuoteRight} from "react-icons/fa"
const ReviewCard = () => {
  return (
    <div className="reviewCard">
    <img className="reviewCard__img" src={image} alt="" />
    <h3 className="name">Robert Keith</h3>
    <h4 className="title">A simple guy</h4>
    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Obcaecati quam maxime nesciunt similique pariatur in nostrum, saepe suscipit. Quaerat, suscipit!</p>
    <span className="icon"><FaQuoteRight></FaQuoteRight></span>
    </div>
  )
}

export default ReviewCard