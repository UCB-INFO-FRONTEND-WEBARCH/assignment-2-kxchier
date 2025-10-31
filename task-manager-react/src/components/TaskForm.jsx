import React from 'react'
import { useState } from 'react'

function TaskForm({onAddTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim() === '') {
            return
        }
        
        onAddTask(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type="text"
                placeholder="Add a task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm
