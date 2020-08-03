import React, { useState } from 'react';
import dynamic from 'next/dynamic'

const One = dynamic(import('../public/one'))

function Time() {
  const [nowTime, setTime] = useState(Date.now())

  const changeTime= async() => {
    const moment = await import('moment')
    setTime(moment.default(Date.now()).format())
  }
  return (
    <>
      <div> Time is: {nowTime}</div>
      <One />
      <div><button onClick={changeTime}>changeTimeFormat</button></div>
    </>
  )
}

export default Time