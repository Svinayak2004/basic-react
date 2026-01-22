// import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      useState example 
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>
        increase count 
      </button>
    </div>
  )
}

export default App
