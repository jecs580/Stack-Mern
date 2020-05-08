// Arrancamos el servidor
require("dotenv").config(); // Inportamos las variables de entorno
const app = require("./app");
require("./database"); // Con solo importar el archivo database se ejecutara.

async function main() {
  await app.listen(app.get("port"));
  console.log("Servidor en el puerto", app.get("port"));
}
main(); // Ejecutamos la funcion que arranca el servidor
