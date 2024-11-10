// Create a React component with a textarea and a live word counter below it. 
//As the user types in the textarea, the word count should update automatically.


import { useState } from 'react';

function Task1() {
  const [values, setValues] = useState('')


  const numberOfWord = (e) => {
    setValues(e.target.value)
  }
  return (
    <div>
      <h1>Task 1:</h1>
      <p> Create a React component with a textarea and a live word counter below it.
        As the user types in the textarea, the word count should update automatically.
      </p>
      <h3>React Word Count</h3>
      <input onChange={numberOfWord} type='text' />
      <p> Total number of word count is {values.length}.</p>

    </div>
  );
}

export default Task1
