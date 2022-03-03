const Chatbubble = ({ sentBy, children }) => {
  return (
    <div className="w-full">
      <div
        className={`w-48 min-h-[2rem] p-1 rounded-sm border-2 border-solid ${
          sentBy === "user"
            ? "bg-blue-300 border-blue-800 ml-auto"
            : "border-blue-700 mr-auto"
        }`}
      >
        <p
          className={`text-2x font-bold ${
            sentBy === "user" ? "text-black" : "text-red-600"
          }`}
        >
          {sentBy === "user" ? "User" : "Mirror Bot"}
        </p>
        <p className={`font-medium ${ sentBy === "user" ? "text-blue-700" : "text-blue-700"}`}>{children}</p>
      </div>
    </div>
  );
};

export default Chatbubble;
