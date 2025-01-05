// Import React and the useRef hook
import React, { useRef } from "react";

// Define the ChatForm component, which takes props: chatHistory, setChatHistory, and generateBotResponse
const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  // Create a reference for the input field
  const inputRef = useRef();

   // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const userMessage = inputRef.current.value.trim(); // Get the input value and remove leading/trailing spaces
    if (!userMessage) return; // Do nothing if the input is empty
    inputRef.current.value = ""; // Clear the input field after submission

    // Update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Delay showing "Thinking..." and generating the bot's response
    setTimeout(() => {
      // Add a "Thinking..." placeholder to the chat history for the bot's response
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // Generate the bot's response using the user's query and current chat history
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above, please address this query: ${userMessage}`
        },
      ]);
    }, 0); // Immediate delay (0 ms) ensures the UI updates smoothly
  };

  return (
    // Render the chat input form
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

// Export the ChatForm component for use in other parts of the application
export default ChatForm;
