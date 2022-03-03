import Header from "./components/Header/Header";
import ChatInput from "./components/inputBox/InputBox";
import ChatBubble from "./components/ChatBubble/ChatBubble";
import "./App.css";
import { useChat } from "./Context/ChatContext";

function App() {
  const { chats } = useChat();
  return (
    <div className="App">
      <Header />
      <div className="h-[90%] w-[70%] mx-auto border-2 border-solid border-blue-500">
        <div className="h-[90%] overflow-y-scroll">
          {chats.length === 0 ? (
            <p>No chat History</p>
          ) : (
            chats.map(({ message }) => (
              <>
                <ChatBubble sentBy={"user"}>{message}</ChatBubble>
                <ChatBubble sentBy={"bot"}>{message}</ChatBubble>
              </>
            ))
          )}
        </div>
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
