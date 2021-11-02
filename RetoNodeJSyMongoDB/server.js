const express = require('express');
const mongoos = require('mongoose');
const PersonSchema = require("./modelos/InfoPersona.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a Base de Datos
mongoos.connect("mongodb+srv://turing_web:GJAcT3T0vAWzNLpg@turingsoftcluster01.rlc7p.mongodb.net/Reto2S1InscripcionPersona?retryWrites=true&w=majority")

// Operaciones CRUD
router.get('/', (req, res) => {
    res.send("Inicio de mi API: Reto2S1 NodeJS y MongoDB");
})

router.get('/infopersona', (req, res) => {
    PersonSchema.find(function(err, datos){
        if(err){
            console.log("Error al leer información de la persona!");
        }else{
            res.send(datos);
        }
    })
})

router.post('/infopersona', (req, res) => {
    let nuevaPersona = new PersonSchema({
        idPersona: req.body.id,
        TipoDoc: req.body.tipoDocumento,
        Documento: req.body.documento,
        Nombres: req.body.nombre,
        Apellidos: req.body.apellido,
        Direccion: req.body.direccion,
        Email: req.body.correoElectronico,
        TelefonoFijo: req.body.telefono,
        TelefonoCelular: req.body.celular,
        SitioWeb: req.body.sitioWeb,
        DescripcionPerfil: req.body.DescripcionPerfil
    });

    nuevaPersona.save(function(err, datos){
        if(err){
           console.log(err); 
        }
        res.send("La Persona ha sido registrada exitosamente!");
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("El Servidor está corriendo por el puerto '3000'.")
});