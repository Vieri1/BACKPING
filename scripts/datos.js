require('dotenv').config();
const { Sequelize } = require("sequelize");


const { DB_DATABASE, DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

// Conexión a la base de datos
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});

// Importar modelos
const bodyCam = require("../models/bodyCam")(sequelize);
const proveedor=require("../models/proveedor")(sequelize);
const unidad=require("../models/Unidad")(sequelize);
const Jurisdiccion=require("../models/Jurisdiccion")(sequelize);
const horario=require("../models/horario")(sequelize);
const insertData = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida correctamente.");
//     await horario.bulkCreate([
//       {"turno":"MAÑANA"},
//       {"turno":"TARDE"},
//       {"turno":"NOCHE"},
//     ])

// await Jurisdiccion.bulkCreate([
//   {"jurisdiccion":"ZARATE"},
//   {"jurisdiccion":"CANTO REY"},
//   {"jurisdiccion":"10 DE OCTUBRE"},
//   {"jurisdiccion":"MARISCAL CACERES"},
//   {"jurisdiccion":"BAYOVAR"},
//   {"jurisdiccion":"SANTA ELIZABETH"},
//   {"jurisdiccion":"CAJA DE AGUA"},
//   {"jurisdiccion":"HUAYRONA"},
// ]);
// //     // Sincronizar modelos
// // //     await sequelize.sync({ force: true }); // CUIDADO: Elimina y vuelve a crear tablas
// await unidad.bulkCreate([
//   {"transporte":"CAMIONETA","numero":"23","placa":"EUI379"},
//   {"transporte":"CAMIONETA","numero":"39","placa":"EUI384"},
//   {"transporte":"CAMIONETA","numero":"52","placa":"EUI521"},
//   {"transporte":"CAMIONETA","numero":"76","placa":"EUI470"},
//   {"transporte":"CAMIONETA","numero":"28","placa":"EUI376"},
//   {"transporte":"CAMIONETA","numero":"22","placa":"EUI383"},
//   {"transporte":"CAMIONETA","numero":"25","placa":"EUI371"},
//   {"transporte":"CAMIONETA","numero":"42","placa":"EUI363"},
//   {"transporte":"CAMIONETA","numero":"29","placa":"EUI386"},

//   {"transporte":"CAMIONETA","numero":"40","placa":"EUI377"},
//   {"transporte":"CAMIONETA","numero":"47","placa":"EUI374"},

//   {"transporte":"CAMIONETA","numero":"61","placa":"EUI520"},
//   {"transporte":"CAMIONETA","numero":"24","placa":"EUI381"},
//   {"transporte":"CAMIONETA","numero":"44","placa":"EUI388"},
//   {"transporte":"CAMIONETA","numero":"53","placa":"EUI480"},
//   {"transporte":"CAMIONETA","numero":"68","placa":"EUI488"},

//    {"transporte":"CAMIONETA","numero":"27","placa":"EUI367"},
//    {"transporte":"CAMIONETA","numero":"31","placa":"EUI361"},
//    {"transporte":"CAMIONETA","numero":"32","placa":"EUI373"},
//    {"transporte":"CAMIONETA","numero":"33","placa":"EUI389"},
//    {"transporte":"CAMIONETA","numero":"21","placa":"EUI385"},
//    {"transporte":"CAMIONETA","numero":"34","placa":"EUI359"},
//    {"transporte":"CAMIONETA","numero":"35","placa":"EUI360"},
//    {"transporte":"CAMIONETA","numero":"36","placa":"EUI368"},
//    {"transporte":"MOTO","numero":"65","placa":"EU3138"},
//    {"transporte":"MOTO","numero":"72","placa":"EU3145"},
//    {"transporte":"MOTO","numero":"98","placa":"EU3173"},
//    {"transporte":"MOTO","numero":"51","placa":"EU3124"},
//    {"transporte":"MOTO","numero":"75","placa":"EU3148"},
//    {"transporte":"MOTO","numero":"61","placa":"EU3134"},
//    {"transporte":"MOTO","numero":"74","placa":"EU3147"},
//    {"transporte":"MOTO","numero":"54","placa":"EU3127"},
//    {"transporte":"MOTO","numero":"97","placa":"EU3172"},
//    {"transporte":"MOTO","numero":"71","placa":"EU3144"},
//    {"transporte":"MOTO","numero":"59","placa":"EU3132"},
//    {"transporte":"MOTO","numero":"62","placa":"EU3135"},
//    {"transporte":"MOTO","numero":"96","placa":"EU3171"},
//    {"transporte":"MOTO","numero":"67","placa":"EU3140"},
 
// ])
// // //   Insertar datos ficticios en TipoDocumentoComplementario
//     await proveedor.bulkCreate([
//       { modelo: "VM780" ,
//         marca:"HYTERA"}

