const { connection } = require('../config/db.config')


module.exports.home = (req, res, next ) => { 
  res.json({ message: "oki" });
  
 }

module.exports.list = (req, res, next) => {
  connection.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error)
        throw error;
    res.status(200).json(results);
    // console.log(result);
  });
};

module.exports.getUserId = (req, res, next) => {
  const id = req.params.id;

  connection.query('SELECT * FROM usuarios where id = ?', [ id ],
  (error, results ) => {
    if( error )
    throw error;
    
    res.status(201).json(results)
  });
};

module.exports.addUser = ( req, res ) => {
  
  const { nombre, contrasena } = req.body;
  // const { nombre, contrasena, email } = req.body;
  // console.log(nombre, contrasena, email)
  connection.query( 'INSERT INTO usuarios(nombre, contrasena, email) VALUES (?,?,?)', 
  [nombre, contrasena, email],
  (error, results) => {
    if( error )
      throw error;
      // console.log(results.affectedRows)
    res.status(201).json('Usuario añadido correctamente');
  });
};
/////////////////////
module.exports.editName = ( req, res ) => {
  const id = req.params.id;
  const { nombre } = req.body;

  connection.query( 'UPDATE usuarios SET nombre = ? WHERE id = ?', 
  [nombre, id],      // ojo la letra ñ o n segun BBDD
  (error, results) => {
    if( error )
      throw error;
      // console.log(results.affectedRows)
    res.status(201).json('Usuario actualizado correctamente');
  });

}
///////////////////////
module.exports.deleteUser =( req, res ) => {
  const id = req.params.id;
  connection.query('DELETE from usuarios where id = ?', [ id ],
  (error, results ) => {
    if( error )
    throw error;
    
    res.status(201).json('Usuario eliminado')
  })
};


