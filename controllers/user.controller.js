const { connection } = require('../config/db.config')



module.exports.list = (req, res, next) => {
  connection.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error)
        throw error;
  
    results.forEach(result => {
        // console.log(result);
          res.status(200).json(results);

        
    });
  });
};


module.exports.home = (req, res, next ) => { 
  res.json({ message: "oki" });
  
 }

//Insert into Carta (plato, descripcion, precio, disponible) values ("Entrecot", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", 19.99, true);


// CREATE TABLE carta
// (
//     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     plato VARCHAR(25) NOT NULL,
//     descripcion VARCHAR(255),
//     precio DECIMAL(12, 2) NOT NULL,
//     disponible BOOLEAN
// )