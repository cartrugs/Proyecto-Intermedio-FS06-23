const { Schema, model } = require("mongoose");

const peliculaSchema = new Schema({

    titulo: {
        type: String,
        require: true,
        unique: false,
        
    },
    sinopsis: {
        type: String,
        require: true,
        
    },
   
    genero: {
        type: String,
        require: true,
        
    },

    anyo: {
        type: String,
        require: true,
        
    },

    director: {
        type: String,
        require: true,
        
    },
    duracion: {
        type: String,
        require: true,
        
    },

    imagen: {
        src: {
            type: String,
            require: true,

        },
        alt: {
            type: String,
            require: true,

        }

    }


})
module.exports = model(`Pelicula`, peliculaSchema)