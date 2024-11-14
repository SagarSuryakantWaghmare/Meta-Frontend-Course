import React from 'react'

function Sidebar() {
  let arr=[10,20,30,40,50];
  return (
    <div className='bg-purple-300 font-bold text-2xl flex justify-center py-6 '>
     <h1>Using the arrow functions</h1>
     <ul>
      <li>

      {arr.map(item=>item*10)}
      </li>
     </ul>
    </div>
  )
}

export default Sidebar
