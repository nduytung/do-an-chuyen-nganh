import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const LiveComment = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ulRef = useRef() as React.LegacyRef<HTMLUListElement>;

  const [chatItemList, setChatItemList] = useState<any>([]);

  const socket = io("http://localhost:4000", {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd",
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = inputRef.current.value;
    socket.emit("on-chat", { message: message });
  };

  socket.on("on-chat", (message) => {
    setChatItemList([...chatItemList, message.message]);
  });

  return (
    <div>
      <h1>this is app chat</h1>
      <ul id="messages" ref={ulRef}>
        {chatItemList.map((item: any) => (
          <li> {item} </li>
        ))}
      </ul>
      <form action="submit" onSubmit={(e) => handleSubmit(e)} id="chat-form">
        <input type="text" ref={inputRef} />
        <button id="send-chat">send</button>
      </form>
    </div>
  );
};

export default LiveComment;
