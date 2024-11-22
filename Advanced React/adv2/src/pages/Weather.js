import React, { useState } from 'react'

function Weather() {
    const[city,setCity]=useState('');
    const[weather,setWeather]=useState(null);
    const fetchWeather=async ()=>{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7cd209f9de47301417a9b2318193216`);
        const data =await response.json();
        setWeather(data);
    }
  return (
    <>
    <input 
    type='text'
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    placeholder='Enter City Name'
    />
    <button onClick={fetchWeather}>Get Weather</button>
    {weather && (
        <div>
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <p>{Math.round(weather.main.temp-273.15)}°C</p>
        </div>
    )}

    </>
  )
}

export default Weather