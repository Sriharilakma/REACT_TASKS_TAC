// Import the ChatbotIcon component for displaying the chatbot's icon
import ChatbotIcon from "./ChatbotIcon";

// Define the ChatMessage component, which takes a `chat` object as a prop
const ChatMessage = ({ chat }) => {
  return (
    // Only render the chat message if `hideInChat` is false
    !chat.hideInChat && (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}
    >
      {/* Adding  the chatbot icon only if the chat's role is model*/}
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
    )
  );
};

// Export the ChatMessage component for use in other parts of the application
export default ChatMessage;
