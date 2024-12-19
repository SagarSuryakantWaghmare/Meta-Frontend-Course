import React, { useState, useEffect } from "react";

// Component to display mouse position
const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return (
      <div className="BasicTracker">
        <p>Move the mouse to see its position.</p>
      </div>
    );
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

function Cursor() {
  const [mousePosition, setMousePosition] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div style={{ height: "100vh", padding: "20px" }}>
      <h1>Track the Mouse Position</h1>
      <PanelMouseLogger mousePosition={mousePosition} />
    </div>
  );
}

export default Cursor;
