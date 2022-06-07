import { useState, useRef } from 'react'

export default function Counter7() {

  // 1. 状態で
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  // 2. 参照で
  let countRef = useRef(0)
  function handleClick2() {
    countRef.current = countRef.current + 1
  }

  return(
    <>
      <p>状態で：<button onClick={handleClick}>You clicked {count} times</button></p>
      <p>参照で：<button onClick={handleClick2}>You clicked {countRef.current} times</button></p>
    </>
  )
}