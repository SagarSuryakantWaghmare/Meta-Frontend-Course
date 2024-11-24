import React, { useEffect, useState } from 'react'

function RandomUser() {
    const[user,setUser]=useState(null);
    const FetchData=()=>{
        fetch('https://randomuser.me/api/?results=1')
        .then(response=>response.json())
        .then(console.log(user))
        .then(data => setUser(data.results[0]))
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        FetchData();
    },[])
  return user && (
    <>
    <div>RandomUser</div>
    <h4>Data of the random user</h4>
    <h1>name of the user{user.name.first} {user.name.last}</h1>
    <p>Email of the user is {user.email}</p>
    <p>Gender of the user is {user.gender}</p>
    <p>Age of the user is  {user.dob.age}</p>
    </>
  )
}

export default RandomUser