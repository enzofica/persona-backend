const mongoose = require("mongoose");
const { appConfig } = require("../config");
const Schema = mongoose.Schema;

const PersonaSchema = Schema (
    {
        nombre: {type: String},
        apellido: {type: String},
        fachaNacimiento: {type: Date},
        ciudad: {type: String},
        email: {type: String}
    }
)

module.exports = mongoose.model("Persona", PersonaSchema);