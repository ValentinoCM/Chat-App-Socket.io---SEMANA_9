import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ChatBox from "../components/ChatBox";
import UsersList from "../components/UsersList";
import socket from "../services/socket";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("user_list", setUsers);
    return () => socket.off("user_list");
  }, []);

  if (!joined)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#f0f2f5",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 32,
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: 300,
          }}
        >
          <h2 style={{ marginBottom: 20 }}>💬 Chat App</h2>
          <input
            placeholder="Tu nombre..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && username.trim() && setJoined(true)
            }
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #ccc",
              marginBottom: 12,
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={() => username.trim() && setJoined(true)}
            style={{
              width: "100%",
              padding: 12,
              background: "#0084ff",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Entrar al chat
          </button>
        </div>
      </div>
    );

  return (
    <div style={{ display: "flex", height: "100vh", background: "#fff" }}>
      <UsersList users={users} />
      <ChatBox username={username} />
    </div>
  );
};

export default Chat;
