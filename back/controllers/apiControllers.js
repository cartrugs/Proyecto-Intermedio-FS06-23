

/**@type {Object} Requerir el NPM mongoose */
const mongoose = require('mongoose');


/**
 * Funcion para conectar a la base de dados 
 */
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.URI_DB)
        console.log('base de datos conectada');
    } catch (error) {
        console.log(error);
        // Completar: Gestionar qué se hace con el error.
    }
};

/**
 * Exportación de dbConnect
 */
module.exports = {dbConnect};
