import React,{Component, Fragment} from 'react';
import SmalllistItem from './SmalllistaItem'
import './style.css'
import axios from "axios" 
import Ani from './Ani'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Smalllist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "default",
      list: ['base', 'middle']
    } 
  }

  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res)=>{
        console.log('axios response: ' + JSON.stringify(res))
        this.setState({
          list:res.data
        })
      })
      .catch((error)=>{console.log('axios fail to response: '+error)})
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => (this.input=input)}
          /> 
          <button
            onClick={this.addList.bind(this)}>
              Add service
          </button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames='ani-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                    <SmalllistItem
                      key={index+item}
                      content={item}
                      deleteItem={this.deleteItem.bind(this)}
                    />
                  </CSSTransition>
                  // <li
                  //   key={index+item}
                  //   onClick={this.deleteItem.bind(this, index)}
                  // >
                  //   {item}
                  // </li>
                )
              })
            }
          </TransitionGroup>
        </ul>

        <Ani />
      </Fragment>
    )
  }
  inputChange(e){
    // console.log(e.target.value);
    this.setState({
      inputValue: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem(index) {
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Smalllist