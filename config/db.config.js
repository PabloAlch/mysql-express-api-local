const dotenv = require("dotenv");
dotenv.config();

const mysql = require('mysql');
let connection;

try {
    connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME
    });

} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = {connection};




// const mysql = require('mysql');
// let conexion = mysql.createConnection({
//     host : 'hd-europe2712.banahosting.com',
//     database : 'ayavlgeb_sql-express-lab-1',
//     user : 'ayavlgeb_pablo',
//     password : 'HRP3Qoxn',
// });

// conexion.connect(function(err) {
//     if (err) {
//         console.error('Error de conexion: ' + err.stack);
//         return;
//     }
//     console.log('Conectado con el identificador ' + conexion.threadId);
//     // console.log({conexion})
// });


// // conexion.query('SELECT * FROM usuarios where id = 1', function (error, results, fields) {
// //   if (error)
// //       throw error;

// //   results.forEach(result => {
// //       console.log(result);
// //   });		
// // });


// conexion.end();


// // module.export = {conexion}

// //Cambiar2006