import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import List from './pages/List'
import Index from './pages/Index'
import Home from './pages/Home'


function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/list/123">ListPage</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/home/:id" component={Home} />
    </Router>
  )
}

export default AppRouter