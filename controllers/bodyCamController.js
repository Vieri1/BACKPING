const{bodyCam}=require('../db_connection')

const newbody=async ({numero,serie,nro_bateria,id_proveedor}) => {
    try {
        const response= await bodyCam.create({
            numero,serie,nro_bateria,id_proveedor
        })
        return response || null
    } catch (error) {
    console.error("Error al crear la body Cam:", error);
    return false;
    }
};
const getAllbodycams=async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response=await bodyCam.findAndCountAll({
            limit,
            offset,
            order: [['id', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error({ message: "Error en el controlador al traer todos las body cams", data: error });
        return false;
    }
};
const getbodycam=async (id) => {
    try {
        const response = await bodyCam.findOne({ where: { id } });
        return response || null;
    } catch (error) {
        console.error({ message: "Error en el controlador al traer la bodycam", data: error });
        return false;
    }
};
const updatebodyCam = async (id, { numero ,serie,nro_bateria,id_proveedor}) => {
    try {
        const response = await getbodycam(id);
        if (response) await response.update({ numero ,serie,nro_bateria,id_proveedor });
        return response || null;
    } catch (error) {
        console.error("Error al modificar la bodycam en el controlador:", error);
        return false;
    }
};
// Eliminar una bodyCam  (cambia el estado a false)
const deletebodyCam = async (id) => {
    try {
        const response = await bodyCam.findByPk(id);

        if (!response) {
            console.error("bodyCam no encontrado");
            return null;
        }

        // Cambia el estado a false en lugar de eliminar el registro
        response.state = false;
        await response.save();

        return response;
    } catch (error) {
        console.error("Error al cambiar de estado al eliminar la bodyCam", error);
        return false;
    }
};
module.exports={
    newbody,
    getAllbodycams,
    getbodycam,
    updatebodyCam,
    deletebodyCam,  
}