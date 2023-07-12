import img from "../assets/pexels-ash-376464.jpg"
const FoodItem = () => {
  return (
    <div className="foodItem">
        <img className="foodItem__img" src={img} alt="" />
        <div className="foodItem__content">
            <div className="heading">
                <h3>Food name</h3>
                <h4>Prices</h4>
            </div> 
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores quidem nemo cumque consectetur repellendus in minus magnam totam laudantium reprehenderit.</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem