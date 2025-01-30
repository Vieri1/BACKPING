const { horario } = require('../db_connection');

const newHorario = async ({ turno }) => {
    try {
        const response = await horario.create({ turno });
        return response || null;
    } catch (error) {
        console.error("Error al crear horario:", error);
        return false;
    }
};

const getHorarios = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await horario.findAndCountAll({
            limit,
            offset,
            order: [['id', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener horarios:", error);
        return false;
    }
};

const getHorario = async (id) => {
    try {
        const response = await horario.findOne({ where: { id } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener horario:", error);
        return false;
    }
};

const updateHorario = async (id, { turno }) => {
    try {
        const response = await getHorario(id);
        if (response) await response.update({ turno });
        return response || null;
    } catch (error) {
        console.error("Error al actualizar horario:", error);
        return false;
    }
};

const deleteHorario = async (id) => {
    try {
        const response = await horario.findByPk(id);
        if (!response) {
            console.error("Horario no encontrado");
            return null;
        }
        await response.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar horario:", error);
        return false;
    }
};

module.exports = {
    newHorario,
    getHorarios,
    getHorario,
    updateHorario,
    deleteHorario,
};
