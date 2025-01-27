const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const controlBody = sequelize.define('controlBody', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        id_Body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_dni: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        id_turno: {
            type: DataTypes.STRING,
            allowNull: false
        },      
        id_jurisdiccion: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        fecha_entrega:{
            type: DataTypes.UUID,
            references: {
                model: 'DescargoIFIs',
                key: 'id',
            },
            allowNull: true,
            unique:true
        },
        hora_entrega:{

        },
        fecha_devolucion:{
            type: DataTypes.UUID,
            references: {
                model: 'DescargoIFIs',
                key: 'id',
            },
            allowNull: true,
            unique:true
        },
        hora_devolucion:{

        },
        id_nc:{
            type: DataTypes.UUID,
            references: {
                model: 'NCs',
                key: 'id',
            },
            allowNull: true,
           
        },
        // id_estado_IFI:{
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'EstadoIFIs',
        //         key: 'id',
        //     },
        //     allowNull:false
        // },
        status:{
            type: DataTypes.UUID,
            references: {
                model: 'Usuarios',
                key: 'id',
            },
            allowNull: false
        }
    }, {
        tableName: 'controlBodys',
        timestamps: true
    });
    // controlBody.associate = (db) => {
    //     // Relación de 1 a 1 entre controlBody y los tipos basados en 'tipo'
    //     controlBody.belongsTo(db.RSA, { foreignKey: 'id_evaluar', as: 'RSA', constraints: false });
    //     controlBody.belongsTo(db.RSG1, { foreignKey: 'id_evaluar', as: 'RSG1', constraints: false });
    //     controlBody.belongsTo(db.RSG2, { foreignKey: 'id_evaluar', as: 'RSG2', constraints: false });
    //     // Relación con DescargoIFI
    //     controlBody.belongsTo(db.DescargoIFI, { foreignKey: 'id_descargo_ifi', as: 'DescargoIFIs' });
    //     controlBody.belongsTo(db.NC,{foreignKey:'id_nc',as:'NCs'});
    //     // controlBody.belongsTo(db.EstadoIFI, { foreignKey: 'id_estado_IFI', as: 'estadoIFI'});
    //     controlBody.belongsTo(db.Usuario,{foreignKey:'id_AI1' , as:'Usuarios' });

   
    // };


    return controlBody;
};