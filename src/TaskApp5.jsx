import { useState } from 'react'
import AddTask from './TaskApp5AddTask'
import TaskList from './TaskApp5TaskList'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
]

export default function TaskApp5() {
  const [tasks, setTasks] = useState(initialTasks)

  /**
   * 追加
   * @param {string} text - 新タスクの内容
   */
  function handleAddTask(text) {
    setTasks([
      ...tasks, // 全てコピーして…
      { // 新しいIDで追加
        id: nextId++,
        text: text,
        done: false
      }
    ])
  }

  /**
   * 更新
   * @param {object} task - 更新するタスク
   */
  function handleChangeTask(task) {
    setTasks(tasks.map(t => {
      if (t.id === task.id) {
        return task
      } else {
        return t
      }
    }))
  }

  /**
   * 削除
   * @param {number} taskId - 削除するタスクのID
   */
  function handleDeleteTask(taskId) {
    setTasks(
      tasks.filter(t => t.id !== taskId)
    )
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
