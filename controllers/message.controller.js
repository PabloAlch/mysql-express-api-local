const { connection } = require('../config/db.config')



module.exports.mensajes = (req, res, next) => {
  connection.query('SELECT * FROM mensaje', (error, results, fields) => {
    if (error)
        throw error;
    res.status(200).json(results);
    // console.log(result);
  });
};
