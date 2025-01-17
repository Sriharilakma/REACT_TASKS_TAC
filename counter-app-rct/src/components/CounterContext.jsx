import React, { createContext, useState } from "react";

// Create Context to share state and functions
export const CounterContext = createContext();

// Create Provider Component that wraps the app and provides context value
export const CounterProvider = ({ children }) => {
  // useState to manage the count and history state
  const [count, setCount] = useState(0); // count starts at 0
  const [history, setHistory] = useState([]); // history starts as an empty array

  // Increment function that updates count and adds to history
  const increment = () => {
    setCount((prev) => {
      const newCount = prev + 1; // Increment count
      setHistory((prevHistory) => [
        ...prevHistory,
        { action: "increased", value: newCount }, // Add new action to history
      ]);
      return newCount; // Return new count to update state
    });
  };

  // Decrement function that updates count and adds to history
  const decrement = () => {
    setCount((prev) => {
      const newCount = prev - 1; // Decrement count
      setHistory((prevHistory) => [
        ...prevHistory,
        { action: "decreased", value: newCount }, // Add new action to history
      ]);
      return newCount; // Return new count to update state
    });
  };

  // Reset function that sets count to 0 and adds reset action to history
  const reset = () => {
    setCount(0); // Reset count to 0
    setHistory((prevHistory) => [
      ...prevHistory,
      { action: "reset", value: 0 }, // Add reset action to history
    ]);
  };

  // Clear history function that resets the history state
  const clearHistory = () => {
    setHistory([]); // Clear history by setting it to an empty array
  };

  // Provide the state and functions to children components through context
  return (
    <CounterContext.Provider
      value={{ count, increment, decrement, reset, history, clearHistory }}
    >
      {children}
    </CounterContext.Provider>
  );
};
