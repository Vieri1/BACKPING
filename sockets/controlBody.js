
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
    socket.on("ActualizarControlBodys", async (data, callback) => {
       

        const { numero, fecha_devolucion, hora_devolucion,detalles } = data; // Extraer `id`
    
       
        try {
            const body=await getBodyCamByName(numero);
            
            
            if(!body){
                return callback({ status: 404, message: "La bodycam no está registrada en la db"})
            }
            const response = await updateControlBody(body, { fecha_devolucion, hora_devolucion ,detalles});
            if (!response ) {
                return callback({ status: 404, message: "No se encontró la Bodycam" });
            }
            if (response) {
                
                
                callback({ status: 200, message: "Bodycam actualizada", data: response });
               // io.emit("bodycamActualizada", response); // Notificar a todos los clientes
            } else {
                callback({ status: 404, message: "No se encontró la Bodycam" });
            }
        } catch (error) {
            console.error("Error al actualizar controlBody:", error);
            callback({ status: 500, message: "Error en el servidor" });
        }
    });

    socket.on("getAllControlBodys", async (data) => {
    
        const { page=1, limit=20 } = data;
    
        if (isNaN(page) || page <= 0 || isNaN(limit) || limit <= 0) {
            socket.emit("getAllControlBodysResponse", { status: 400, message: "Page y limit deben ser números válidos" });
            return;
        }
    
        try {
            const response = await getControlBodys(Number(page), Number(limit));
            socket.emit("getAllControlBodysResponse", { status: 200, message: "ControlBodies obtenidos correctamente", data: response });
        } catch (error) {
            console.error("❌ Error al obtener ControlBodies:", error);
            socket.emit("getAllControlBodysResponse", { status: 500, message: "Error interno del servidor" });
        }
    });
    
    

    socket.on('createControlBody', async (data, callback) => {
        console.log("Esta es la data:", data);
    
        try {
            const errores = [];
            const regex = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/;
            const { numeros, nombres, apellidos, dni, turno, jurisdiccion, fecha_entrega, funcion, unidad, hora_entrega } = data;
    
            if (!Array.isArray(numeros) || numeros.length === 0) {
                return callback({ status: 400, message: "Debe proporcionar un arreglo de números de BodyCam." });
            }
    
            // Validaciones comunes
            if (typeof nombres !== "string" || !nombres.trim()) errores.push("El campo 'nombres' no puede estar vacío.");
            if (!regex.test(nombres)) errores.push("El campo 'nombres' no debe contener caracteres especiales.");
    
            if (typeof apellidos !== "string" || !apellidos.trim()) errores.push("El campo 'apellidos' no puede estar vacío.");
            if (!regex.test(apellidos)) errores.push("El campo 'apellidos' no debe contener caracteres especiales.");
    
            if (errores.length > 0) {
                return callback({ status: 400, message: "Errores en los datos de entrada", errores });
            }
    
            // Obtener IDs comunes
            const get_id_dni = await newPersona({ dni, nombres, apellidos });
            if (!get_id_dni) return callback({ status: 404, message: "La persona con el DNI proporcionado no existe." });
            const id_dni = get_id_dni.id;
    
            const get_id_turno = await getHorario(turno);
            if (!get_id_turno) return callback({ status: 404, message: "El turno especificado no existe." });
            const id_turno = get_id_turno.id;
    
            const get_id_jurisdiccion = await getJurisdiccion(jurisdiccion);
            if (!get_id_jurisdiccion) return callback({ status: 404, message: "La jurisdicción especificada no existe." });
            const id_jurisdiccion = get_id_jurisdiccion.id;
    
            const get_id_funcion = await newfuncion({ funcion });
            if (!get_id_funcion) return callback({ status: 404, message: "La función especificada no existe." });
            const id_funcion = get_id_funcion.id;
    
            const get_id_unidad = await getUnidad(unidad);
            if (!get_id_unidad) return callback({ status: 404, message: "La unidad especificada no existe." });
            const id_unidad = get_id_unidad.id;
    
            console.log("IDs obtenidos:", { id_dni, id_turno, id_jurisdiccion, id_funcion, id_unidad });
    
            // Crear múltiples registros en una sola consulta con bulkCreate
            const controlBodies = [];
    
            for (const numero of numeros) {
                const get_id = await getBodyCamByName(numero);
                if (!get_id) {
                    console.log(`El número de BodyCam ${numero} no existe.`);
                    continue;
                }
                const id_Body = get_id.id;
    
                controlBodies.push({
                    id_Body, id_dni, id_turno, id_jurisdiccion, id_unidad, id_funcion, fecha_entrega, hora_entrega
                });
            }
    
            if (controlBodies.length === 0) {
                return callback({ status: 404, message: "Ninguna BodyCam válida encontrada en la base de datos." });
            }
    
            // Insertar en bulk
            const response = await newControlBody(controlBodies);
    
            if (!response) {
                return callback({ status: 500, message: "Error al registrar los ControlBody." });
            }
    
            // Respuesta de éxito
            callback({ status: 200, message: "ControlBodys registrados con éxito", data: response });
            console.log("DATA", response);
    
            // Emitir actualización
            io.emit("ControlBodys", { status: 200, data: await getControlBodys(1, 20) });
    
        } catch (error) {
            console.error("Error al registrar ControlBody:", error);
            callback({ status: 500, message: "Error interno del servidor" });
        }
    });
    
    
    
};

module.exports = {socketHandlerscontrol}

