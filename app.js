const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

var bodyParser = require("body-parser");
const PersonaController = require("./controllers/personaController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let personaController = new PersonaController();

app.use("/", personaController.router);

module.exports = app;