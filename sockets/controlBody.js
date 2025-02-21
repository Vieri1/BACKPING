const { getIo } = require('../sockets');
const {
    newControlBody,
    getControlBodys,
    getControlBody,
    updateControlBody,
    deleteControlBody,
} = require('../controllers/controlBodyController');

const socketHandlerscontrol = (socket) => {
    // Evento para obtener un solo ControlBody
    socket.on("getControlBody", async (data, callback) => {
        const { id } = data;

        try {
            const response = await getControlBody(id);
            if (!response)
                return callback({ status: 500, message: "Error al obtener el ControlBody" });

            const io = getIo();
            io.emit("getControlBody", { message: "Se realizó la operación correctamente para el ControlBody", data: response });

            callback({ status: 200, message: "Se realizó la operación correctamente para el ControlBody", data: response });

        } catch (error) {
            console.error("Error en el controlador", error);
            callback({ status: 500, message: "Error al obtener el ControlBody" });
        }
    });

    // Evento para eliminar un ControlBody
    socket.on("deleteControlBody", async (data, callback) => {
        const { id } = data;
        try {
            const response = await deleteControlBody(id);

            if (!response) {
                return callback({ status: 500, message: "Error al eliminar el ControlBody." });
            }
            const io = getIo();
            io.emit("changeStateControlBody", { message: "Se eliminó correctamente el ControlBody", data: response });

            callback({ status: 200, message: "Se eliminó correctamente el ControlBody" });

        } catch (error) {
            console.error("Error en el controlador", error);
            callback({ status: 500, message: "Error al eliminar el ControlBody" });
        }
    });

    // Evento para obtener todos los ControlBodys con paginación
    socket.on("getAllControlBodys", async (data, callback) => {
        const { page = 1, limit = 20 } = data;

        if (isNaN(page) || page <= 0 || isNaN(limit) || limit <= 0) {
            return callback({ status: 400, message: "Page y limit deben ser números válidos" });
        }

        try {
            const response = await getControlBodys(Number(page), Number(limit));

            const io = getIo();
            io.emit("listaAllControlBodys", { message: 'ControlBodies obtenidos correctamente', data: response });

            callback({ status: 200, message: "ControlBodies obtenidos correctamente", data: response });
        } catch (error) {
            console.error("Error al obtener ControlBodies:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });

    // Evento para actualizar un ControlBody
    socket.on('updateControlBody', async (data, callback) => {
        const { id, id_Body, id_dni, id_turno, id_jurisdiccion, id_unidad, fecha_entrega, hora_entrega, fecha_devolucion, hora_devolucion, status } = data;

        const errores = [];

        if (!id_Body) errores.push("El campo id_Body es requerido");
        if (!id_dni) errores.push("El campo id_dni es requerido");
        if (!id_turno) errores.push("El campo id_turno es requerido");
        if (!id_jurisdiccion) errores.push("El campo id_jurisdiccion es requerido");
        if (!id_unidad) errores.push("El campo id_unidad es requerido");
        if (!fecha_entrega) errores.push("El campo fecha_entrega es requerido");
        if (!hora_entrega) errores.push("El campo hora_entrega es requerido");
        if (!fecha_devolucion) errores.push("El campo fecha_devolucion es requerido");
        if (!hora_devolucion) errores.push("El campo hora_devolucion es requerido");
        if (!status) errores.push("El campo status es requerido");

        if (errores.length > 0) {
            return callback({ status: 400, errores });
        }

        try {
            const response = await updateControlBody(id, { id_Body, id_dni, id_turno, id_jurisdiccion, id_unidad, fecha_entrega, hora_entrega, fecha_devolucion, hora_devolucion, status });

            if (!response) {
                return callback({ status: 500, message: "Error al modificar el ControlBody." });
            }

            // Emitir evento a todos los clientes
            const io = getIo();
            io.emit("controlBodyActualizado", { message: "ControlBody actualizado con éxito", data: response });

            callback({ status: 200, message: "ControlBody actualizado con éxito", data: response });
        } catch (error) {
            console.error("Error al modificar ControlBody:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });

    // Evento para crear un nuevo ControlBody
    socket.on('createControlBody', async (data, callback) => {
        const { id_Body, id_dni, id_turno, id_jurisdiccion, id_unidad, fecha_entrega, hora_entrega, fecha_devolucion, hora_devolucion, status } = data;

        const errores = [];

        if (!id_Body) errores.push("El campo id_Body es requerido");
        if (!id_dni) errores.push("El campo id_dni es requerido");
        if (!id_turno) errores.push("El campo id_turno es requerido");
        if (!id_jurisdiccion) errores.push("El campo id_jurisdiccion es requerido");
        if (!id_unidad) errores.push("El campo id_unidad es requerido");
        if (!fecha_entrega) errores.push("El campo fecha_entrega es requerido");
        if (!hora_entrega) errores.push("El campo hora_entrega es requerido");
        if (!fecha_devolucion) errores.push("El campo fecha_devolucion es requerido");
        if (!hora_devolucion) errores.push("El campo hora_devolucion es requerido");

        if (errores.length > 0) {
            return callback({ status: 400, errores });
        }

        try {
            const response = await newControlBody({ id_Body, id_dni, id_turno, id_jurisdiccion, id_unidad, fecha_entrega, hora_entrega, fecha_devolucion, hora_devolucion, status });

            if (!response) {
                return callback({ status: 500, message: "Error al registrar el ControlBody." });
            }

            // Emitir evento a todos los clientes
            const io = getIo();
            io.emit("controlBodyRegistrado", { message: "ControlBody registrado con éxito", data: response });

            callback({ status: 200, message: "ControlBody registrado con éxito", data: response });
        } catch (error) {
            console.error("Error al registrar ControlBody:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });

    // Evento de desconexión
    socket.on("disconnect", () => {
        console.log(`Cliente desconectado: ${socket.id}`);
    });
};

module.exports = socketHandlerscontrol
;
