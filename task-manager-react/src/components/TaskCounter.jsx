import React from 'react'

function TaskCounter({ tasks}) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length

  return (
    <p>{total} / {completed}</p>
  )
}

export default TaskCounter
