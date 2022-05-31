import { useState } from 'react'

export default function MyComponent() {
  const [counter, setCounter] = useState(0)

  function MyTextField() { // コンポーネント関数定義をネスト(ダメな例)
    const [text, setText] = useState('')

    return (
      <input
        type="text"
        value = {text}
        onChange={e => setText(e.target.value)}
      />
    )
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => { // ボタンを押すと、入力が消えてしまう問題
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  )
}