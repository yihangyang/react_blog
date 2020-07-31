import React, { Component } from 'react';
import store from './store'
import {getMyListAction, changeInputAction, addItemAction, deleteItemAction,} from './store/actionCreators'
import ToDoListUI from './ToDoListUI'


class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }

  render() { 
    return ( 
      <ToDoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
  componentDidMount() {
    const action = getMyListAction()
    store.dispatch(action)

  }

  storeChange() {
    this.setState(store.getState)
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
 
export default ToDoList;