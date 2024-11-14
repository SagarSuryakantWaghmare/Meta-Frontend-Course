import React from 'react'
const bool=false;
function Example(props){
  return(
    <h2>The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}</h2>
  )
}

function ExpressionsAsProps() {
  return (
    <div>
      <Example toggleBoolean={!bool}/>
    </div>
  )
}

export default ExpressionsAsProps
