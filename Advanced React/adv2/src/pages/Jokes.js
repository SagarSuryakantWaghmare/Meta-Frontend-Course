import React, { useState } from 'react'

function Jokes() {
    const [Jokes,setJokes]=useState(null);
  const fetchJoke=async()=>{
    const response =await fetch('https://official-joke-api.appspot.com/random_joke');
    const data=await response.json();
    setJokes(data);
  }
  return (
    <>
    <h1>Jokes</h1>
    <button onClick={fetchJoke}>Tell me Joke</button>
    {
        Jokes&&(
            <div>
                <h3>{Jokes.punchline}</h3>
                <p>{Jokes.setup}</p>
                <span>{Jokes.type}</span>
            </div>
        )
    }
    </>
  )
}

export default Jokes