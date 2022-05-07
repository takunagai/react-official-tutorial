import { useState } from 'react'

export default function TestCounter4() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <h2>{number}</h2>
      <button onClick = {() => {
        setNumber(number + 5) // 次回のレンダリングにしか反映されない
        setNumber(n => n + 1) // アップデータ関数で、レンダリングに反映
        setNumber(42) // 42 になる (キューに「replacewith42」を追加)
      }}>Increase the number</button>
    </>
  )
}