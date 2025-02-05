const { getIo } = require('../sockets');
const { newbody, updatebodyCam } = require("../controllers/bodyCamController");

const socketHandlers = (socket) => {
   // console.log(`Cliente conectado: ${socket.id}`);

    // Evento para actualizar BodyCam
    socket.on('updateBody', async (data, callback) => {
        const { id, numero, serie, nro_bateria, id_proveedor } = data;

        const errores = [];
        const regexNumeros = /^[0-9]+$/;
        const regexLetrasNumeros = /^[a-zA-Z0-9]+$/;

        if (!numero) errores.push("El campo numero es requerido");
        else if (!regexNumeros.test(numero)) errores.push("El campo 'numero' solo debe contener números.");

        if (!serie) errores.push("El campo serie es requerido");
        else if (!regexLetrasNumeros.test(serie)) errores.push("La serie solo debe tener números y letras.");

        if (!nro_bateria) errores.push("El campo nro_bateria es requerido");
        else if (!regexLetrasNumeros.test(nro_bateria)) errores.push("El nro_bateria solo debe tener números y letras.");

        if (errores.length > 0) {
            return callback({ status: 400, errores });
        }

        try {
            const response = await updatebodyCam(id, { numero, serie, nro_bateria, id_proveedor });

            if (!response) {
                return callback({ status: 500, message: "Error al modificar la BodyCam." });
            }

            // Emitir evento a todos los clientes
            const io = getIo();
            io.emit("bodyCamActualizada", { message: "BodyCam modificada con éxito", data: response });

            callback({ status: 200, message: "BodyCam modificada con éxito", data: response });
        } catch (error) {
            console.error("Error al modificar BodyCam:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });

    // Evento para crear una nueva BodyCam
    socket.on('createBody', async (data, callback) => {
        const { numero, serie, nro_bateria } = data;

        const errores = [];
        const regexNumeros = /^[0-9]+$/;
        const regexLetrasNumeros = /^[a-zA-Z0-9]+$/;

        if (!numero) errores.push("El campo numero es requerido");
        else if (!regexNumeros.test(numero)) errores.push("El campo 'numero' solo debe contener números.");

        if (!serie) errores.push("El campo serie es requerido");
        else if (!regexLetrasNumeros.test(serie)) errores.push("La serie solo debe tener números y letras.");

        if (!nro_bateria) errores.push("El campo nro_bateria es requerido");
        else if (!regexLetrasNumeros.test(nro_bateria)) errores.push("El nro_bateria solo debe tener números y letras.");

        if (errores.length > 0) {
            return callback({ status: 400, errores });
        }

        try {
            const newBody = await newbody({ numero, serie, nro_bateria });

            if (!newBody) {
                return callback({ status: 500, message: "Error al registrar la BodyCam." });
            }

            // Emitir evento a todos los clientes
            const io = getIo();
            io.emit("bodyCamRegistrada", { message: "BodyCam registrada con éxito", data: newBody });

            callback({ status: 200, message: "BodyCam registrada con éxito", data: newBody });
        } catch (error) {
            console.error("Error al registrar BodyCam:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });

    socket.on("disconnect", () => {
        console.log(`Cliente desconectado: ${socket.id}`);
    });
};

module.exports = socketHandlers;
