import { useState } from 'react'
import "./index.css"
import ImageContainer from './components/ImageContainer'
import ReviewCard from './components/ReviewCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReviewCard></ReviewCard>
    </>
  )
}

export default App
