import { useState } from 'react'

// うまくいかない
export default function Counter() {
  const [score, setScore] = useState(0)

  function increment() {
    setScore(score + 1)
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment()
        console.log(score)  // 0 ※レンダリング済みのコードは変更されない
        increment()         // 1 のまま
        console.log(score)  // 0
        increment()         // 1 のまま
        console.log(score)  // 0
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}
