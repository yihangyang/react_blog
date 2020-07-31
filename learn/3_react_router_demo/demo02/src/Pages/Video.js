import React from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import VuePage from './video/VuePage'
import FlutterPage from './video/FlutterPage'

function Video() {
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage">React</Link></li>
          <li><Link to="/video/vuepage">Vue</Link></li>
          <li><Link to="/video/flutterpage">Flutter</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>Video Content</h3></div>
        <Route path="/video/reactpage/" component={ReactPage} />
        <Route path="/video/vuepage/" component={VuePage} />
        <Route path="/video/flutterpage/" component={FlutterPage} />
      </div>
    </div>
  )
}

export default Video