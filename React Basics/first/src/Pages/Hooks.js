import React, { useState } from 'react'

function Hooks() {
    const[text,setText]=useState("hello");
    function handleChange(e){
        setText(e.target.value)
    }
  return (
    <>
     <input type="text" value={text} onChange={handleChange} placeholder='Enter you text'/>
     <br />
     <p>You typed:{text}</p>
     <button onClick={function(){setText("hello")}}>Reset</button>
    </>
  )
}

export default Hooks