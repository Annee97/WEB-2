
require('dotenv').config(); 
const express = require('express');
const app = express();

// 1. Configuración de Express y Middlewares

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(express.static('public'));

// 2. Conexión de Rutas

const db = require('./db');

const userRoutes = require('./routes/users'); 
app.use('/', userRoutes); 

// 3. Inicialización del Servidor
const port = process.env.PORT || 3000; 

app.listen(port, () => {
    // console.log(`servidor desde http://127.0.0.1:${port}`);
    console.log(`🚀 Servidor Express iniciado en http://127.0.0.1:${port}`);
});