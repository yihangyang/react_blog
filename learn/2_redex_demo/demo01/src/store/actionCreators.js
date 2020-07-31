import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=> ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = ()=> ({
  type: ADD_ITEM,
})

export const deleteItemAction = (index)=> ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data)=> ({
  type: GET_LIST,
  data
})

export const getList = () => {
  return (dispatch) => {
    axios.get('https://raw.githubusercontent.com/yihangyang/react_blog/master/data/simpleList.json')
      .then((res) => {
        const data = res.data
        console.log(data)
        const action =getListAction(data)
        dispatch(action)
      })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})