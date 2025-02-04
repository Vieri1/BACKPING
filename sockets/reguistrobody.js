const { getIo } = require('../sockets');
const {newbody}=require("../controllers/bodyCamController")
// Usas getIo para obtener la instancia de io
const io = getIo();

// Ahora puedes emitir eventos
io.on('reguistro', async ({numero,serie,nro_bateria})=>{
    const errores=[]
    const regexNumeros = /^[0-9]+$/;
    const regexLetrasNumeros = /^[a-zA-Z0-9]+$/;
    if(!numero){
        errores.push("El campo numero es requerido")
    } else if (!regexNumeros.test(numero)) {
        errores.push("El campo 'numero' solo debe contener números.");
    }
    if(!serie){
        errores.push("El campo serie es requerido")
    }else if(!regexLetrasNumeros.test(serie)){
        errores.push("La serie solo debe tener numero y letras ")
    }
    if(!nro_bateria){
        errores.push("El campo nro_bateria es requerido")
    }else if(!regexLetrasNumeros.test(nro_bateria)){
        errores.push("El nro_bateria solo debe tener numero y letras ")
    }
    if(errores.length>0){
        io.emit("errorRegistro",{errores})
    }
    try {
        // Intentamos registrar la nueva bodyCam
        const newBody = await newbody({ numero, serie, nro_bateria });

        if (!newBody) {
            return io.emit("errorRegistro", {
                errores: ["Error al registrar la bodyCam."],
            });
        }

        // Si se registra correctamente, notificamos a todos los clientes
        io.emit("registroExitoso", { message: "BodyCam registrada con éxito", data: newBody });
    } catch (error) {
        console.error("Error al registrar BodyCam en el socket:", error);
        io.emit("errorRegistro", { errores: ["Error interno del servidor."] });
    }
});
