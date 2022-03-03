import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChatProvider } from "./Context/ChatContext";

ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
