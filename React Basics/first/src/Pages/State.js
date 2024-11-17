import React, { useState } from 'react'
import Fruits from './Fruits'
import FruitsCounter from './FruitsCounter' ;
function State() {
    const[fruits]=useState([
        {fruitName:'apple',id:1},
        {fruitName:'orange',id:2},
        {fruitName:'plum',id:3},
    ])
  return (
    <div>
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits}/>
        <FruitsCounter fruits ={fruits}/>
    </div>
  )
}

export default State