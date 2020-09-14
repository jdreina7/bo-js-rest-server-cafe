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

