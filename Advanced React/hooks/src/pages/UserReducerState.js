import { type } from '@testing-library/user-event/dist/type';
import React, { act, useReducer } from 'react'

const reducer=(state,action)=>{
    if(action.type==='fun') return {money:state.money-180};
    if(action.type==='work') return {money:state.money+1000};
    if(action.type==='dream') return {money:state.money+100000};
}
function UserReducerState() {
   const initialState={money:200};
   const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <h1>UseReducer</h1>
    <p>UseReducer is a hook that is used for state management. It is an alternative to useState. It is mostly used to manage state objects that contain multiple sub-values. It is a more powerful alternative to useState.</p>
     <h1>Wallet:{state.money}</h1>
     <div>
        <button onClick={()=>dispatch({type:"fun"})}>Eat dosa with freinds</button>
        <button onClick={()=>dispatch({type:"work"})}>Make ui/ux design for the startup</button>
        <button onClick={()=>dispatch({type:"dream"})}>Make dreams true of aai</button>
     </div>
    </>
  )
}

export default UserReducerState