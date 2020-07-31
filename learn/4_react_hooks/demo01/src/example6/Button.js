import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR} from './color'

function Buttons() {
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <button onClick={() => {dispatch({type: UPDATE_COLOR, color:"red"})}}>red</button>
      <button onClick={() => {dispatch({type: UPDATE_COLOR, color:"yellow"})}}>yellow</button>
    </div>
  )
}

export default Buttons