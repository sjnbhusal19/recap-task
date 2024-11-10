//Create a list of tasks, each with a completed property.
// If completed is true, display the task with a
//line-through style; otherwise, display it normally.

import React from 'react'

const tasks = [
    { id: 1, text: "first", completed: true },
    { id: 2, text: "second", completed: false },
    { id: 3, text: "third", completed: true }
]

const Task5 = () => {
    return (
        <div>
            <p>Create a list of tasks, each with a completed property.
                If completed is true, display the task with a
                line-through style; otherwise, display it normally.</p>
            <h1>List of task :</h1>
            <ul>
                {tasks.map(item => (
                    <li
                        key={item.id}
                        style={{
                            textDecoration: item.completed ? "line-through" : "none"
                        }}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Task5