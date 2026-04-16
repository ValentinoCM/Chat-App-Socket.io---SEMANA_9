import React from "react";
const UsersList = ({ users }) => (
  <div
    style={{
      width: 200,
      borderRight: "1px solid #ddd",
      padding: 16,
      background: "#f7f8fa",
    }}
  >
    <h4 style={{ margin: "0 0 12px", color: "#444" }}>
      👥 Conectados ({users.length})
    </h4>
    {users.map((u, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
        <span style={{ fontSize: 14 }}>{u}</span>
      </div>
    ))}
  </div>
);

export default UsersList;
