/***********************
 * El puerto Global
 ***********************/
process.env.PORT = process.env.PORT || 3000;


/***********************
 * Duración del Token
 ***********************/
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


/***********************
 * SEED
 ***********************/
process.env.SEED = process.env.SEED || 'september-charglie@-12345';


/***********************
 * ENVIRONMENT
 ***********************/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/***********************
 * DB_URI
 ***********************/
let urlDB;

if ( process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://admin:admin@cafedb.4ilhe.mongodb.net/cafe';
}

process.env.URLDB = urlDB;
