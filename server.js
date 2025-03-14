require("dotenv").config();
const express = require("express");
const http = require("http");
// const path = require('path');
const { sequelize } = require("./db_connection");
// const { FOTOS_RUTA } = process.env;
// const { PDF_RUTA } = process.env;
//const tareajeRutas = require("./routes/index");
const { PORT_CAMARAS } = process.env;
const { initializeSocket, userSockets } = require("./sockets");
//const loginMiddleware = require("./checkers/validateToken");
//const usuariosRouter = require("./routes/loginRouter");
const cors = require("cors");
//const configurarCronJobs = require("./cronjobs/cron");

const app = express();

//app.use(bodyParser.json({ limit: '50mb' }));
//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());
//app.use("/login", usuariosRouter); // no aplica authMiddleware para el manejo de usuarios
//app.use(loginMiddleware); // usa el middleware globalmente para validar todas las rutas a las que se va a acceder en el sistema solo estando logeado
const server = http.createServer(app); // servidor http a partir de express

initializeSocket(server); // Inicializamos Socket.io
//app.use('/uploads/fotos', express.static(path.resolve(FOTOS_RUTA)));
//app.use('/uploads/pdfs', express.static(path.resolve(PDF_RUTA)));
//app.use("/", tareajeRutas);

app.get("/", (req, res) => {
  res.json({ success: "Hello World" });
});

// Configurar y ejecutar los CronJobs


server.listen(PORT_CAMARAS, () => {
  console.log(`CAMARAS: Server is running on port ${PORT_CAMARAS}`);
  sequelize.sync({ alter: true })
    .then(() => console.log("Database is connected"))
    .catch(err => console.error("Error connecting to the database:", err));
});

module.exports = { userSockets };
