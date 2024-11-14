import React from 'react'
import sagar from '../Assets/Sagar.jpg';
function avatar(props){
    const userPic = <img alt='sagar' src={sagar} className="rounded-full w-32 h-32" />;
    return userPic;
}
function Embedding() {
  return (
    <div>
      {avatar()}
    </div>
  )
}

export default Embedding
