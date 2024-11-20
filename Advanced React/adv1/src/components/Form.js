import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");
    const handleSubmit=(e)=>{
      alert(`Name is Saved :${name}`)
      e.preventDefault();
    }
    
  return (
    <>
    <h1>Form Submission</h1>
    <form >
        <fieldset>
            <div>
                <label>Name of the Student:</label>
                <input
                type='text'
                onChange={(e)=>setName(e.target.value)}
                placeholder='Name '
                ></input>
            </div>
        </fieldset>
        <button onSubmit={handleSubmit} disabled={!name}>Submit</button>
    </form>
    </>
  )
}

export default Form