const { Funcion } = require('../db_connection');

const newfuncion = async ({ funcion }) => {
    try {
        const response = await Funcion.create({ funcion });
        return response || null;
    } catch (error) {
        console.error("Error al crear funcion:", error);
        return false;
    }
};

const getfuncions = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await Funcion.findAndCountAll({
            limit,
            offset,
            order: [['id', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener funcions:", error);
        return false;
    }
};

const getfuncion = async (funcion) => {
    try {
        const response = await Funcion.findOne({ where: { funcion } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener funcion:", error);
        return false;
    }
};

const updatefuncion = async (id, { funcion }) => {
    try {
        const response = await getfuncion(id);
        if (response) await response.update({ funcion });
        return response || null;
    } catch (error) {
        console.error("Error al actualizar funcion:", error);
        return false;
    }
};

const deletefuncion = async (id) => {
    try {
        const response = await Funcion.findByPk(id);
        if (!response) {
            console.error("funcion no encontrado");
            return null;
        }
        await response.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar funcion:", error);
        return false;
    }
};

module.exports = {
    newfuncion,
    getfuncions,
    getfuncion,
    updatefuncion,
    deletefuncion,
};
