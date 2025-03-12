const { controlBody } = require('../db_connection');
const { bodyCam }=require('../db_connection')
const { Persona } = require('../db_connection');
const { horario } = require('../db_connection');
const { Jurisdiccion } = require('../db_connection');
const { Unidad } = require('../db_connection');
const { Funcion } = require('../db_connection');

const newControlBody = async (controlBodies) => {
    try {
        const response = await controlBody.bulkCreate(controlBodies);
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
            attributes: { exclude: ['createdAt', 'updatedAt'    , 'id_Body', 'id_dni', 'id_turno', 'id_jurisdiccion', 'id_unidad', 'id_funcion'] },
            include: [
                { model: bodyCam, as: 'bodyCams', attributes: ['numero'] }, 
                { model: Persona, as: 'Personas', attributes: ['nombres', 'apellidos'] }, 
                { model: horario, as: 'horarios', attributes: ['turno'] }, 
                { model: Jurisdiccion, as: 'Jurisdiccions', attributes: ['jurisdiccion'] }, 
                { model: Unidad, as: 'Unidads', attributes: ['numero'] }, 
                { model: Funcion, as: 'funcions', attributes: ['funcion'] } 
            ]
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

const updateControlBody = async (body, {fecha_devolucion,hora_devolucion,detalles}) => {
 
    try {
        const response = await controlBody.findOne({ where: { id_Body: body.id } });    
        if (response) await response.update({fecha_devolucion,hora_devolucion,detalles});
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
