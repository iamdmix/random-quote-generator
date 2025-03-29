import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
        },
      });

      if (response.data.length > 0) {
        const { quote, author } = response.data[0];
        setQuote(quote);
        setAuthor(author || "Unknown");
      } else {
        throw new Error("No quotes found.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch a quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="quote-container">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <>
          <p className="quote-text">"{quote}"</p>
          <p className="author-text">- {author}</p>
        </>
      )}
      <button onClick={fetchQuote} className="quote-button">
        Get New Quote
      </button>
    </main>
  );
};

export default QuoteMachine;