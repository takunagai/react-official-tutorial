import { useState, useContext } from 'react'
import { TasksDispatchContext } from './TaskApp6TasksContext'

let nextId = 3

export default function AddTask() {
  const [text, setText ] = useState('')
  const dispatch = useContext(TasksDispatchContext)

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('')
        // onAddTask(text)
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        })
      }}>Add</button>
    </>
  )
}