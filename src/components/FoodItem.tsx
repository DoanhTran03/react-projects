import img from "../assets/pexels-ash-376464.jpg"
import { Dish } from "./Menu";

interface Props {
dish: Dish;
}

const FoodItem = ({dish} : Props) => {
  return (
    <div className="foodItem">
        <img className="foodItem__img" src={dish.img} alt="" />
        <div className="foodItem__content">
            <div className="heading">
                <h3>{dish.title}</h3>
                <h4>{dish.price}</h4>
            </div> 
            <div className="description">
                <p>{dish.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem