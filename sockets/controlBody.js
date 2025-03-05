
const {
    newControlBody,
    getControlBodys,
    getControlBody,
    updateControlBody,
    deleteControlBody,
} = require('../controllers/controlBodyController');
const{
    getBodyCamByName
}=require("../controllers/bodyCamController")
const{
    newPersona
}=require("../controllers/personaController")
const{
 getHorario 

}=require("../controllers/horarioController");
const{
    getJurisdiccion
}=require("../controllers/jurisdiccionesController")
const{
    newfuncion
}=require("../controllers/funcionController");

const{
getUnidad
}=require("../controllers/UnidadController");
const socketHandlerscontrol = (socket,io) => {

    console.log("socketHandlers ejecutándose en:", socket.id);

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


    // Evento para obtener todos los ControlBodys con paginación
    socket.on("getAllControlBodys", async (data, callback) => {
        const { page = 1, limit = 20 } = data;

        if (isNaN(page) || page <= 0 || isNaN(limit) || limit <= 0) {
            return callback({ status: 400, message: "Page y limit deben ser números válidos" });
        }

        try {
            const response = await getControlBodys(Number(page), Number(limit));
            console.log("esta es la respuesta ", response);
    
            callback({ status: 200, message: "ControlBodies obtenidos correctamente", data: response });
        } catch (error) {
            console.error("Error al obtener ControlBodies:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });

    socket.on('createControlBody', async (data, callback) => {
        console.log("Esta es la data de Flutter:", data);
        
        try {
            const errores = [];
            const regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/;
            const { numero, nombres, apellidos, dni, turno, jurisdiccion, fecha_entrega, funcion, unidad, hora_entrega } = data;
            
            // Validaciones de entrada
            if (typeof numero !== "string") errores.push("El campo 'numero' debe ser un string.");
            if (!numero || numero.trim() === "") errores.push("El campo 'numero' no puede estar vacío.");
            if (!regex.test(numero)) errores.push("El campo 'numero' no debe contener caracteres especiales.");
            
            if (typeof nombres !== "string") errores.push("El campo 'nombres' debe ser un string.");
            if (!nombres || nombres.trim() === "") errores.push("El campo 'nombres' no puede estar vacío.");
            if (!regex.test(nombres)) errores.push("El campo 'nombres' no debe contener caracteres especiales.");
            
            if (typeof apellidos !== "string") errores.push("El campo 'apellidos' debe ser un string.");
            if (!apellidos || apellidos.trim() === "") errores.push("El campo 'apellidos' no puede estar vacío.");
            if (!regex.test(apellidos)) errores.push("El campo 'apellidos' no debe contener caracteres especiales.");
            
            if (errores.length > 0) {
                return callback({ status: 400, message: "Errores en los datos de entrada", errores });
            }
            
            let id_Body, id_dni, id_turno, id_jurisdiccion, id_funcion, id_unidad;
    
            // Obtener IDs y manejar casos donde no existan en la DB
            const get_id_dni = await newPersona({ dni, nombres, apellidos });
            if (!get_id_dni) return callback({ status: 404, message: "La persona con el DNI proporcionado no existe." });
            id_dni = get_id_dni.id;
    
            const get_id = await getBodyCamByName(numero);
            if (!get_id) return callback({ status: 404, message: "El número de Body Cam no existe en la base de datos." });
            id_Body = get_id.id;
    
            const get_id_turno = await getHorario(turno);
            if (!get_id_turno) return callback({ status: 404, message: "El turno especificado no existe." });
            id_turno = get_id_turno.id;
    
            const get_id_jurisdiccion = await getJurisdiccion(jurisdiccion);
            if (!get_id_jurisdiccion) return callback({ status: 404, message: "La jurisdicción especificada no existe." });
            id_jurisdiccion = get_id_jurisdiccion.id;
    
            const get_id_funcion = await newfuncion({ funcion });
            if (!get_id_funcion) return callback({ status: 404, message: "La función especificada no existe." });
            id_funcion = get_id_funcion.id;
    
            const get_id_unidad = await getUnidad(unidad);
            if (!get_id_unidad) return callback({ status: 404, message: "La unidad especificada no existe." });
            id_unidad = get_id_unidad.id;
    
            console.log("IDs obtenidos:", { id_Body, id_dni, id_turno, id_jurisdiccion, id_funcion, id_unidad });
    
            // Creación del ControlBody
            const response = await newControlBody({
                id_Body, id_dni, id_turno, id_jurisdiccion, id_unidad, id_funcion, fecha_entrega, hora_entrega
            });
    
            if (!response) {
                return callback({ status: 500, message: "Error al registrar el ControlBody." });
            }
    
            // Enviar respuesta de éxito
            callback({ status: 200, message: "ControlBody registrado con éxito", data: response });
            console.log("DATA",response);

            
          // ✅ Aquí sí tiene sentido emitir updateControlBodys
             io.emit("updateControlBodys", { status: 200, data: await getControlBodys(1, 20) });

    
        } catch (error) {
            console.error("Error al registrar ControlBody:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });
    
    
};

module.exports = {socketHandlerscontrol}

