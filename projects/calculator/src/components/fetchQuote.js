import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = 'Life';
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'T4jhMp6jkPwaYLrw2IN+dg==9djzc72tDHZm9ypC',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setQuotes(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote-container">
      <h1>
        Quotes on &nbsp;
        {category}
      </h1>
      <span className="quote">
        <blockquote>
          <q>{quotes[0].quote}</q>
        </blockquote>
        <span className="author">
          {quotes[0].author}
        </span>
      </span>
    </div>
  );
}

export default QuoteDisplay;
