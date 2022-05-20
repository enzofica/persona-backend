const PersonaSchema = require("../models/personaModel")
const faker = require('@faker-js/faker').faker;

class PersonaRepository {
    async crearPersona() {
        const nombre = faker.name.firstName()
        const apellido = faker.name.lastName()
        const fechaNacimiento = faker.date.past('1950-01-01', '2021-12-31')
        const ciudad = faker.address.city()
        const email = faker.internet.email()
          
        const persona = await PersonaSchema.create({
            nombre,
            apellido,
            fechaNacimiento,
            ciudad,
            email
        })

        return await persona.save();
    }

    async getPersona() {
        return await PersonaSchema.find().lean().exec();
      }
}

module.exports = PersonaRepository;