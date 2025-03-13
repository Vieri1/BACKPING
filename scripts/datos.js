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
//   {"jurisdiccion":"Zarate"},
//   {"jurisdiccion":"Caja de AGUA"},
//   {"jurisdiccion":"La Huayrona"},
//   {"jurisdiccion":"Canto Rey"},
//   {"jurisdiccion":"Santa Elizabeth"},
//   {"jurisdiccion":"Bayovar"},
//   {"jurisdiccion":"Mariscal Caceres"},
//   {"jurisdiccion":"10 de Octubre"},
//   {"jurisdiccion":"Zona baja"},
//   {"jurisdiccion":"Zona alta"},
//   {"jurisdiccion":"Zona norte"},
//   {"jurisdiccion":"Zona sur"},
//   {"jurisdiccion":"Zona centro"},
//   {"jurisdiccion":"Zona libre"},

// ]);
// //     // Sincronizar modelos
// // //     await sequelize.sync({ force: true }); // CUIDADO: Elimina y vuelve a crear tablas
// await unidad.bulkCreate([
//   {
//       "numero": 1,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1476"
//   },
//   {
//       "numero": 2,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1495"
//   },
//   {
//       "numero": 3,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1513"
//   },
//   {
//       "numero": 4,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1470"
//   },
//   {
//       "numero": 5,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1516"
//   },
//   {
//       "numero": 6,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1490"
//   },
//   {
//       "numero": 7,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1481"
//   },
//   {
//       "numero": 8,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1499"
//   },
//   {
//       "numero": 9,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1491"
//   },
//   {
//       "numero": 10,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1480"
//   },
//   {
//       "numero": 11,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1504"
//   },
//   {
//       "numero": 12,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1509"
//   },
//   {
//       "numero": 13,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1457"
//   },
//   {
//       "numero": 14,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1466"
//   },
//   {
//       "numero": 15,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1503"
//   },
//   {
//       "numero": 16,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1508"
//   },
//   {
//       "numero": 17,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1488"
//   },
//   {
//       "numero": 18,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1455"
//   },
//   {
//       "numero": 19,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1506"
//   },
//   {
//       "numero": 20,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1478"
//   },
//   {
//       "numero": 21,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1472"
//   },
//   {
//       "numero": 22,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1517"
//   },
//   {
//       "numero": 23,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1500"
//   },
//   {
//       "numero": 24,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1473"
//   },
//   {
//       "numero": 25,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1486"
//   },
//   {
//       "numero": 26,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1497"
//   },
//   {
//       "numero": 27,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1505"
//   },
//   {
//       "numero": 28,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1484"
//   },
//   {
//       "numero": 29,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1454"
//   },
//   {
//       "numero": 30,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1474"
//   },
//   {
//       "numero": 31,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1456"
//   },
//   {
//       "numero": 32,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1471"
//   },
//   {
//       "numero": 33,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1514"
//   },
//   {
//       "numero": 34,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1477"
//   },
//   {
//       "numero": 35,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1489"
//   },
//   {
//       "numero": 36,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1498"
//   },
//   {
//       "numero": 37,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1475"
//   },
//   {
//       "numero": 38,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1458"
//   },
//   {
//       "numero": 39,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1479"
//   },
//   {
//       "numero": 40,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1496"
//   },
//   {
//       "numero": 41,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1512"
//   },
//   {
//       "numero": 42,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1483"
//   },
//   {
//       "numero": 43,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1485"
//   },
//   {
//       "numero": 44,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1492"
//   },
//   {
//       "numero": 45,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1507"
//   },
//   {
//       "numero": 46,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1502"
//   },
//   {
//       "numero": 47,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1515"
//   },
//   {
//       "numero": 48,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1501"
//   },
//   {
//       "numero": 49,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1493"
//   },
//   {
//       "numero": 50,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-1482"
//   },
//   {
//       "numero": 51,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3124"
//   },
//   {
//       "numero": 52,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3125"
//   },
//   {
//       "numero": 53,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3126"
//   },
//   {
//       "numero": 54,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3127"
//   },
//   {
//       "numero": 55,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3128"
//   },
//   {
//       "numero": 56,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3129"
//   },
//   {
//       "numero": 57,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3130"
//   },
//   {
//       "numero": 58,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3131"
//   },
//   {
//       "numero": 59,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3132"
//   },
//   {
//       "numero": 60,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3133"
//   },
  
