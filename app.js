const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 9393;

const usuarioRoutes = require('./src/routes/usuario.routes');

const app = express(); 
app.use(bodyParser.json());
app.use(cors()); 

app.use('/usuario', usuarioRoutes);

app.listen(port, () => {
    console.log(`Servidor en: http://localhost:${port}`);
});