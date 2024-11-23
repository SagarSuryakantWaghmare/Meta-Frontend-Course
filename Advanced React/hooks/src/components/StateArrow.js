import React, { useState } from 'react'

function StateArrow() {
    const[greeting,setGreeting]=useState({
       greet:"Hello",
       place:"World"
    })
    function updateGreeting(){
        setGreeting(prevState=>{
            return {...prevState, place: "Universe"}
        });
    }
  return (
    <>
    <h1>{greeting.greet},{greeting.place}</h1>
    <button onClick={updateGreeting}>Update Greeting</button>
    </>
  )
}

export default StateArrow