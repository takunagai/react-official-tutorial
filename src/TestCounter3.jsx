import { useState } from 'react'

export default function TestCounter3() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <h2>{number}</h2>
      <button onClick = {() => {
        setNumber(number + 5) // 次回のレンダリングにしか反映されない
        setNumber(n => n + 1) // アップデータ関数で、レンダリングに反映 ※ 6増える
      }}>Increase the number</button>
    </>
  )
}