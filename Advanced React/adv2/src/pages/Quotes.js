import React, { useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState(null); // Renamed to lowercase for convention
  const [error, setError] = useState(null); // To handle and display errors if needed

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/quotes");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setQuotes(data); // Update the state with the fetched quotes
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Quotes</h1>
      <button onClick={fetchQuotes}>Get Quotes</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {quotes && (
        <ul>
          {quotes.slice(0, 10).map((quote, index) => (
            <li key={index}>
              <p>{quote.q}</p>
              <small>- {quote.a}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Quotes;
