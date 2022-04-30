import { useState } from 'react'

// うまくいかない
export default function Counter() {
  const [score, setScore] = useState(0)

  function increment() {
    setScore(s => s + 1) // score を更新でなく、アップデータ関数を渡す
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment()
        increment()
        increment()
      }}>+3</button>
      <h1>Score: {score}</h1> {/* 9 */}
    </>
  )
}
