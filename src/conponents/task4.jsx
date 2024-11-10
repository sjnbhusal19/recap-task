//Create a component which contains a card. When user click on that card, show alert say 'clicked inside the card ' 
//and when clicked outside the card show alert saying 'clicked outside the card' 
//hint : useRef, ref.current.contain


import React, { useRef } from 'react'

const Task4 = () => {

const cardComponent = useRef(null)




    return (
        <div>
            <h1>Task 4:</h1>
            <p>Create a component which contains a card. When user click on that card, show alert say 'clicked inside the card '
                and when clicked outside the card show alert saying 'clicked outside the card'
                hint : useRef, ref.current.contain</p>
              <div
              ref={cardComponent}
               style={{
                width:'200px',
                height:'200px',
                background:'yellow',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                border:'1px solid gray'
                }}
                >
                Card Component
                </div>  

        </div>
    )
}

export default Task4

