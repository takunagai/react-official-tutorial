import AddTask from './TaskApp6AddTask'
import TaskList from './TaskApp6TaskList'
import { TasksProvider } from './TaskApp6TasksContext'

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  )
}
