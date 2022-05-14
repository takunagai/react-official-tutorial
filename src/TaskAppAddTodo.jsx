import { useState } from 'react'

export default function TaskAppAddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('')

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={() => {
        setTitle('')
        onAddTodo(title)
      }}>Add</button>
    </>
  )
}
