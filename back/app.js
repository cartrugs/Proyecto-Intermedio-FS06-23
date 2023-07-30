


/** @type {Object} Requeriendo express */
const express =require('express');


/**@type {Object} Importacion da funcion que conecta con la bbdd*/
const {} = require('./helpers/connection');

/**Variable de entornos */
require('dotenv').config();

/** @type {Function} Metodo express  */
const app = express();

/** @type {Object} Defino el port de conexion */
const port = process.env.PORT


dbConnect()


/**Middleware que interpetra os formularios en Json */
app.use(express.urlencoded({ extended: false }))

/** Middleware para analisar requisicoes HTTP de formatos JSON */
app.use(express.json())



//ROUTAS 






/** Colocando servidor a escucha */
app.listen(port, ()=> {
    console.log(`Servidor ON desde ${port}`)
})

