import React from 'react'
import { useUser } from './UserContext'

function Para() {
    const context = useUser();
    if (!context) {
        return null; 
    }
    const {user, changeUser} = context;
  return (
   <>
       <div>
        <p>{user}</p>
        <button onClick={changeUser}>Change the user</button>
       </div>
   </>
  )
}

export default Para