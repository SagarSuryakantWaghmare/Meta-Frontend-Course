import React from 'react'

function ToggleMode() {
 let dark=true;
 function toggle(){
    dark=!dark
    dark?console.log("Dark Mode"):console.log("Light Mode")
 }
 function checkGuess(){
    let computerGuess=Math.floor((Math.random()*10)+1);
    let userGuess=document.getElementsByTagName('input')[0].value;
    console.log(computerGuess,userGuess)
    if(computerGuess==userGuess){
        alert("You Guessed right👍")
    }
    else{
        alert("Guess again")
    }
 }



  return (
    <>
    {/* <h1>Toggle Mode</h1>
    <button onClick={toggle}>click Toggle</button> */}
    <h2>
        Guess the number
    </h2>
    <input className='w-[200px]' type="number"  max={10 } min={1} placeholder='Enter your number here..'/>
    <br />
    <button onClick={checkGuess}>Check the guess</button>
    </>
    
  )
}

export default ToggleMode