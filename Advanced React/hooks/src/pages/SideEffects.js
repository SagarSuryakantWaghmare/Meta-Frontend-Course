import React, { useEffect, useState } from 'react'

function SideEffects() {
    const[Toggle,setToggele]=useState(false);
    const clickHandler=()=>{
        setToggele(!Toggle);
    }
    useEffect(()=>{
        document.title=Toggle?"Sagar can do it":"Sagar will go for his utlimate goal";
    },[Toggle])
  return (
    <>
    <h1>Using the useEffect hook</h1>
    <button onClick={clickHandler}>Toggle Message</button>
    {Toggle && <p>Toggle Message</p>}
    </>
  )
}

export default SideEffects