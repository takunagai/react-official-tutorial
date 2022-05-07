import { useState } from 'react'

export default function TestCounter2() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <h2>{number}</h2>
      <button onClick = {() => {
        // setNumber(n + 1) // これだと次のレンダリングまで変わらないので複数回呼び出しても結果は1回呼び出しと同じ
        setNumber(n => n + 1) // 計算式でなく関数を渡す = アップデータ関数
        setNumber(n => n + 1)
        setNumber(n => n + 1)
      }}>+3</button>
    </>
  )
}