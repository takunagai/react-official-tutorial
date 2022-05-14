import { useState, useContext } from 'react'
import { useTasksDispatch } from './TaskApp4TasksContext'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('')
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        })
      }}>Add</button>
    </>
  )
}

let nextId = 3