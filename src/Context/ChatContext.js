import { createContext, useContext, useEffect, useState } from "react";

const chatContext = createContext([]);

export const useChat = () => useContext(chatContext);

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(
    JSON.parse(localStorage.getItem("chats")) || []
  );

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  return (
    <chatContext.Provider value={{ chats, setChats }}>
      {children}
    </chatContext.Provider>
  );
};
