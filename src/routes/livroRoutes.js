const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/', livroController.criarLivro);
router.get('/', livroController.listarLivros);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.inativarLivro);

module.exports = router;