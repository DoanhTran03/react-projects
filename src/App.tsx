import { useState } from "react"
import FoodItem from "./components/FoodItem"
import CategoryTab from "./components/CategoryTab"
import MenuGrid from "./components/MenuGrid"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MenuGrid></MenuGrid>
    </>
  )
}

export default App
