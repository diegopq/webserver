const http = require("http");

//creamos el servidor, recibe las request y las respuestas
http
    .createServer((req, res) => {
        res.write("Hola mundo");
        res.end(); //se indica que se termino de crear la respuesta
    })
    //se escucha el puerto 8080
    .listen(8080);

console.log("Escuchando el puerto 8080");