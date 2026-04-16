import React from "react";
import { useState, useEffect, useRef } from "react";
import socket from "../services/socket";
import Message from "./Message";

const ChatBox = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!username) return;

    socket.emit("join", username);

    const handleMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [username]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send_message", {
      user: username,
      text,
      time: new Date().toLocaleTimeString(),
    });

    setText("");
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} currentUser={username} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div
        style={{
          display: "flex",
          padding: 12,
          borderTop: "1px solid #ddd",
          gap: 8,
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe un mensaje..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 24,
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 20px",
            borderRadius: 24,
            background: "#0084ff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
