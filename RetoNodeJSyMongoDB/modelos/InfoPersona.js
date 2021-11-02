const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    idPersona: Number,
    TipoDoc: String,
    Documento: Number,
    Nombres: String,
    Apellidos: String,
    Direccion: String,
    Email: String,
    TelefonoFijo: String,
    TelefonoCelular: Number,
    SitioWeb: String,
    DescripcionPerfil: String
});

module.exports = mongoose.model('infopersona', PersonSchema, 'InfoPersonas');