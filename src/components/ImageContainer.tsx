import portrait from "../assets/pexels-cottonbro-studio-4100481.jpg"
import {FaQuoteRight} from "react-icons/fa"

interface Props {
  imgURL : string;
}

const ImageContainer = ({imgURL} : Props) => {
  return (
    <div className='imageContainer'>
        <img className='imageContainer__img' src={imgURL} alt="Human portrait" />
        <span className='imageContainer__icon'>
            <FaQuoteRight></FaQuoteRight>
        </span>
    </div>
  )
}

export default ImageContainer