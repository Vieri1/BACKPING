const { proveedor } = require('../db_connection');

const newProveedor = async ({ modelo, marca }) => {
    try {
        const response = await proveedor.create({ modelo, marca });
        return response || null;
    } catch (error) {
        console.error("Error al crear proveedor:", error);
        return false;
    }
};

const getProveedores = async (page = 1, limit = 20) => {
    const offset = (page - 1) * limit;
    try {
        const response = await proveedor.findAndCountAll({
            limit,
            offset,
            order: [['marca', 'ASC']]
        });
        return { totalCount: response.count, data: response.rows, currentPage: page } || null;
    } catch (error) {
        console.error("Error al obtener proveedores:", error);
        return false;
    }
};

const getProveedor = async (id) => {
    try {
        const response = await proveedor.findOne({ where: { id } });
        return response || null;
    } catch (error) {
        console.error("Error al obtener proveedor:", error);
        return false;
    }
};

const updateProveedor = async (id, { modelo, marca }) => {
    try {
        const response = await getProveedor(id);
        if (response) await response.update({ modelo, marca });
        return response || null;
    } catch (error) {
        console.error("Error al actualizar proveedor:", error);
        return false;
    }
};

const deleteProveedor = async (id) => {
    try {
        const response = await proveedor.findByPk(id);
        if (!response) {
            console.error("Proveedor no encontrado");
            return null;
        }
        await response.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar proveedor:", error);
        return false;
    }
};

module.exports = {
    newProveedor,
    getProveedores,
    getProveedor,
    updateProveedor,
    deleteProveedor,
};
