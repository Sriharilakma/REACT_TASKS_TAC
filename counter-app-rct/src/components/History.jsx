import React, { useContext } from "react";
import { CounterContext } from "./CounterContext"; // Accessing context to get the history and clearHistory function
import "./history.css"; // Importing styling for the history component

function History({ darkMode }) {
  const { history, clearHistory } = useContext(CounterContext); // Using context to get history data and clearHistory function

  return (
    <div className={`history ${darkMode ? "dark" : ""}`}> {/* Applying dark mode styling based on darkMode prop */}
      <h1 className={`history-title ${darkMode ? "dark" : ""}`}>History</h1> {/* Title with dark mode styling */}
      
      {/* Conditionally render the "Clear History" button if history exists */}
      {history.length > 0 && (
        <button
          className={`clear-history-button ${darkMode ? "dark" : ""}`} // Button styling changes with darkMode
          onClick={clearHistory} // Clears the history when clicked
          aria-label="Clear History"
        >
          Clear History
        </button>
      )}
      
      {/* Render the history list or a message if there are no entries */}
      <ul className={`history-list ${darkMode ? "dark" : ""}`}>
        {history.length > 0 ? (
          history.map((entry, index) => (
            <li
              key={index}
              className={`history-item ${
                entry.action === "increased"
                  ? "increment"
                  : entry.action === "decreased"
                  ? "decrement"
                  : entry.action === "reset"
                  ? "reset"
                  : ""
              } ${darkMode ? "dark" : ""}`} // Applying different classes based on the action (increment, decrement, reset)
            >
              Count was {entry.action} to {entry.value} {/* Displaying each history entry */}
            </li>
          ))
        ) : (
          // Showing message when no history
          <p className={`no-history ${darkMode ? "dark" : ""}`}>No history available</p>
        )}
      </ul>
    </div>
  );
}

export default History;
