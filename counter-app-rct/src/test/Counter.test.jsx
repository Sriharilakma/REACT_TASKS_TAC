import "@testing-library/jest-dom"; 
// Extends Jest with additional matchers such as `toBeInTheDocument`. 
// This is helpful for testing DOM elements more effectively.

import { render, screen, fireEvent } from "@testing-library/react"; 
// `render`: Renders the React components into a virtual DOM for testing.
// `screen`: Provides queries to interact with rendered components.
// `fireEvent`: Simulates user actions like clicks.

import { CounterProvider } from "../components/CounterContext"; 
// Imports the context provider to wrap the app, ensuring the context is available during tests.

import App from "../App"; 
// Imports the main app component to test its functionality.

test("increments the counter correctly", () => {
  render(
    <CounterProvider> 
      {/* Wraps the App component with `CounterProvider` to provide context values */}
      <App />
    </CounterProvider>
  );

  const incrementButton = screen.getByText("Increment"); 
  // Finds the button with the text "Increment" on the rendered DOM.

  fireEvent.click(incrementButton); 
  // Simulates a user click on the increment button.

  expect(screen.getByText("1")).toBeInTheDocument(); 
  // Asserts that the element displaying the count now contains "1".
  // Ensures that the increment operation worked as expected.
});

test("decrements the counter correctly", () => {
  render(
    <CounterProvider>
      <App />
    </CounterProvider>
  );

  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByText("Decrement");

  fireEvent.click(incrementButton); // Increment first to avoid negative values.
  fireEvent.click(decrementButton); // Decrement to check its functionality.

  expect(screen.getByText("0")).toBeInTheDocument(); 
  // Confirms that the decrement operation brings the count back to "0".
});

test("resets the counter correctly", () => {
  render(
    <CounterProvider>
      <App />
    </CounterProvider>
  );

  const incrementButton = screen.getByText("Increment");
  const resetButton = screen.getByText("Reset");

  fireEvent.click(incrementButton); // Increment the counter.
  fireEvent.click(resetButton); // Reset the counter to check reset functionality.

  expect(screen.getByText("0")).toBeInTheDocument(); 
  // Ensures the reset operation successfully sets the counter back to "0".
});
