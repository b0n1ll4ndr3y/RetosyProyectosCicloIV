const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
require('dotenv').config();

// Puerto de conexión
const app = express();
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use('/api', userRoute)

// Rutas del proyecto
app.get('/',(req, res) => {
    res.send('Bienvenido a la API "Andrey Bonilla"')
})

// Puerto de activación del servicio
app.listen(port,() => console.log('server listening on port', port))

//Conexion con la base de datos mongoose
mongoose
    .connect(process.env.MONGODB_CONNECT)
    .then(()=> console.log('Conectados con MongoDB Atlas'))
    .catch((error)=> console.error(error));

// Ejecutar el programa - npm run start