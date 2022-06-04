// import { useState } from 'react'
import { useReducer } from 'react'
import AddTask from './TaskApp5AddTask'
import TaskList from './TaskApp5TaskList'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]

export default function TaskApp5() {
  // const [tasks, setTasks] = useState(initialTasks)
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  /**
   * 追加
   * @param {string} text - 新タスクの内容
   */
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  /**
   * 更新
   * @param {object} task - 更新するタスク
   */
  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    })
  }

  /**
   * 削除
   * @param {number} taskId - 削除するタスクのID
   */
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
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

/**
 * Reducer
 * @param {object} tasks - 現在の状態
 * @param {string} action - アクションオブジェクト
 */
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added' : {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    }
    case 'changed' : {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted' : {
      return tasks.filter(t => t.id !== action.id)
    }
    default : {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}