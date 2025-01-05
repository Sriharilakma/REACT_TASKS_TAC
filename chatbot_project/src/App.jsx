import { useEffect, useState, useRef } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { portfolioInfo } from "./components/portfolioInfo";

const App = () => {
  // State to manage the chat history
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: portfolioInfo // Initial portfolio information as a hidden message
    }
  ]);
  // State to manage the visibility of the chatbot
  const [showChatbot, setshowChatbot] = useState(false);
  // Ref for the chat body container to enable auto-scroll
  const chatBodyRef = useRef();

  // Function to generate the bot's response using an API call
  const generateBotResponse = async (history) => {
    // Helper function to update chat history with a new message
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError }
      ]);
    };

    // Format chat history for the API request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    // console.log("history",history);
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // Make the API call to fetch the bot's response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      // console.log("data", data);
      
      // Handle API errors
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");

      // Extract the response text and update the chat history
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\**/g, "$1") // Remove unnecessary formatting
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      // Update the chat history with an error message
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
     // Auto-scroll the chat body to the latest message when chat history updates 
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [chatHistory]);
  // console.log(chatBodyRef);


  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      
      <div className={`home-page ${showChatbot ? "chatbot-on" : ""}`}>
        <img src="https://ca.slack-edge.com/T013KKKA6ES-U07V8039SCD-521cca6a1ca5-512"/>
        <h1>Welcome to My Portfolio</h1>
        <p>You need to chat with me to learn more about me.</p>
      </div>
      
      <button
        onClick={() => setshowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setshowChatbot((prev) => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋 <br /> How can I help you today?
            </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
