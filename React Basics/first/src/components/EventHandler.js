import React, { useState } from "react";

function EventHandler() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("The button was clicked");
    setCount(count + 1);
  }

  function handlePowerUp() {
    console.log("Sagar will never give up on his dreams. That is his ultimate way!");
    alert("Sagar will never give up on his dreams. That is his ultimate way!");
  }

  return (
    <>
      <button className="text-2xl border-b-orange-600" onClick={handleClick}>
        Increase the power of the dino
      </button>
      <div>{count}</div>
      <button onClick={handlePowerUp}>Power up</button>
    </>
  );
}

export default EventHandler;
