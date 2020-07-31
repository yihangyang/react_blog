import React from 'react';
import { Route, Link } from 'react-router-dom'
import LinuxPage from './workspace/LinuxPage'
import MacPage from './workspace/MacPage'

function Workspace() {
  return(
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workspace/linuxpage">Linux</Link></li>
          <li><Link to="/workspace/macpage">Mac</Link></li>
        </ul>
      </div>
      <div className="workspaceContent">
        <div><h3>workspace Content</h3></div>
        <Route path="/workspace/linuxpage/" component={LinuxPage} />
        <Route path="/workspace/macpage/" component={MacPage} />
      </div>
    </div>
  )
}

export default Workspace