import { useState } from 'react'

export default function TaskApp5AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        onAddTask(text)
        setText('')
      }}>Add</button>
    </>
  )
}
