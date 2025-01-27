const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const Unidad=sequelize.define('Unidad',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: true
        },
        
    }, {
        tableName: 'Unidads',
        timestamps: true
    });

    return Unidad;
}