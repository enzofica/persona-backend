const express = require("express");

const PersonaService = require("../services/personaService");

class PersonaController {
    constructor () {
        this.personaSevice = new PersonaService;
        this.router = express.Router();
        this.router.post("/", (req, res) => this.crearPersona(req, res) );
        this.router.get("/", (req, res) => this.getPersona(req, res) );
    }

    async crearPersona(req, res){
        const data = req.body;
        const personaPromise = this.personaSevice.crearPersona(data);
        personaPromise
        .then((persona) => {
            res.json(persona);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    }

    async getPersona(req, res){
        const personaPromise = this.personaSevice.getPersona();
        personaPromise
          .then((persona) => {
            res.json(persona);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    }
}

module.exports = PersonaController;