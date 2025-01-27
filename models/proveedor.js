const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const proveedor=sequelize.define('proveedor',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        modelo:{
            type: DataTypes.STRING,
            allowNull: true
        },
        marca:{
            type: DataTypes.STRING,
            allowNull:true
        }
    }, {
        tableName: 'proveedors',
        timestamps: true
    });

    return proveedor;
}