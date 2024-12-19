import React from 'react'
function Row({children}){
    // const childStyle={
    //     margin
    // }
    return(
        <div>
        {React.children.map(children,(child,index)=>{
            return child;
        })}
        </div>
    )
}
function Api() {
  return (
   <>
   <h1>Live Orders</h1>
   <div>
    <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30rs</p>
        <p>10:80</p>
        <p>Sam</p>
    </Row>
   </div>
   </>
  )
}

export default Api