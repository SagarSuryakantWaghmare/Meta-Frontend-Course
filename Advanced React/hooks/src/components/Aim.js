import React, { useState } from 'react'


function Aim() {
    const [aim,setAim]=useState(
        {
            aim:"To become a Full Stack Developer",
            will:"I will work hard to achieve my goal",
            studyHours:"I will study 16 hours daily",
            focus:"I will focus on my goal",
            valid:true,
        }
    )
    function enhanceAim(e){
        e.preventDefault();
        setAim(prevState=>{
            return{
                ...prevState,
                focus:"Enhance the focus",
                studyHours:"if you don't get time then do it next day"
            }
        })
    }
    
  return (
    <>
    <h1>Hi,I am Sagar and i have aim in my life.</h1>
    <div style={{display:'flex',textAlign:'center',justifyContent:'center',flexDirection:'column'}}>
    <h2>My Aim</h2>
    <h2>Aim:{aim.aim}</h2>
    <h3>{aim.will}</h3>
    <h2>{aim.studyHours}</h2>
    <h2>{aim.focus}</h2>
    {aim.valid && (
        <button onClick={enhanceAim}>
        Enhance Aim
       </button>
    )}
    </div>
        
    </>
  )
}

export default Aim