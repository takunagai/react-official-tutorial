/**
 * +5 で 5 を表示 → 0 をアラート
 * 時間置いても、再レンダリングされるまでは
 * number 状態変数はゼロのまま(スナップショット)なのを確認するためのもの
 */
import { useState } from 'react'
export default function TestCounter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 1000);
      }}>+5</button>
    </>
  )
}