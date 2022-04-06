const { Router } = require('express');
const router = Router();
const { getAll, getById, save, update, destroy } = require('../controllers/usuario.controller');
const Usuario = require('../models/usuario');

router.get('/',(req, res) => {
    getAll().then((data) => {
        res.json(data);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    getById(id).then((data) => {
        res.json(data);
    });
});

router.post('/', (req, res) => {
    const { nombre, email} = req.body;

    let usuario = new Usuario;
    usuario.nombre = nombre;
    usuario.email = email;

    save(usuario).then((data) => {
        res.json(data);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;    
    const { nombre, email} = req.body;

    let usuario = new Usuario;
    usuario.nombre = nombre;
    usuario.email = email;

    update(id, usuario).then((data) => {
        res.json(data);
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    destroy(id).then((data) => {
        res.json(data);
    });
});

module.exports = router;