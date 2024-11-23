import React, { useState } from 'react'

function Greet() {
    const [greeting, setGreeting] = useState("Good Morning");
    const handleGreet=()=>{
        setGreeting("Have a good day");
    }
    const handleWell=()=>{
        setGreeting("Don't forget to smile");
    }
    return (
        <>
            <div>{greeting}</div>
            <button onClick={handleGreet} onDoubleClick={handleWell}>Greet well</button>
        </>
    )
}

export default Greet