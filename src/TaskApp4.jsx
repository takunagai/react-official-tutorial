import AddTask from './TaskApp4AddTask'
import TaskList from './TaskApp4TaskList'
import { TasksProvider } from './TaskApp4TasksContext'

export default function TaskApp4() {
  return (
    <TasksProvider>
      <h1>Day off iin kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}