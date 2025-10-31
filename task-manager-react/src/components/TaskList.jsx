import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="tasks">
      {tasks.length !== 0 ? (
        tasks.map(task => (
          <TaskItem 
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <li>No tasks</li>
      )}
    </ul>
  );
}

export default TaskList;