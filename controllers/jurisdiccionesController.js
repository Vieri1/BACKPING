const { Jurisdiccion } = require('../db_connection');

const newJurisdiccion = async ({ nombre }) => {
    try {
        const response = await Jurisdiccion.create({ nombre });
        return response || null;
    } catch (error) {
        console.error("Error al crear jurisdicción:", error);
        return false;
    }
};

const getJurisdicciones = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await Jurisdiccion.findAndCountAll({
            limit,
            offset,
            order: [['id', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener jurisdicciones:", error);
        return false;
    }
};

const getJurisdiccion = async (jurisdiccion) => {
    try {
        const response = await Jurisdiccion.findOne({ where: { jurisdiccion } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener jurisdicción:", error);
        return false;
    }
};

const updateJurisdiccion = async (id, { nombre }) => {
    try {
        const response = await getJurisdiccion(id);
        if (response) await response.update({ nombre });
        return response || null;
    } catch (error) {
        console.error("Error al actualizar jurisdicción:", error);
        return false;
    }
};

const deleteJurisdiccion = async (id) => {
    try {
        const response = await Jurisdiccion.findByPk(id);
        if (!response) {
            console.error("Jurisdicción no encontrada");
            return null;
        }
        await response.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar jurisdicción:", error);
        return false;
    }
};

module.exports = {
    newJurisdiccion,
    getJurisdicciones,
    getJurisdiccion,
    updateJurisdiccion,
    deleteJurisdiccion,
};
