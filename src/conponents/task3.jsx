// Create an input field where the background color changes based on the number of characters typed:
// fewer than 5 characters should be red, between 5-10 should be yellow, and more than 10 should be green.


import React, { useState } from 'react'
import './task3.css'


const Task3 = () => {

  const [character, setCharacter] = useState('')

  const numberOfCharacter = (e) => {
    setCharacter(e.target.value)
  }

  const getClass = () => {
    if (character.length === 0) return 'class-white';
    if (character.length < 5) return 'class-red';
    if (character.length <= 10) return 'class-yellow';
    return 'class-green';
  };

  console.log(character.length)

  return (
    <div className={getClass()}>
      <h1>Task 3:</h1>
      <p>Create an input field where the background color changes based on the number of characters typed:
        fewer than 5 characters should be red, between 5-10 should be yellow, and more than 10 should be green.</p>
      <input type='text' onChange={numberOfCharacter} />


    </div>
  )
}

export default Task3