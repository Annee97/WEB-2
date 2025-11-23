const express = require('express');
const router = express.Router();
const db = require('../db'); 

// RUTA 1: LISTAR USUARIOS (READ ALL - GET /)
router.get('/', (req, res) => {
    const consulta = 'SELECT * FROM users';
    db.query(consulta, (err, results) => {
        if (err) {
            console.error('Error al obtener registros', err);
            res.send('Error al obtener datos');
            return;
        }
        res.render('index', { users: results });
    });
});

// RUTA 2: MOSTRAR FORMULARIO DE CREACIÓN (GET /create)
router.get('/create', (req, res) => {
    res.render('create'); 
});

// RUTA 3: PROCESAR CREACIÓN (CREATE - POST /create)
router.post('/create', (req, res) => {
    const { name, email } = req.body;
    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)';

    db.query(consulta, [name, email], (err, results) => {
        if (err) {
            console.error('Error al crear el registro', err);
            res.send('Error al crear el usuario'); 
        } else {
            res.redirect('/');
        }
    });
});

// RUTA 4: MOSTRAR FORMULARIO DE EDICIÓN (READ ONE - GET /edit/:id)
router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const consulta = 'SELECT * FROM users WHERE id = ?';
    db.query(consulta, [id], (err, results) => {
        if (err) {
            console.error('Error al buscar registro para editar', err);
            res.send('Error al buscar usuario');
            return;
        }
        if (results.length === 0) {
            res.send('Usuario no encontrado');
            return;
        }
        res.render('edit', { user: results[0] });
    });
});

// RUTA 5: PROCESAR ACTUALIZACIÓN (UPDATE - POST /update/:id)
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const consulta = 'UPDATE users SET name=?, email=? WHERE id=?';

    db.query(consulta, [name, email, id], (err, results) => {
        if (err) {
            console.error('Error al actualizar registro', err);
            res.send('Error al actualizar registro'); 
        } else {
            res.redirect('/');
        }
    });
});

// RUTA 6: ELIMINAR REGISTRO (DELETE - GET /delete/:id)
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const consulta = 'DELETE FROM users WHERE id = ?';

    db.query(consulta, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar el registro', err);
            res.send('Error al eliminar registro');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;