import React from 'react'

function TernaryOperator() {
  return (
    <div  className='flex justify-center'>
      {/* Ternary operator here we use it */}
      <h1>{Math.random()>=0.5?"Over 0.5":"Under 0.5"}</h1>
    </div>
  )
}

export default TernaryOperator
