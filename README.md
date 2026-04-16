# 💬 Real-Time Chat App

Aplicación de chat en tiempo real desarrollada con **React + Vite** en el frontend y **Node.js + Express + Socket.io** en el backend.

---

## 🚀 Descripción

Este proyecto permite la comunicación en tiempo real entre múltiples usuarios mediante WebSockets. Los usuarios pueden ingresar con un nombre, enviar mensajes y ver quiénes están conectados.

---

## 🛠️ Tecnologías utilizadas

### 🔹 Frontend (`client`)

- React
- Vite
- Socket.io-client

### 🔹 Backend (`server`)

- Node.js
- Express
- Socket.io
- CORS

---

## 📁 Estructura del proyecto

```id="i8ub8d"
realtime-chat-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Message.jsx
│   │   │   └── UsersList.jsx
│   │   ├── pages/
│   │   │   └── Chat.jsx
│   │   ├── services/
│   │   │   └── socket.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── sockets/
│   │   └── chatSocket.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el proyecto

```id="a9o5k9"
git clone <URL_DEL_REPOSITORIO>
cd realtime-chat-app
```

---

### 2. Instalar dependencias

#### Frontend

```id="q1xsbm"
cd client
npm install
```

#### Backend

```id="36olb7"
cd ../server
npm install
```

---

## ▶️ Ejecución

### 🔹 Iniciar backend

```id="5b16uy"
cd server
node index.js
```

Servidor:

```id="1a6b4k"
http://localhost:4000
```

---

### 🔹 Iniciar frontend

```id="7ozsnh"
cd client
npm run dev
```

Aplicación:

```id="hm3gn4"
http://localhost:5173
```

---

## 🔌 Configuración importante

### ✅ CORS (Backend)

En `server/index.js`:

```js id="33hljb"
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
```

---

## 💡 Funcionalidades

- 👤 Ingreso de usuario
- 💬 Envío y recepción de mensajes en tiempo real
- 👥 Visualización de usuarios conectados
- 🔄 Actualización automática mediante WebSockets

---

## 🐛 Problemas comunes y soluciones

### ❌ React no definido

```id="xsltr7"
React is not defined
```

Solución:

```js id="p7q9je"
import React from "react";
```

---

### ❌ Error CORS

```id="zz2pmy"
blocked by CORS policy
```

Solución:

- Verificar que el backend permita `http://localhost:5173`

---

### ❌ socket.io-client no instalado

```id="p6d9ch"
Failed to resolve import "socket.io-client"
```

Solución:

```bash id="1fl6jz"
npm install socket.io-client --legacy-peer-deps
```

---

### ❌ JSX no reconocido

```id="9l2q4o"
The JSX syntax extension is not currently enabled
```

Solución:

- Usar extensión `.jsx` en archivos React

---

## 📌 Recomendaciones

- Ejecutar backend y frontend simultáneamente
- Reiniciar servidores después de cambios
- Verificar rutas e imports correctamente
- Usar `.jsx` para componentes React

---

## 👨‍💻 Autor

Valentino Cuenca Moreno

---

## 📄 Licencia

Proyecto desarrollado con fines educativos.
