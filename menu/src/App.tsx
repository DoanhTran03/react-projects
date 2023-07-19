import { useState } from "react"
import FoodItem from "./components/FoodItem"
import CategoryTab from "./components/CategoryTab"
import MenuGrid from "./components/MenuGrid"
import Menu from "./components/Menu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu></Menu>
    </>
  )
}

export default App
