import React from 'react'

function About() {
    let name="Sagar";
    let test=true;
    const day=new Date().getDay;
  return (
    <>
    <div>About</div>
    {name.length===5?<h1>You must be smarter than all</h1>:<h2>You must be change your name</h2>}
    <div>{test && <h1>Hello</h1>} World {day}</div >
    
    
    </>
  )
}

export default About