const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/', livroController.criarLivro);
router.get('/', livroController.listarLivros);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.excluirLivro);
router.put('/:id/inativar', livroController.inativarLivro);
router.patch('/:id/reativar', livroController.reativarLivro);

module.exports = router;