const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const Persona=sequelize.define('Persona',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        DNI: {
            type: DataTypes.STRING,
            allowNull: true
         
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: true
        },
        ape_paterno:{
            type: DataTypes.STRING,
            allowNull:true
        },
        ape_materno:{
            type: DataTypes.STRING,
            allowNull:true
        },
        state:{
            type: DataTypes.ENUM('CESADO','TRABAJANDO'),
            allowNull:true
        }
    }, {
        tableName: 'Personas',
        timestamps: true
    });

    return Persona;
}