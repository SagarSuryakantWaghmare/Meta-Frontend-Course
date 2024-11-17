import React, { useState } from 'react'
// context api is like transporting the info one to other
function Context() {
  const [students]=useState([
    {studentsName:"Sagar",id:1},
    {studentsName:"Swapnil",id:2},
    {studentsName:"Sourabh",id:3},
    {studentsName:"Soham",id:4},


  ])
  return (
    <div>
      {students.map(f=><p>{f.id}-{f.studentsName}</p>)}
    </div>
  )
}

export default Context