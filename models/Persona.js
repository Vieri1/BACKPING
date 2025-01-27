const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const Persona=sequelize.define('Persona',{
        DNI: {
            type: DataTypes.STRING,
            primaryKey: true,
         
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