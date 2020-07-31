import React, { useRef, useState, useEffect } from 'react';

function Example8() {
  const inputEle = useRef(null);
  const onButtonClick = () => {
    inputEle.current.value = "Hello"
    console.log(inputEle)
  }
  const [text, setText] = useState('init')
  const textRef = useRef()

  useEffect(()=>{
    textRef.current = text
    console.log('textRef.current:', textRef.current)
  })

  return (
    <>
      <input ref={inputEle} type="text" />
      <button onClick={onButtonClick}>show text</button>
      <br />
      <br />
      <input value={text} onChange={(e)=>{
        setText(e.target.value)
      }}/>
    </>
  )
}

export default Example8