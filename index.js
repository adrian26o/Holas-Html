const colors = require("colors");
const { static } = require("express");
const express = require("express");
const morgan = require("morgan");
const path = require('path');

const server = express();

//Obtener rutas
var directions = require("./directions")

server.use(morgan("dev"))
server.set("views",path.join(__dirname,"/views"))
server.set("view engine", "ejs")

//estaticos
server.use(express.static(path.join(__dirname,"/public")))
server.use(express.static(__dirname + "views"))
server.use(directions)

server.listen(3000, () =>
{
    console.log("server iniciado".red)
})