//     ]);

   // Insertar datos ficticios en Infraccion
    await bodyCam.bulkCreate([
        {"numero":"SG036","serie":"21D17A3521","nro_bateria":"21D1704903","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},	
        {"numero":"SG037","serie":"21D17A3522","nro_bateria":"21D1704916","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG038","serie":"21D17A3523","nro_bateria":"21D1704929","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG039","serie":"21D17A3524","nro_bateria":"21D1704918","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG040","serie":"21D17A3525","nro_bateria":"21D1704928","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG041","serie":"21D17A3526","nro_bateria":"21D1704930","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG042","serie":"21D17A3527","nro_bateria":"21D1704897","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG043","serie":"21D17A3528","nro_bateria":"21D1704926","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG044","serie":"21D17A3529","nro_bateria":"21D1704912","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG045","serie":"21D17A3530","nro_bateria":"21D1704911","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG047","serie":"21D17A3551","nro_bateria":"21D1704896","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG048","serie":"21D17A3552","nro_bateria":"21D1704883","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG049","serie":"21D17A3553","nro_bateria":"21D1704887","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG050","serie":"21D17A3554","nro_bateria":"21D1704881","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG051","serie":"21D17A3555","nro_bateria":"21D1704885","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG052","serie":"21D17A3556","nro_bateria":"21D1704888","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG053","serie":"21D17A3557","nro_bateria":"21D1704886","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG054","serie":"21D17A3558","nro_bateria":"21D1704882","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG055","serie":"21D17A3559","nro_bateria":"21D1704894","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG056","serie":"21D17A3560","nro_bateria":"21D1704921","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG067","serie":"23726A0011","nro_bateria":"2372600284","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG068","serie":"23726A0012","nro_bateria":"2372600179","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG069","serie":"23726A0013","nro_bateria":"2372600182","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG070","serie":"23726A0014","nro_bateria":"2372600177","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG071","serie":"23726A0015","nro_bateria":"2372600537","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG072","serie":"23726A0016","nro_bateria":"2372600463","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG073","serie":"23726A0017","nro_bateria":"2372600533","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG074","serie":"23726A0018","nro_bateria":"2372600327","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG075","serie":"23726A0019","nro_bateria":"2372600484","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG076","serie":"23726A0020","nro_bateria":"2372600474","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG004","serie":"20920A0371","nro_bateria":"2092000307","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG116","serie":"23726A0060","nro_bateria":"2372600359","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG001","serie":"19O27A0810","nro_bateria":"2211400582","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG110","serie":"23726A0054","nro_bateria":"2372600491","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG002","serie":"19O27A0812","nro_bateria":"2211400562","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG112","serie":"23726A0056","nro_bateria":"2372600282","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG114","serie":"23726A0058","nro_bateria":"2372600334","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG113","serie":"23726A0057","nro_bateria":"2372600008","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG115","serie":"23726A0059","nro_bateria":"2372600050","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG111","serie":"23726A0055","nro_bateria":"2372600365","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG108","serie":"23726A0052","nro_bateria":"2372600492","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG109","serie":"23726A0053","nro_bateria":"2372600358","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG107","serie":"23726A0051","nro_bateria":"2372600276","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG138","serie":"23726A0082","nro_bateria":"2372600518","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG144","serie":"23726A0088","nro_bateria":"2372600534","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG139","serie":"23726A0083","nro_bateria":"2372600475","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG142","serie":"23726A0086","nro_bateria":"2372600302","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG140","serie":"23726A0084","nro_bateria":"2372600405","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG141","serie":"23726A0085","nro_bateria":"2372600185","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG154","serie":"23726A0098","nro_bateria":"2372600460","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG151","serie":"23726A0095","nro_bateria":"2372600371","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG148","serie":"23726A0092","nro_bateria":"2372600270","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG147","serie":"23726A0091","nro_bateria":"2372600280","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG153","serie":"23726A0097","nro_bateria":"2372600254","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG155","serie":"23726A0099","nro_bateria":"2372600479","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG150","serie":"23726A0094","nro_bateria":"2372600258","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG149","serie":"23726A0093","nro_bateria":"2372600250","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG137","serie":"23726A0081","nro_bateria":"2372600338","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG143","serie":"23726A0087","nro_bateria":"2372600523","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG156","serie":"23726A0100","nro_bateria":"2372600304","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG146","serie":"23726A0090","nro_bateria":"2372600381","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG152","serie":"23726A0096","nro_bateria":"2372600414","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"},		
        {"numero":"SG145","serie":"23726A0089","nro_bateria":"2372600005","id_proveedor":"b8f0770c-b490-4a5e-b4bf-e608b769cfcf"}		
      
    ]);

    // Insertar datos ficticios en TipoDocumentoIdentidad
    console.log("Datos insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos ficticios:", error.message);
  } finally {
    await sequelize.close();
    console.log("Conexión cerrada.");
  }
};

insertData();