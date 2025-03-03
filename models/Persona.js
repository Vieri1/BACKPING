const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const Persona=sequelize.define('Persona',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: true
         
        },
        nombres:{
            type: DataTypes.STRING,
            allowNull: true
        },
        apellidos:{
            type: DataTypes.STRING,
            allowNull:true
        },


    }, {
        tableName: 'Personas',
        timestamps: true
    });

    return Persona;
}