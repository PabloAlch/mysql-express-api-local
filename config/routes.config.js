const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");
const message = require("../controllers/message.controller");



router.get('/', user.home); // prueba
router.get('/users', user.list);
router.get('/users/:id', user.getUserId);
router.post('/users/:id', user.editName);
router.post('/users', user.addUser);
router.delete('/users/:id', user.deleteUser);


router.get('/mensajes', message.mensajes);
router.get('/mensajes/:id', message.message);
router.post('/mensajes/read/:id', message.read);

module.exports = router;