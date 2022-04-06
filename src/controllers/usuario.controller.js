let config = require('../database/db-config');
const sql = require('mssql');
const Usuario = require('../models/usuario');

async function getAll() {
    try {
        let pool = await sql.connect(config);
        let query = await pool.request().execute('sp_usuario_getAll');
        return query.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function getById(id) {
    try {
        let pool = await sql.connect(config);
        let query = await pool.request()
            .input('id', sql.Int, id)
            .execute('sp_usuario_getById');
        return query.recordset;
    } catch (error) {
        console.log(error);
    }
}
async function save(data) {
    let usuario = new Usuario;
    usuario = data;
    try {
        let pool = await sql.connect(config);

        let query = await pool.request()
            .input('nombre', sql.Text, usuario.nombre)
            .input('email', sql.Text, usuario.email)
            .execute('sp_usuario_save')
            return query.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function update(id, data) {
    let usuario = new Usuario;
    usuario = data;
    try {
        let pool = await sql.connect(config);

        let query = await pool.request()
            .input('id', sql.Int, id)
            .input('nombre', sql.Text, usuario.nombre)
            .input('email', sql.Text, usuario.email)
            .execute('sp_usuario_update')
            return query.recordset;
    } catch (error) {
        console.log(error);
    }
}

async function destroy(id) {
    try {
        let pool = await sql.connect(config);
        let query = await pool.request()
            .input('id', sql.Int, id)
            .execute('sp_usuario_delete')
        return query.recordset;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAll: getAll,
    getById: getById,
    save: save,
    update: update,
    destroy: destroy
}