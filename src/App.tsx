import { useState } from "react"
import FoodItem from "./components/FoodItem"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FoodItem></FoodItem>
    </>
  )
}

export default App
