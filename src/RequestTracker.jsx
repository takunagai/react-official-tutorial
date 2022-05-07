import { useState } from 'react'

/**
 * Buy ボタンを押すと、2秒後に完了。その間の Pending 数と完了数を表示する
 * 連打して正常に機能するか確かめる
 */
export default function RequestTracker() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    setPending(p => p + 1)
    await delay(2000)
    setPending(p => p - 1)
    setCompleted(c => c + 1)
  }

  return (
    <section style={{
      marginTop: '3rem'
    }}>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </section>
  )
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
