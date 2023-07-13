import { useState } from "react"
import FoodItem from "./components/FoodItem"
import CategoryTab from "./components/CategoryTab"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CategoryTab></CategoryTab>
    </>
  )
}

export default App
