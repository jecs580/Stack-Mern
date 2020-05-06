// Encargado de la conexion con la base de datos.
const mongoose = require('mongoose');

const URI=process.env.MONGODB_CONNECT ? process.env.MONGODB_CONNECT:'mongodb://localhost/databasetest';
/* Llamamos a las variables de entorno a traves de process, en caso de no encontrar nada,
     creamos una base de datos llamada databasetest
    Process tiene acceso a nuestro sistema
*/
mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
}); // Configuracion para una conexion con una base de datos de mongo

const conection = mongoose.connection  // Objeto de conexion
conection.once('open',()=>{
    // Establecemos que ejecute algo al momento de conectarse a la database
    console.log('Base de datos conectado');
})