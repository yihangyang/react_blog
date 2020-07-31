const defaultState = {
  inputValue: 'hello',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === 'change_input'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === 'add_item'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === 'delete_item'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.pop(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  return state
}