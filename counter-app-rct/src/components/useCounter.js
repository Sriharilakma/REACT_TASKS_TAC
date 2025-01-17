// Importing necessary hooks from React
import { useState, useCallback } from "react";

// Custom hook to manage counter and history
const useCounter = (initialValue = 0) => {
  // State for count, initialized with `initialValue`
  const [count, setCount] = useState(initialValue);

  // State for storing history of count values
  const [history, setHistory] = useState([]);

  // Memoized function to update history with the new count value
  const updateHistory = useCallback((newCount) => {
    // Add new count value to the history array
    setHistory((prev) => [...prev, newCount]);
  }, []); // `useCallback` ensures this function doesn't get recreated on every render

  // Memoized increment function that increases the count by 1
  const increment = useCallback(() => {
    setCount((prev) => {
      const newValue = prev + 1; // Increment count
      updateHistory(newValue); // Update history with the new count
      return newValue; // Return the new count value
    });
  }, [updateHistory]); // Depend on `updateHistory` to ensure it uses the latest memoized version

  // Memoized decrement function that decreases the count by 1
  const decrement = useCallback(() => {
    setCount((prev) => {
      const newValue = prev - 1; // Decrement count
      updateHistory(newValue); // Update history with the new count
      return newValue; // Return the new count value
    });
  }, [updateHistory]); // Depend on `updateHistory`

  // Memoized reset function that resets the count to 0
  const reset = useCallback(() => {
    updateHistory(0); // Update history with 0
    setCount(0); // Reset count to 0
  }, [updateHistory]); // Depend on `updateHistory`

  // Return the current count, history, and action functions
  return { count, history, increment, decrement, reset };
};

// Exporting the custom hook
export default useCounter;
