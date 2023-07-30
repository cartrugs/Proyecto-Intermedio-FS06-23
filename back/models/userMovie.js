/** @type {object} requeriendo del metodo moongose para poder crear el modelo de la base de dados user*/
const {Schema, model} = require('mongoose');

/**Modelo de la collecion para el banco de dados de usuario */
const schemaUser = new Schema({
    user:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true
    },
    passaword:{
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    type:{
        type:String
    }
})

/**importacion del modelo para mandar ao controllers */
module.exports = model('user', schemaUser):

