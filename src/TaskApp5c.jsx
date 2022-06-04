import { useImmerReducer } from 'use-immer'
import AddTask from './TaskApp5AddTask'
import TaskList from './TaskApp5TaskList'
// import tasksReducer from './taskApp5TasksReducer'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]

export default function TaskApp5() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks)

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
 * Reducer with immer
 * @param {object} draft - 現在の状態
 * @param {string} action - アクションオブジェクト
 * 外部ファイル化も可能
 */
function tasksReducer(draft, action) {
  switch (action.type) {
    case 'added' : {
      draft.push({
        id: action.id,
        text: action.text,
        done: false
      })
      break // ※ break 必須なので注意
    }
    case 'changed' : {
      const index = draft.findIndex(t =>
        t.id === action.task.id
      )
      draft[index] = action.task
      break
    }
    case 'deleted' : {
      return draft.filter(t => t.id !== action.id)
    }
    default : {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}