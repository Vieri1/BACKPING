
const socketIo = require("socket.io");
const {socketHandlers}=require("./sockets/reguistrobody");
const {socketHandlerscontrol}=require("./sockets/controlBody");


// Mapa para almacenar los sockets de los usuarios
const userSockets = new Map();
let io; // Declaramos io como variable global en este módulo

function initializeSocket(server) {
    io = socketIo(server, {
        cors: { origin: "*" }
    });

    io.on("connection", (socket) => {
        console.log(`Nuevo cliente conectado: ${socket.id}`);

        socket.on("register", (userName) => {
            console.log("registro:", userName);
            userSockets.set(userName, socket);
        });

        // Pasar `io` como argumento
        socketHandlers(socket, io);
        socketHandlerscontrol(socket, io);  

        socket.on("disconnect", () => {
            userSockets.forEach((value, key) => {
                if (value.id === socket.id) {
                    userSockets.delete(key);
                }
            });
            console.log(`Cliente desconectado: ${socket.id}`);
        });
    });
}

module.exports = { initializeSocket, userSockets };



