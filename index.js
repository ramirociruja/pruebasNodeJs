const express = require('express');
const app = express();
const hbs = require('hbs');
// La primera parte es el puerto que me asigna heroku, si lo corro local le asigna 3000.
const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) =>{
    res.render('home.hbs',{
        nombre: 'Ramiro'
    })
})

app.get('/customers', (req, res) =>{
    res.render('customers.hbs')
});

app.listen(puerto), () =>{
    console.log(`Escuchando el puerto ${ puerto }`);
}