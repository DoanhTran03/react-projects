import portrait from "../assets/pexels-cottonbro-studio-4100481.jpg"
import {FaQuoteRight} from "react-icons/fa"

const ImageContainer = () => {
  return (
    <div className='imageContainer'>
        <img className='imageContainer__img' src={portrait} alt="Human portrait" />
        <span className='imageContainer__icon'>
            <FaQuoteRight></FaQuoteRight>
        </span>
    </div>
  )
}

export default ImageContainer