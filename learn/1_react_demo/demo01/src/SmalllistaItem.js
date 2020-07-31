import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SmalllistItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps,nextStates) {
    return nextProps.content !== this.props.content
  }
  render() { 
    return ( 
      <li onClick={this.handleClick}>
        {this.props.name} server {this.props.content}
      </li>
     );
  }

  handleClick() {
    this.props.deleteItem(this.props.index )
  }
}

SmalllistItem.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
SmalllistItem.defaultProps= {
  name:"xxx"
}
 
export default SmalllistItem;