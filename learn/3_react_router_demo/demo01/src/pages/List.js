import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
    <h2>ListPage-{this.state.id}</h2>
     );
  }
  componentDidMount() {
    let tempId = this.props.match.params.id
    this.setState({
      id: tempId
    })
  }
}
 
export default List;