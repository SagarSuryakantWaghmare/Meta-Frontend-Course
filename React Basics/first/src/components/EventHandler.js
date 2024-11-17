import React, { useState } from 'react'

function EventHandler() {
   const[count,setCount]=useState(0);
  function handleClick(){
    console.log("The button clicked")
    setCount(count+1);


  }
  return (
    <>    <button className="text-2xl border-b-orange-600" onClick={handleClick}>Increased the power of the dino</button>
    <div>{count}</div>
    </>

  )
}

export default EventHandler 