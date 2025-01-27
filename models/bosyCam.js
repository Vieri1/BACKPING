const { DataTypes } = require("sequelize");
module.exports=(sequelize)=>{
    const bodyCam=sequelize.define('bodyCam',{
        id_numero: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        serie:{
            type: DataTypes.STRING,
            // references: {
            //     model: 'TramiteInspectores',
            //     key: 'id',
            // },
            allowNull: true
        },

        nro_bateria:{
            type: DataTypes.STRING,
           
            allowNull:true
        },
        id_proveedor:{
            type:DataTypes.INTEGER,
            // references: {
            //     model: 'proveedors',
            //     key: 'id',
            // },
            allowNull:true
        }

    }, {
        tableName: 'bodyCams',
        timestamps: true
    });


    // NC.associate = (db) => {

    //     NC.belongsTo(db.TramiteInspector, { foreignKey: 'id_tramiteInspector', as: 'tramiteInspector'})
        
    //     NC.belongsTo(db.Administrado, { foreignKey: 'id_administrado', as: 'administrado'})
    //     NC.belongsTo(db.TipoDocumentoIdentidad, { foreignKey: 'id_tipoDocumento', as: 'DocIdentidad'})
    //     NC.belongsTo(db.Entidad, { foreignKey: 'id_entidad', as: 'entidad'})
    //     NC.belongsTo(db.Infraccion, { foreignKey: 'id_infraccion', as: 'infraccion'})
    //     // NC.belongsTo(db.MedidaComplementaria, { foreignKey: 'id_medida_complementaria', as: 'medidaComplementaria'})
    //     NC.belongsTo(db.ConstanciaNotificacion, { foreignKey: 'id_const_noti', as: 'ConstNotifi'})
    //     NC.belongsTo(db.EstadoNC, { foreignKey: 'id_estado_NC', as: 'estadoNC'})
    //     NC.belongsTo(db.IFI, { foreignKey: 'id_nro_IFI', as: 'IFI'})
    //     NC.belongsTo(db.DescargoNC, { foreignKey: 'id_descargo_NC', as: 'descargoNC'})
    // }

    return bodyCam;
}