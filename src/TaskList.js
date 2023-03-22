import React from 'react'
import Task from './Task'

const TaskList = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo?.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  )
}
export default TaskList
