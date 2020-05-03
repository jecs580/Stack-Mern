// Aqui colocamos el codigo del servidor, codigo del framework

// Usamos sintaxis  de inportacion de EMC 5 y common Js, debido a que node no soporte aun nuevas versiones. Si quieres usar codigo moderno puedes usar Babel como complemento 
const express = require('express');

const app = express(); // Creamos una aplicacion de express
module.exports=app; // Exportamos el modulo "app"