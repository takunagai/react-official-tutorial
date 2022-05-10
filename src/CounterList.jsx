import { useState } from 'react'

let initialCounters = [0, 0, 0]

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters)

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) { // 3. 元のアイテム(↑最初の引数)を返すか他の何かを返すかを決定
        return c + 1 // 4. 適合すれば1を足す
      } else {
        return c
      }
    })
    setCounters(nextCounters)
  }

  return (
    <ul>
      {counters.map((counter, i) => ( // 1. インデックスを受け取り
        <li key={i}>
          {counter}
          <button onClick={() => {handleIncrementClick(i)}}>+1</button> {/* 2. 関数に渡す */}
        </li>
      ))}
    </ul>
  )
}