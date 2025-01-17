// Import necessary hooks and context
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext"; // Importing the context to access counter state
import "./home.css"; // Importing the CSS for styling

function Home({ darkMode }) {  // Accept darkMode as a prop to switch themes
  const { count, increment, decrement, reset } = useContext(CounterContext); // Destructure necessary values and functions from the context

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}> {/* Apply dark class based on darkMode prop */}
      <div className={`home-card ${darkMode ? 'dark' : ''}`}>
        <h1 className={`home-title ${darkMode ? 'dark' : ''}`}>Counter</h1> {/* Title that changes color based on darkMode */}
        <p className="home-count">
          Current Count:{" "}
          <strong
            className={count !== 0 ? (count > 0 ? "positive" : "negative") : "initial"} // Apply color based on count value
          >
            {count}
          </strong>
        </p>
        <div className="home-buttons">
          <button
            className="home-button increment"
            onClick={increment} // Increment button to increase count
            aria-label="Increment count"
          >
            Increment
          </button>
          <button
            className="home-button reset"
            onClick={reset} // Reset button to reset count to zero
            aria-label="Reset count"
          >
            Reset
          </button>
          <button
            className="home-button decrement"
            onClick={decrement} // Decrement button to decrease count
            aria-label="Decrement count"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
