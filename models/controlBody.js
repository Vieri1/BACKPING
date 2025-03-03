const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const controlBody = sequelize.define('controlBody', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        id_Body: {
            type: DataTypes.UUID,
            references: {
                model: 'bodyCams',
                key: 'id',
            },
            allowNull: false
        },
        id_dni: {
            type: DataTypes.UUID,
            references: {
                model: 'Personas',
                key: 'id',
            },
            
            allowNull: false
        },
        id_turno: {
            type: DataTypes.UUID,
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
        id_unidad: {
            type: DataTypes.UUID,
            references: {
                model: 'Unidads',
                key: 'id',
            },         
            allowNull: false
        },
        id_funcion:{
            type: DataTypes.UUID,
            references: {
                model: 'Funcions',
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
            // references: {
            //     model: 'Usuarios',
            //     key: 'id',
            // },
            allowNull: true
        },
    }, {
        tableName: 'controlBodys',
        timestamps: true
    });
     controlBody.associate = (db) => {  
        controlBody.belongsTo(db.bodyCam, { foreignKey: 'id_Body', as: 'bodyCams' });
        controlBody.belongsTo(db.Persona, { foreignKey: 'id_dni', as: 'Personas' });
        controlBody.belongsTo(db.Unidad, { foreignKey: 'id_unidad', as: 'Unidads' });
        controlBody.belongsTo(db.horario, { foreignKey: 'id_turno', as: 'horarios' });
        controlBody.belongsTo(db.Funcion, { foreignKey: 'id_funcion', as: 'funcions' });
        controlBody.belongsTo(db.Jurisdiccion,{foreignKey:'id_jurisdiccion',as:'Jurisdiccions'});
    };


    return controlBody;
};