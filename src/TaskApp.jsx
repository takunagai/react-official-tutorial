import { useState } from 'react'
import AddTodo from './TaskAppAddTodo'
import TaskList from './TaskAppTaskList'

let nextId = 3
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
]

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos)

  function handleAddTodo(title) {
    setTodos([
      { id: ++nextId, title: title, done: false },
      ...todos,
    ])
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) { // id が適合したら更新
        return nextTodo
      } else {
        return t
      }
    }))
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(t => t.id !== todoId))
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}