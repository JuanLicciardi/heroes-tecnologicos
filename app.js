// Declaracion de constantes utiles
const express = require ('express');
const app = express();
const puerto = 3030;

// Salida en pantalla de Buscador
app.get('/', function (req, res) { 
    res.send ("CREACION DE PRIMER PAGINA");
});

// Activación de Servidor en pueto 3030
app.listen( puerto, function () {
    console.log ( `Server running in port ${puerto}`)
})
