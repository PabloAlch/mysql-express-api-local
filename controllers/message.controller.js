const { connection } = require('../config/db.config')


module.exports.mensajes = (req, res, next) => {
  connection.query('SELECT m.id_mensaje, u.name , m.text , m.created_at, e.state , c.category FROM mensaje m JOIN usuarios u ON m.user = u.id_usuario JOIN estadoMensaje e ON m.state = e.id_state JOIN categoria c ON m.category_mensaje = c.id_categoria ORDER BY m.id_mensaje ASC', (error, results, fields) => {
    if (error)
        throw error;
    res.status(200).json(results);
    // console.log(result);
  });
};

module.exports.read = (req, res, next) => {
  const id = req.params.id;

  connection.query('UPDATE mensaje SET state = 1 WHERE id_mensaje = ? ', [ id ], (error, results, fields) => {
    if (error)
        throw error;
    res.status(200).json(results);
    // console.log(result);
  });
};

module.exports.message = (req, res, next) => {
  const id = req.params.id;

  connection.query('SELECT m.id_mensaje, u.name , m.text , m.created_at, e.state , c.category FROM mensaje m JOIN usuarios u ON m.user = u.id_usuario JOIN estadoMensaje e ON m.state = e.id_state JOIN categoria c ON m.category_mensaje = c.id_categoria WHERE id_mensaje = ? ', [ id ], (error, results, fields) => {
    if (error)
        throw error;
    res.status(200).json(results);
    // console.log(result);
  });
};



//SELECT m.id_mensaje, u.name , m.text, m.title , m.created_at, e.state , c.category FROM mensaje m JOIN usuarios u ON m.user = u.id_usuario JOIN estadoMensaje e ON m.state = e.id_state JOIN categoria c ON m.category_mensaje = c.id_categoria where e.state = "Finalizado" ORDER BY m.id_mensaje ASC