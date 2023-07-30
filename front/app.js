/**
 * Importar la librería.
 */
const express = require('express');

/**
 * Importar el módulo de mongoose en app.js {desetructuración}.
 */
const {dbConnect} = require('./utils/connection');
require('dotenv').config();

/**
 * Se utiliza express.
 */
const app = express();

/** 
 * Establece el número de puerto en el que se ejecutará la aplicación, tomando el valor del entorno (environment) como se define en process.env.PORT.
*/
const port = process.env.PORT; 

/**
 * Se utiliza express.static() para configurar la carpeta "public" como la ubicación de los archivos estáticos que serán servidos directamente al cliente.
 * Express buscará los recursos solicitados dentro de la carpeta "public" y los entregará al cliente si existen.
*/
app.use(express.static(__dirname + '/public'));

/**
 * Configurar ingenieria plantilla
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/**
 * Invocación dbConnect
 */
dbConnect();

/**
 * Iniciar el servidor.
 * Utilizando el método listen de la instancia de la aplicación Express (app).
 */
app.listen(port, () => {
    console.log(`Está a la escucha del puerto ${port}`)
});