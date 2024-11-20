import React, { useRef, useState } from 'react'

function Controlled() {
    // const inputRef=useRef(null);
    // const handleSubmit=()=>{
    //     const inputValue=inputRef.current.value;
    //     console.log(inputValue)
    // }
    const [value,setValue]=useState("");
    const handleChange=(e)=>{
        setValue(e.target.value)
        console.log(value)
    }


  return (
   <>
   <h1>Controlled</h1>
   {/* <form onSubmit={handleSubmit}>
       <input type="text" ref={inputRef} />
   </form> */}
   <form >
    <input type="text"
    onChange={handleChange}
    value={value} />
   </form>
   </>

  )
}

export default Controlled