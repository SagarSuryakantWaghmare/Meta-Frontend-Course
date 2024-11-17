import React from 'react'
import Aim from './Aim'
function Ultima() {
    const data={
        aim:"Sagar will became the best developer and He will prove all them wrong who are saying that he is Loser",
        sign:"Sagar"
    }
  return (
    <>
    <h1>I will prove myself.</h1>
    <Aim aim={data.aim} sign={data.sign} />
    </>
  )
}

export default Ultima