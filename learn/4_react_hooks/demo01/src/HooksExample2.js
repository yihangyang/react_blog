import React, { useState } from 'react';

function HooksExample2() {
  // const [ count, setCount ] = useState(0)
  const [sex, setSex] = useState('female')
  const [age, setAge] = useState(18)
  
  const [job, setJob] = useState('programierer')
  return (
    <div>
      <p>Ich bin {age}</p>
      <p>sex:{sex}</p>
      <p>my job ist {job}</p>
    </div>
  )
}
 
export default HooksExample2;