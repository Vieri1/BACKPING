const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const Jurisdiccion=sequelize.define('Jurisdiccion',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        jurisdiccion:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'Jurisdiccions',
        timestamps: true
    });

    return Jurisdiccion;
}