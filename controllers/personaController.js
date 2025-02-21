const { Persona } = require('../db_connection');

const newPersona = async ({ DNI, nombre, ape_paterno, ape_materno, state }) => {
    try {
        const response = await Persona.create({ DNI, nombre, ape_paterno, ape_materno, state });
        return response || null;
    } catch (error) {
        console.error("Error al crear persona:", error);
        return false;
    }
};

const getPersonas = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await Persona.findAndCountAll({
            limit,
            offset,
            order: [['nombre', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener personas:", error);
        return false;
    }
};

const getPersona = async (id) => {
    try {
        const response = await Persona.findOne({ where: { id } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener persona:", error);
        return false;
    }
};

const updatePersona = async (id, { DNI, nombre, ape_paterno, ape_materno, state }) => {
    try {
        const response = await getPersona(id);
        if (response) await response.update({ DNI, nombre, ape_paterno, ape_materno, state });
        return response || null;
    } catch (error) {
        console.error("Error al actualizar persona:", error);
        return false;
    }
};

const deletePersona = async (id) => {
    try {
        const response = await Persona.findByPk(id);
        if (!response) {
            console.error("Persona no encontrada");
            return null;
        }
        await response.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar persona:", error);
        return false;
    }
};

module.exports = {
    newPersona,
    getPersonas,
    getPersona,
    updatePersona,
    deletePersona,
};
