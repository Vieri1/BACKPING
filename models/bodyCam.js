const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const bodyCam=sequelize.define('bodyCam',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        numero:{
            type: DataTypes.STRING,
            allowNull: true

        },
        serie:{
            type: DataTypes.STRING,
           
            allowNull: true
        },

        nro_bateria:{
            type: DataTypes.STRING,
           
            allowNull:true
        },
        id_proveedor:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        state:{
            type:DataTypes.BOOLEAN,
            allowNull:true
        }

    }, {
        tableName: 'bodyCams',
        timestamps: true
    });

    return bodyCam;
}