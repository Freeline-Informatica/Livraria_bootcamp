const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

router.post('/', autorController.criarAutor);
router.get('/', autorController.listarAutores);

module.exports = router;