const { Unidad } = require('../db_connection');

const newUnidad = async ({ nombre }) => {
    try {
        const response = await Unidad.create({ nombre });
        return response || null;
    } catch (error) {
        console.error("Error al crear unidad:", error);
        return false;
    }
};

const getUnidades = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await Unidad.findAndCountAll({
            limit,
            offset,
            order: [['nombre', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener unidades:", error);
        return false;
    }
};

const getUnidad = async (id) => {
    try {
        const response = await Unidad.findOne({ where: { id } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener unidad:", error);
        return false;
    }
};

const updateUnidad = async (id, { nombre }) => {
    try {
        const response = await getUnidad(id);
        if (response) await response.update({ nombre });
        return response || null;
    } catch (error) {
        console.error("Error al actualizar unidad:", error);
        return false;
    }
};

const deleteUnidad = async (id) => {
    try {
        const response = await Unidad.findByPk(id);
        if (!response) {
            console.error("Unidad no encontrada");
            return null;
        }
        await response.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar unidad:", error);
        return false;
    }
};

module.exports = {
    newUnidad,
    getUnidades,
    getUnidad,
    updateUnidad,
    deleteUnidad,
};