//   {
//       "numero": 61,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3134"
//   },
//   {
//       "numero": 62,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3135"
//   },
//   {
//       "numero": 63,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3136"
//   },
//   {
//       "numero": 64,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3137"
//   },
//   {
//       "numero": 65,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3138"
//   },
//   {
//       "numero": 66,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3139"
//   },
//   {
//       "numero": 67,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3140"
//   },
//   {
//       "numero": 68,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3141"
//   },
//   {
//       "numero": 69,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3142"
//   },
//   {
//       "numero": 70,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3143"
//   },
//   {
//       "numero": 71,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3144"
//   },
//   {
//       "numero": 72,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3145"
//   },
//   {
//       "numero": 73,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3146"
//   },
//   {
//       "numero": 74,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3147"
//   },
//   {
//       "numero": 75,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3148"
//   },
//   {
//       "numero": 76,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3149"
//   },
//   {
//       "numero": 77,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3150"
//   },
//   {
//       "numero": 78,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3151"
//   },
//   {
//       "numero": 79,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3152"
//   },
//   {
//       "numero": 80,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3153"
//   },
//   {
//       "numero": 81,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3154"
//   },
//   {
//       "numero": 82,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3155"
//   },
//   {
//       "numero": 83,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3156"
//   },
//   {
//       "numero": 84,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3157"
//   },
//   {
//       "numero": 85,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3158"
//   },
//   {
//       "numero": 86,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3159"
//   },
//   {
//       "numero": 87,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3160"
//   },
//   {
//       "numero": 88,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3161"
//   },
//   {
//       "numero": 89,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3162"
//   },
//   {
//       "numero": 90,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3163"
//   },
//   {
//       "numero": 91,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3164"
//   },
//   {
//       "numero": 92,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3165"
//   },
//   {
//       "numero": 93,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3166"
//   },
//   {
//       "numero": 94,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3167"
//   },
//   {
//       "numero": 95,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3170"
//   },
//   {
//       "numero": 96,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3171"
//   },
//   {
//       "numero": 97,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3172"
//   },
//   {
//       "numero": 98,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3173"
//   },
//   {
//       "numero": 99,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3174"
//   },
//   {
//       "numero": 100,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-3175"
//   },
//   {
//       "numero": 101,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5796"
//   },
//   {
//       "numero": 102,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5683"
//   },
//   {
//       "numero": 103,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5535"
//   },
//   {
//       "numero": 104,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5483"
//   },
//   {
//       "numero": 105,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5817"
//   },
//   {
//       "numero": 106,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5511"
//   },
//   {
//       "numero": 107,
//       "transporte": "MOTOCICLETA",
//       "placa": "TMD-0874"
//   },
//   {
//       "numero": 108,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5709"
//   },
//   {
//       "numero": 109,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5752"
//   },
//   {
//       "numero": 110,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5465"
//   },
//   {
//       "numero": 111,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5482"
//   },
//   {
//       "numero": 112,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5816"
//   },
//   {
//       "numero": 113,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5512"
//   },
//   {
//       "numero": 114,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5484"
//   },
//   {
//       "numero": 115,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5818"
//   },
//   {
//       "numero": 116,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5510"
//   },
//   {
//       "numero": 117,
//       "transporte": "MOTOCICLETA",
//       "placa": "TMD-0884"
//   },
//   {
//       "numero": 118,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5708"
//   },
//   {
//       "numero": 119,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5751"
//   },
//   {
//       "numero": 120,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5464"
//   },
//   {
//       "numero": 121,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5532"
//   },
//   {
//       "numero": 122,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5717"
//   },
//   {
//       "numero": 123,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5844"
//   },
//   {
//       "numero": 124,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5707"
//   },
//   {
//       "numero": 125,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5750"
//   },
//   {
//       "numero": 126,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5463"
//   },
//   {
//       "numero": 127,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5706"
//   },
//   {
//       "numero": 128,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5749"
//   },
//   {
//       "numero": 129,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5462"
//   },
//   {
//       "numero": 130,
//       "transporte": "MOTOCICLETA",
//       "placa": "EU-5754"
//   }
// ])
// // //   Insertar datos ficticios en TipoDocumentoComplementario
//     await proveedor.bulkCreate([
//       { modelo: "VM780" ,
//         marca:"HYTERA"}

