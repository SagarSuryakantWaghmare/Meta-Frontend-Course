import React from "react";
import { useState } from "react";
function GuessTheNumber() {
    const[result, setResult] = useState("");
    let random=Math.floor(Math.random*10)+1;
    function checkGuess(){
        let number=document.querySelector("input").value;
        number==random?setResult("You guessed it right"):setResult("You guessed it wrong");
    }
return (
    <>
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-4">Guess the Number</h1>
            <div className="flex flex-col items-center">
                <h2 className="text-lg font-normal mb-2">
                    Guess the number between 1 to 10
                </h2>
                <input
                    type="number"
                    min={1}
                    max={10}
                    placeholder="Enter number here"
                    className="border rounded p-2"
                />
            </div>
            <div>
                <button onClick={checkGuess} className="bg-blue-500 text-white px-4 py-2 rounded mt-4  hover:bg-blue-800">
                    Guess
                </button>
                <button onClick={()=>window.location.reload()} className="bg-red-500 text-white px-4 py-2 rounded mt-4  hover:bg-red-800">
                    Reset
                    </button>
            </div>
            <div>
                <h2 className="text-lg font-semibold mt-4">{result} </h2>
            </div>

        </div>
    </>
);
}

export default GuessTheNumber;
