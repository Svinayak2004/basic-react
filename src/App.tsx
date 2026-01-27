// import React from 'react'
import { useState, useEffect } from 'react'
import Navigator from './Navigator'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('Count has been updated:', count)
  }, [count])

  const changeName=(e)=>{
    setName(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      useState example 
      <h1>Count: {count}</h1>

      <button onClick={handleClick}>
        increase count 
      </button>
      <br /><br />

      <input type="text" placeholder='enter your name' onChange={changeName}/>
      <h2>Your name is: {name}</h2>

      
      <Navigator />
    </div>
  )
}

export default App
