import React, { useRef } from 'react'

function FocusInput() {
    const fromInputRef=useRef(null);
    const focusInput=()=>{
        fromInputRef.current.focus();
    }
  return (
    <>
     <h1>Using useRef to access underlying dom</h1>
     <input type="text" ref={fromInputRef} />
     <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default FocusInput