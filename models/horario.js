const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const horario=sequelize.define('horario',{
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
        tableName: 'horarios',
        timestamps: true
    });

    return horario;
}