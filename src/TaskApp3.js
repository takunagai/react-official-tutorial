/**
 * ★★TODO: 動かないので直す (TaskApp2 の TaskAppAddTodo, TaskAppTaskList を使ってるのが原因？
 */
import { useReducer } from 'react'
import AddTask from './TaskAppAddTodo' // 名前注意
import TaskList from './TaskAppTaskList'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
]

export default function TaskApp3() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks) // 引数: reduer, 初期値

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks, // 全てコピーして
        {id: action.id, text: action.text, done: false} // オーバーライド
      ]
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id)
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}