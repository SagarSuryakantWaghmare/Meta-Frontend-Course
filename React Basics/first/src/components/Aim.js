import React from 'react'

function Aim(Props) {
    console.log(Props)
    let aim=Props.aim;
    let sign=Props.sign;
  return (
    <>
    <div className=' flex justify-center'>
        <h1>{aim}</h1>
        <h4>{sign}</h4>
    </div>
    </>
  )
}

export default Aim