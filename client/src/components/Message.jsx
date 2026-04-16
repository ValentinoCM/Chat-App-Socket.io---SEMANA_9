import React from "react";
const Message = ({ msg = {}, currentUser }) => {
  const isOwn = msg?.user === currentUser;
  const isSystem = msg?.user === "Sistema";

  if (isSystem) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#888",
          fontSize: 12,
          margin: "4px 0",
        }}
      >
        {msg?.text}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isOwn ? "flex-end" : "flex-start",
        margin: "6px 0",
      }}
    >
      <div
        style={{
          maxWidth: "65%",
          padding: "8px 14px",
          borderRadius: isOwn ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          background: isOwn ? "#0084ff" : "#e4e6eb",
          color: isOwn ? "#fff" : "#000",
          wordBreak: "break-word",
        }}
      >
        {!isOwn && (
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 2,
              opacity: 0.8,
            }}
          >
            {msg?.user}
          </div>
        )}

        <div>{msg?.text}</div>

        {msg?.time && (
          <div
            style={{
              fontSize: 10,
              opacity: 0.6,
              textAlign: "right",
              marginTop: 2,
            }}
          >
            {msg?.time}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
