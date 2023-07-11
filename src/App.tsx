import { useState } from 'react'
import "./index.css"
import ReviewCard from './components/ReviewCard'
import ReviewContainer from './components/ReviewContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReviewContainer></ReviewContainer>
    </>
  )
}

export default App
