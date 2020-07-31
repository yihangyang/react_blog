import React from 'react';
import { connect } from 'react-redux'

const ToDoList = (props ) => {
  let { inputValue, inputChange, clickButton, list, deleteButton} = props
    return ( 
      <div>
        <div>
          <input
            value={inputValue}
            onChange={inputChange}
          />
          <button
            onClick={clickButton}
          >submit</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (<li key={index} onClick={deleteButton}>{item}</li>)
            })
          }
        </ul>
      </div>
    );
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    clickButton() {
      let action = {type: 'add_item'}
      dispatch(action)
    },
    deleteButton() {
      let action = {type: 'delete_item'}
      dispatch(action)
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(ToDoList);