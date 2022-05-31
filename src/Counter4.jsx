import { useState } from 'react'

export default function Counter4() {
  const [isPaused, setIsPaused] = useState(false)
  return (
    <>
      {isPaused ? ( // 切り替え時、UI ツリーから削除するので状態が消えてしまう
        <p>See you later!</p>
      ) : (
        <Counter />
      )}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </>
  )
}

function Counter() {
  const [score, setScore] = useState(0)
  const [hover, setHover] = useState(false)

  let className = 'counter'
  if (hover) { className += ' hover'}

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  )
}