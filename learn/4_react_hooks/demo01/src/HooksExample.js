import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Index() {
  useEffect(() => {
    console.log(`useEffect => Index Page`)
    return () => {
      console.log('exit the index page')
    }
  }, [])
  return <h2>the main page</h2>
}

function List() {
  useEffect(() => {
    console.log(`useEffect => List Page`)
  })
  return <h2>the list page</h2>
}

function HooksExample() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`useEffect => You clicked ${count}`)
    return () => {
      console.log('===========')
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times with hooks</p>
      <button onClick={() => {setCount(count+1)}}>Click me</button>
      <Router>
        <ul>
          <li><Link to="/">main page</Link></li>
          <li><Link to="/list/">list page</Link></li>
        </ul>
        <Route path="/" exact component={Index}/>
        <Route path="/list/" component={List}/>
      </Router>
    </div>
  )
}
 
export default HooksExample;