import { useState } from 'react'

// let nextId = 3
const initialList = [
  { id: 0, title: 'Big Ballies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
]

export default function List4() {
  const [list, setList] = useState(initialList)

  function handleClick() {
    const nextList = [...list] // 一旦複製して
    nextList.reverse() // 配列を逆方向に
    // nextList.sort((a, b) => a - b) // ソート
    setList(nextList) // 状態変数にセット(再レンダリング)
  }

  return (
    <>
      <button onClick={handleClick}>aReverse</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}