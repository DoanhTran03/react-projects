import { useState } from 'react'
import "./index.css"
import ImageContainer from './components/ImageContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageContainer></ImageContainer>
    </>
  )
}

export default App
