import logo from "../assets/react.svg"
import { Birthday } from "./BirthdayContainer";

interface Props {
    birthday : Birthday;
}

const BirthdayItem = ({birthday}: Props) => {
  return (
    <div className='birthdayItem'>
        <img className="birhtdayItem__img" src={birthday.image} />
        <div className="birthdayItem__content">
            <h3>{birthday.name}</h3>
            <p>{birthday.age} years</p>
        </div>
    </div>
  )
}

export default BirthdayItem;