import React, { useState } from 'react'

export default function Practice() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    return setCount(count+1);
     
    
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleCount}>CLick ME : </button>
    
    </>
  )
}
