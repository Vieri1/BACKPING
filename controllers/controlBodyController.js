const { controlBody } = require('../db_connection');

const newControlBody = async ({ id_Body, id_dni, id_turno, id_jurisdiccion, id_funcion,id_unidad, fecha_entrega, hora_entrega, fecha_devolucion, hora_devolucion, status }) => {
    try {
        const response = await controlBody.create({
            id_Body,
            id_dni,
            id_turno,
            id_jurisdiccion,
            id_unidad,
            id_funcion,
            fecha_entrega,
            hora_entrega,
            fecha_devolucion,
            hora_devolucion,
            status
        });
        return response || null;
    } catch (error) {
        console.error("Error al crear controlBody:", error);
        return false;
    }
};

const getControlBodys = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await controlBody.findAndCountAll({
            limit,
            offset,
            order: [['id', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener controlBodys:", error);
        return false;
    }
};

const getControlBody = async (id) => {
    try {
        const response = await controlBody.findOne({ where: { id } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener controlBody:", error);
        return false;
    }
};

const updateControlBody = async (id, updates) => {
    try {
        const response = await getControlBody(id);
        if (response) await response.update(updates);
        return response || null;
    } catch (error) {
        console.error("Error al actualizar controlBody:", error);
        return false;
    }
};

const deleteControlBody = async (id) => {
    try {
        const response = await controlBody.findByPk(id);
        if (!response) {
            console.error("controlBody no encontrado");
            return null;
        }
        response.status = 'EN CECOM'; // Se podría considerar otro método de eliminación lógica si es necesario
        await response.save();
        return response;
    } catch (error) {
        console.error("Error al eliminar controlBody:", error);
        return false;
    }
};

module.exports = {
    newControlBody,
    getControlBodys,
    getControlBody,
    updateControlBody,
    deleteControlBody,
};
