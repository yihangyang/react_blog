import React, { useState, useMemo } from 'react';

function Example7() {
  const[first, setFirst] = useState('first is warting')
  const[second, setSecond] = useState('second ist warting')
  return (
    <>
      <button onClick={()=>{setFirst(new Date().getTime())}}>first</button>
      <button onClick={()=>{setSecond(new Date().getTime()+'second ist there')}}>second</button>
      <ChildCom name={first}>{second}</ChildCom>
    </>
  )
}

function ChildCom({name, children}) {
  function changeFirst() {
    console.log('first ist coming')
    return name + ', first is coming'
  }

  const actionFirst = useMemo(() => changeFirst(name),[name]) 

  return (
    <>
      <div>{actionFirst}</div>
      <div>{children}</div>
    </>
  )
}

export default Example7