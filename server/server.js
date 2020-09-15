require('./config/config');

// Dependencias
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


// Rutas = Endpoints
app.use( require('./routes/index') );


mongoose.connect('mongodb://localhost:27017/cafe', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
// mongoose.connect('mongodb+srv://admin:admin@cafedb.4ilhe.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
  if (err) throw err;

  console.log('DB ONLINE!!!');
});


// Inicialización del Server 
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto: ', process.env.PORT);
});
