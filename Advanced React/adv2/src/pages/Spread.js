import React, { useState } from 'react';
import './Spread.css';

function Spread() {
    const [info, setInfo] = useState({
        name: 'Sagar',
        rollno: 40,
        grade: 'A+',
        aura: 1000,
        quote: 'Sagar can do anything'
    });

    function handleSubmit(e) {
        e.preventDefault();
        setInfo((prevInfo) => ({
            ...prevInfo,
            quote: 'Sagar will achieve the things he wants'
        }));
    }

    return (
        <>
            <h1>Student Information</h1>
            <div>
                <h2>{info.name}</h2>
                <h2>Roll No: {info.rollno}</h2>
                <h2>Grade: {info.grade}</h2>
                <h2>Aura: {info.aura}</h2>
            </div>
            <button onClick={handleSubmit}>Go to Range</button>
            <h1>{info.quote}</h1>
        </>
    );
}

export default Spread;
