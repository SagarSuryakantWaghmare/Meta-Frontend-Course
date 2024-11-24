import React, { useEffect, useState } from 'react';
import './RandomUser.css'; // Importing the CSS file

function RandomUser() {
  const [user, setUser] = useState(null);

  const FetchData = () => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    user && (
      <div className="random-user-container">
        <div className="random-user-header">Random User</div>
        <h4>Data of the Random User</h4>
        <div className="user-details">
          <h1 className="user-name">
            {user.name.first} {user.name.last}
          </h1>
          <p className="user-info">Email: {user.email}</p>
          <p className="user-info">Gender: {user.gender}</p>
          <p className="user-info">Age: {user.dob.age}</p>
        </div>
      </div>
    )
  );
}

export default RandomUser;
