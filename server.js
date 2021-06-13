// импортировали модуль
const WebSocket = require("ws");

// создали web-сервер
const server = new WebSocket.Server({ port: 3000 });

// подпишемся на события
// событие connection сработает, когда клиент подключится к серверу
server.on("connection", (ws) => {
  // после подключения отправим клиенту сообщение
  ws.send("Добро пожаловать");
});
