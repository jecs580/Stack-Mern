// Arrancamos el servidor
const app = require('./app');

async function main(){
    await app.listen(4000);
    console.log("Servidor en el puerto 4000");
    
}
main();  // Ejecutamos la funcion que arranca el servidor