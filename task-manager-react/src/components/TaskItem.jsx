import React from 'react'

function TaskItem({task, onToggle, onDelete}) {
  return (
    <li className={`${task.completed ? 'completed' : ''}`}>
        <input
            type="checkbox"
            id={`task-${task.id}`}
            name="tasks"
            className="round-checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        />
        <label htmlFor={`task-${task.id}`}>{task.text}</label>
        <button onClick={() => onDelete(task.id)}>X</button>
    </li>
  )
}

export default TaskItem
