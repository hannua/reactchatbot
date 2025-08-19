import ChatbotIcon from "./components/chatboticon";

const App = () => {
  return (
    <div className="container">
      <div className="chat-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-chat">ChatBot</h2>
          </div>
          <button className="material-symbols-outlined">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br />
              How can I assist you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">Loreum plasum</p>
          </div>
        </div>
        {/* Chatbot Footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              className="message-input"
              placeholder="Type your message..."
            />
            <button className="material-symbols-outlined">
              keyboard_arrow_up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
