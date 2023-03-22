import { useState } from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

let nextId = 3
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false }
]

const TaskApp = () => {
  const [todos, setTodos] = useState(initialTodos)

  const handleAddTodo = title => {
    let newTodo = [...todos]

    newTodo.push({
      id: nextId++,
      title: title,
      done: false
    })
    setTodos(newTodo)
  }

  const handleChangeTodo = nextTodo => {
    const todo = todos.find(t => t.id === nextTodo.id)
    todo.title = nextTodo.title
    todo.done = nextTodo.done
    setTodos(
      todos.map(t => {
        if (t.id === nextTodo.id) {
          return { ...t, title: nextTodo.title, done: nextTodo.done }
        }
        return t
      })
    )
  }

  const handleDeleteTodo = todoId => {
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
export default TaskApp
