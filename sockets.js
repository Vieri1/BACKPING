
const socketIo = require("socket.io");
const {socketHandlers}=require("./sockets/reguistrobody");
const {socketHandlerscontrol}=require("./sockets/controlBody");


// Mapa para almacenar los sockets de los usuarios
const userSockets = new Map();
let io; // Declaramos io como variable global en este módulo

function initializeSocket(server) {

    io = socketIo(server,{
        cors:{origin: "*"}
    });

    io.on("connection", (socket) => {
        console.log(`Nuevo cliente conectado: ${socket.id}`);

        // Evento de registro: asociamos el socket con el usuario
        socket.on("register", (userName) => {
            console.log("registro:", userName);
            userSockets.set(userName, socket); // Asocia el ID de usuario con el socket
        });
       
        // Evento para manejar movimientos
        socketHandlers(socket);
        socketHandlerscontrol(socket);
        
        // Desconexión: eliminamos el socket del mapa
        socket.on("disconnect", () => {
            userSockets.forEach((value, key) => {
                if (value.id === socket.id) {
                    userSockets.delete(key); // Elimina el socket asociado al userName
                }
            });
            console.log(`Cliente desconectado: ${socket.id}`);
        });
    });
}

function getIo() {
    if (!io) {
        throw new Error("Socket.io no ha sido inicializado. Llama a initializeSocket primero.");
    }
    return io;
}

module.exports = { initializeSocket, getIo, userSockets };

