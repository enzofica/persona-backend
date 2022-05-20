const PersonaRepository = require("../repositories/personaRepository");


class PersonaService {
    constructor() {
        this.personaRepository = new PersonaRepository;
    }

    async crearPersona(){

        const persona = await this.personaRepository.crearPersona()

        return await persona;
    }

    async getPersona(){
        const persona = await this.personaRepository.getPersona()

        return persona;
    }
}

module.exports = PersonaService;