//     ]);

  //  //Insertar datos ficticios en Infraccion
    await bodyCam.bulkCreate([
        {"numero":"SG036","serie":"21D17A3521","nro_bateria":"21D1704903","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},	
        {"numero":"SG037","serie":"21D17A3522","nro_bateria":"21D1704916","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG038","serie":"21D17A3523","nro_bateria":"21D1704929","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG039","serie":"21D17A3524","nro_bateria":"21D1704918","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG040","serie":"21D17A3525","nro_bateria":"21D1704928","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG041","serie":"21D17A3526","nro_bateria":"21D1704930","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG042","serie":"21D17A3527","nro_bateria":"21D1704897","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG043","serie":"21D17A3528","nro_bateria":"21D1704926","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG044","serie":"21D17A3529","nro_bateria":"21D1704912","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG045","serie":"21D17A3530","nro_bateria":"21D1704911","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG047","serie":"21D17A3551","nro_bateria":"21D1704896","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG048","serie":"21D17A3552","nro_bateria":"21D1704883","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG049","serie":"21D17A3553","nro_bateria":"21D1704887","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG050","serie":"21D17A3554","nro_bateria":"21D1704881","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG051","serie":"21D17A3555","nro_bateria":"21D1704885","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG052","serie":"21D17A3556","nro_bateria":"21D1704888","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG053","serie":"21D17A3557","nro_bateria":"21D1704886","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG054","serie":"21D17A3558","nro_bateria":"21D1704882","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG055","serie":"21D17A3559","nro_bateria":"21D1704894","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG056","serie":"21D17A3560","nro_bateria":"21D1704921","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG067","serie":"23726A0011","nro_bateria":"2372600284","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG068","serie":"23726A0012","nro_bateria":"2372600179","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG069","serie":"23726A0013","nro_bateria":"2372600182","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG070","serie":"23726A0014","nro_bateria":"2372600177","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG071","serie":"23726A0015","nro_bateria":"2372600537","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG072","serie":"23726A0016","nro_bateria":"2372600463","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG073","serie":"23726A0017","nro_bateria":"2372600533","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG074","serie":"23726A0018","nro_bateria":"2372600327","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG075","serie":"23726A0019","nro_bateria":"2372600484","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG076","serie":"23726A0020","nro_bateria":"2372600474","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG004","serie":"20920A0371","nro_bateria":"2092000307","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG116","serie":"23726A0060","nro_bateria":"2372600359","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG001","serie":"19O27A0810","nro_bateria":"2211400582","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG110","serie":"23726A0054","nro_bateria":"2372600491","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG002","serie":"19O27A0812","nro_bateria":"2211400562","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG112","serie":"23726A0056","nro_bateria":"2372600282","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG114","serie":"23726A0058","nro_bateria":"2372600334","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG113","serie":"23726A0057","nro_bateria":"2372600008","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG115","serie":"23726A0059","nro_bateria":"2372600050","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG111","serie":"23726A0055","nro_bateria":"2372600365","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG108","serie":"23726A0052","nro_bateria":"2372600492","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG109","serie":"23726A0053","nro_bateria":"2372600358","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG107","serie":"23726A0051","nro_bateria":"2372600276","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG138","serie":"23726A0082","nro_bateria":"2372600518","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG144","serie":"23726A0088","nro_bateria":"2372600534","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG139","serie":"23726A0083","nro_bateria":"2372600475","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG142","serie":"23726A0086","nro_bateria":"2372600302","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG140","serie":"23726A0084","nro_bateria":"2372600405","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG141","serie":"23726A0085","nro_bateria":"2372600185","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG154","serie":"23726A0098","nro_bateria":"2372600460","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG151","serie":"23726A0095","nro_bateria":"2372600371","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG148","serie":"23726A0092","nro_bateria":"2372600270","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG147","serie":"23726A0091","nro_bateria":"2372600280","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG153","serie":"23726A0097","nro_bateria":"2372600254","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG155","serie":"23726A0099","nro_bateria":"2372600479","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG150","serie":"23726A0094","nro_bateria":"2372600258","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG149","serie":"23726A0093","nro_bateria":"2372600250","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG137","serie":"23726A0081","nro_bateria":"2372600338","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG143","serie":"23726A0087","nro_bateria":"2372600523","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG156","serie":"23726A0100","nro_bateria":"2372600304","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG146","serie":"23726A0090","nro_bateria":"2372600381","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG152","serie":"23726A0096","nro_bateria":"2372600414","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"},		
        {"numero":"SG145","serie":"23726A0089","nro_bateria":"2372600005","id_proveedor":"3f1d1d7e-543d-4a54-9342-79ef575b3008"}		
      
    ]);

    // Insertar datos ficticios
    // . en TipoDocumentoIdentidad
    console.log("Datos insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos ficticios:", error.message);
  } finally {
    await sequelize.close();
    console.log("Conexión cerrada.");
  }
};

insertData();