import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import {getListAction} from './actionCreators'
import axios from 'axios'

//  generator
function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('https://raw.githubusercontent.com/yihangyang/react_blog/master/data/simpleList.json')
  //     .then((res) => {
  //       const data = res.data
  //       console.log(data)
  //       const action =getListAction(data)
  //       put(action)
  //     })
  const res = yield axios.get('https://raw.githubusercontent.com/yihangyang/react_blog/master/data/simpleList.json')
  const action = getListAction(res.data)
  yield put(action)
}

export default mySaga