const express = require("express");
const app = express();
const hbs = require("hbs");
//el port es para btener el puerto de heroku
const port = process.env.PORT || 8080;
//un middelwaer se ejecuta simpre sin importar la ruta que se pida
//dentro del parentesis se especifica el folder que se quiere servir como publico
app.use(express.static(__dirname + "/public"));

//Express HBS engine
//los parciales son elementos comunes de la vista que queremos tener en todas las paginas, hbs nos permite
//hacerlos una vez y mostrarlos en diferentes pantallas
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

//un helper es una funcion que se dispara cuando el template lo requiere, el primer parametro es el nombre del helper, el segun es la funcion a realizar
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
});

//se configura una solicitud get cuando el path sea un /
app.get("/", (req, res) => {
    // let salida = {
    //     nombre: "Diego",
    //     edad: 30,
    //     url: req.url,
    // };
    //la funcion send detecta que el formato es json y automaticamente lo transforma a json
    //res.send(salida);

    //cuando se quieren renderizar paginas en lugar de .send se usa .render, como segundo argumento
    //se le pasa un objeto con los mismos nombres que las variables que se quieren cambiar en los handlebars
    res.render("home", {
        nombre: "Diego",
    });
});

app.get("/about", (req, res) => {
    //cuando se quieren renderizar paginas en lugar de .send se usa .render, como segundo argumento
    //se le pasa un objeto con los mismos nombres que las variables que se quieren cambiar en los handlebars
    res.render("about");
});

//escuchamos el puerto 8080
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});