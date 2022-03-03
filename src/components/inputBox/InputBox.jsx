import { useState } from "react";
import { useChat } from "../../Context/ChatContext";

const Inputbox = () => {
  const [currMessage, setCurrMessage] = useState("");
  const inputHandler = (evt) => setCurrMessage(evt.target.value);
  const { setChats } = useChat();

  const sendButtonHandler = () => {
    console.log(currMessage);
    setChats((prevChats) => [
      ...prevChats,
      { time: new Date(), message: currMessage, sendBy: "user" },
    ]);
    setCurrMessage("");
  };

  return (
    <div className="w-full h-[10%] border-2 border-solid border-blue-500 p-2 flex justify-around">
      <input
        type="text"
        value={currMessage}
        onChange={inputHandler}
        className="p-2 border-2 border-solid border-blue-800 rounded-sm outline-none w-4/5"
        placeholder="Enter your message"
      />
      <button
        className="p-2 px-4 border-2 border-solid bg-blue-500 border-blue-800 font-semibold sm:w-1/5 md:w-[15%] text-white rounded-sm"
        onClick={sendButtonHandler}
      >
        Send
      </button>
    </div>
  );
};

export default Inputbox;
