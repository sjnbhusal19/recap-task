// Create a component with an input box and a button to add items to a list.
// Each item should also have a button next to it to remove it from the list.


import React, { useState } from 'react'

const Task2 = () => {

    const [list,setList] = useState ([])

    const [listValue,setListValue] = useState('')

    const inputValue = (e) =>{
        setListValue(e.target.value)
        console.log(e.target.value)
    }

    const addList = () =>{
      const  newList =[...list,listValue]
      setList(newList)
        console.log(newList)
    }

    const listAfterRemove = (val) => {
        const newArrayList = [...list].filter((item)=>{
            return (val !== item) 
        })
        setList(newArrayList)
        
    }



  return (
    <div>
        <input onChange={inputValue} type='text' />
        <button onClick={addList} >Add</button>
        Items list:
        {
              list.map ((val)=>{
                return(
                    <p>
                        {val} <button onClick={()=>listAfterRemove(val)}>Remove</button>
                    </p>
                )
             })
        }
    </div>
  )
}

export default Task2