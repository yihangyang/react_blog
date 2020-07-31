import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workspace from './Pages/Workplace'
import './index.css'

function AppRouter() {
  let routerConfig = [
    {path: '/', title: 'mainPage(loop)', exact: true, component: Index},
    {path: '/video/', title: 'video(loop)', exact: false, component: Video},
    {path: '/workspace/', title: 'workspace(loop)', exact: false, component: Workspace},
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftDiv">
          <h3>primary Nav</h3>
          <ul>
            {/* <li><Link to="/">mainPage</Link></li>
            <li><Link to="/video">video</Link></li>
            <li><Link to="/workspace">workspace</Link></li> */}
            {
              routerConfig.map((item, index) => {
                return (
                  <li key={index}><Link to={item.path}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightMain">
          {
            routerConfig.map((item, index) => {
              return (
                <Route key={index} path={item.path} exact={item.exact} component={item.component} />
              )
            })
          }
          {/* <Route path="/" exact component={Index} />
          <Route path="/video/" component={Video} />
          <Route path="/workspace/" component={Workspace} /> */}
        </div>
      </div>
    </Router>
  )
}

export default AppRouter