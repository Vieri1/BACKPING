const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const Funcion=sequelize.define('Funcion',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        funcion:{
            type: DataTypes.STRING,
            allowNull: true
        }
      
    }, {
        tableName: 'Funcions',
        timestamps: true
    });

    return Funcion;
}