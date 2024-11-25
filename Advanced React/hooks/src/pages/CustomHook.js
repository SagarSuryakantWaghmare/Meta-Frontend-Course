import React, { useEffect, useState } from 'react'

function useConsoleLog(varName){
    useEffect(()=>{
        console.log(varName)
    },[varName])
}
function CustomHook() {
    const[count,setCount]=useState(0);
    function increment(){
        setCount(prev=>prev+1);
    }
    useConsoleLog(count);
  return (
   <>
   <h1>Count:{count}</h1>
   <button onClick={increment}>Increment</button>
   </>
  )
}

export default CustomHook