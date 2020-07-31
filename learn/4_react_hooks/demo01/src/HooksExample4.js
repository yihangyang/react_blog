import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

function HooksExample4() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <p>You clicked {count} times with hooks</p>
      <button onClick={() => {setCount(count+1)}}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}
 
export default HooksExample4;