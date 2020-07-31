import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {cid: 123, title: 'first'},
        {cid: 456, title: 'second'},
        {cid: 789, title: 'third'}
      ]
    }
    this.props.history.push('/home/')
  }
  render() { 
    return (
      <div>
        {/* <Redirect to='/home/' /> */}
        <h2>HomePage</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to={'/list/' + item.cid}>{item.title}</Link>
              </li>
            )
            })
          }
        </ul>
      </div>
     );
  }
}
 
export default Index;