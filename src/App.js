import React , { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const closs = () => setCount(count * 2)
  const divide = () => setCount(count / 2)
  const divide3only = () => setCount(previousCount => {
    if (previousCount % 3 === 0 ){
      return previousCount / 3
    } 
    else {
      return previousCount
    }
  })
  const Reset = () => setCount(0)
  
  return (
    <>
      <div>count: {count} </div>
      <div>
        <button onClick = {increment}>+1</button>
        <button onClick = {decrement}>-1</button>
      </div>
      <div>
        <button onClick = {increment2}>+1</button>
        <button onClick = {decrement2}>-1</button>
      </div>
      <div>
        <button onClick = {closs}>x2</button>
        <button onClick = {divide}>/2</button>
        <button onClick = {divide3only}>3のときだけ3で割る</button>
      </div>
      <div>
        <button onClick = {Reset}>Reset</button>
      </div>
    </>
  )
}

export default App;
