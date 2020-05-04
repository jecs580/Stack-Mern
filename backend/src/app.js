// Aqui colocamos el codigo del servidor, codigo del framework

// Usamos sintaxis  de inportacion de EMC 5 y common Js, debido a que node no soporte aun nuevas versiones. Si quieres usar codigo moderno puedes usar Babel como complemento 
const express = require('express');
const cors = require('cors');
const app = express(); // Creamos una aplicacion de express

/*Settings
    COnfiguraciones del servidor
*/
app.set('port',process.env.PORT || 4000);

/*Middleware
    Funciones que se ejecutaran antes que lleguen a las rutas
*/
app.use(cors());  // Permitimos el envio o la llegada de datos de un cliente.
app.use(express.json()); // Especificamos que nuestro servidor pueda entender el formato json


/*Routes
    Rutas que tendra nuestro proyecto
*/
app.get('/api/users', (req, res)=>res.send('Ruta de usuarios'))
app.get('/api/notes', (req, res)=>res.send('Ruta de notas'))


module.exports=app; // Exportamos el modulo "app"