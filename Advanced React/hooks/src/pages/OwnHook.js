import React, { useEffect, useRef, useState } from 'react'

function OwnHook() {
    const [day,setDay]=useState("Monday");
    const prevDay=usePrevious(day);
    const getNextDay=()=>{
        if(day==="Monday"){
            setDay("Tuesday")
        }
        else if(day==="Tuesday"){
            setDay("Wednesday")
        }
        else if(day==="Wednesday"){
            setDay("Thursday")
        }
        else if(day==="Thursday"){
            setDay("Friday")
        }
        else if(day==="Friday"){
            setDay("Monday")
        }
    }
  return (
   <>
   <div style={{display:'flex',alignItems:'center'}}>
    <h1>Today is :{day}<br></br>
    {prevDay&&(
        <span>Previous work day was:{prevDay}</span>
    )}</h1>
    <button onClick={getNextDay}>Get next day</button>
   </div>
   </>
  )
}
function usePrevious(value){
    const ref=useRef();
    useEffect(()=>{
        ref.current=value;
    },[value]);
    return ref.current;
}

export default OwnHook