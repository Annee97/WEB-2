// Carga las variables de entorno definidas en el archivo .env
require('dotenv').config();

// Importa el módulo mysql2 
const mysql = require('mysql2');

// Crea el objeto de conexión 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// conectar a la base de datos
connection.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err.stack);
                return; 
    }
    console.log('Conectado a MySQL con ID:', connection.threadId);
});

// Exporta la conexión para que app.js y routes/users.js puedan usarla
module.exports = connection;