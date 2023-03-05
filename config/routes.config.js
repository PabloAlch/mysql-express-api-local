const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");


router.get('/', user.home); // prueba
router.get('/users', user.list);
router.post('/users', user.addUser);
router.delete('/users/:id', user.deleteUser);


module.exports = router;