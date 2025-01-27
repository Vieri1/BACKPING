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
            references: {
                model: 'bodyCam',
                key: 'id',
            },
            allowNull: false
        },
        id_dni: {
            type: DataTypes.STRING,
            references: {
                model: 'Personas',
                key: 'id',
            },
            allowNull: false
        },
        id_turno: {
            type: DataTypes.STRING,
            references: {
                model: 'horarios',
                key: 'id',
            },       
            allowNull: false
        },      
        id_jurisdiccion: {
            type: DataTypes.UUID,
            references: {
                model: 'Jurisdiccions',
                key: 'id',
            },         
            allowNull: false
        },
        fecha_entrega:{
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        hora_entrega:{
            type: DataTypes.TIME,
            allowNull: true,

        },
        fecha_devolucion:{
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        hora_devolucion:{
            type: DataTypes.TIME,
            allowNull: true,
        },
        
        status:{
            type: DataTypes.ENUM('EN CAMPO','EN CECOM'),
            references: {
                model: 'Usuarios',
                key: 'id',
            },
            allowNull: false
        },
        // usuario:{
        //     type:DataTypes.UUID,
        //     references: {
        //         model: 'Usuarios',
        //         key: 'id',
        //     },
        //     allowNull: false
        // }
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