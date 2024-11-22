import React, { useState } from "react";

function Jokes() {
  const [Jokes, setJokes] = useState(null);

  const fetchJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJokes(data);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Jokes</h1>
      <button style={styles.button} onClick={fetchJoke}>
        Tell me a Joke
      </button>
      {Jokes && (
        <div style={styles.jokeContainer}>
          <h3 style={styles.punchline}>{Jokes.punchline}</h3>
          <p style={styles.setup}>{Jokes.setup}</p>
          <span style={styles.type}>{`Type: ${Jokes.type}`}</span>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    color: "#4CAF50",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px 0",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  jokeContainer: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  punchline: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  setup: {
    fontSize: "1.2rem",
    color: "#555",
    margin: "10px 0",
  },
  type: {
    fontSize: "0.9rem",
    color: "#888",
  },
};

export default Jokes;
