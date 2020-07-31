import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'

class Ani extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggle = this.toToggle.bind(this)
  }
  render() { 
    return (
      <Fragment>
        {/* <div className={this.state.isShow?'show-advanced':'hide-advanced'}>some figure</div>
        <div><button onClick={this.toToggle}>select</button></div> */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="ani-text"
          unmountOnExit
        >
          <div>some figure</div>
        </CSSTransition>
        <div><button onClick={this.toToggle}>select</button></div>
      </Fragment>
    );
  }
  toToggle() {
    this.setState({
      isShow: this.state.isShow?false:true
    })
  }
}
 
export default Ani;