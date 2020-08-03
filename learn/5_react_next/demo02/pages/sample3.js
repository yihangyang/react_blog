import { useState } from "react"

function Sample3() {

  const [color, setColor] = useState('blue')

  const changeColor=() => {
    setColor(color == 'blue'?'red':'blue') 
  }
  return (
    <>
      <div>some code</div>
      <div className="samle">some code</div>
      <div><button onClick={changeColor}>change color</button></div>
      <style jsx>
        {`
          div{color: ${color}}
          .samle{color: red}
        `}
      </style>
    </>
  )
}

export default Sample3