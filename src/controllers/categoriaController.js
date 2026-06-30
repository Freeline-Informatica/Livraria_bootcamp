const { pool } = require('../config/db');

const criarCategoria = async (req, res) => {
    try {
        const { nome } = req.body;
        
        if (!nome) {
            return res.status(400).json({ erro: 'O nome da categoria é obrigatório.' });
        }

        const novaCategoria = await pool.query(
            'INSERT INTO categorias (nome) VALUES ($1) RETURNING *',
            [nome]
        );

        res.status(201).json({ 
            mensagem: 'Categoria cadastrada com sucesso!', 
            categoria: novaCategoria.rows[0] 
        });
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ erro: 'Categoria já existe.' });
        }
        console.error(error);
        res.status(500).json({ erro: 'Erro interno ao cadastrar a categoria.' });
    }
};

const listarCategorias = async (req, res) => {
    try {
        const categorias = await pool.query('SELECT * FROM categorias ORDER BY nome ASC');
        res.status(200).json(categorias.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar categorias.' });
    }
};

const excluirCategoria = async (req, res) => {
    const { id } = req.params;

    try {
        const categoria = await pool.query(
            'SELECT * FROM categorias WHERE id = $1',
            [id]
        );

        if (categoria.rowCount === 0) {
            return res.status(404).json({ erro: 'Categoria não encontrada.' });
        }

        const livros = await pool.query(
            'SELECT * FROM livros WHERE categoria_id = $1',
            [id]
        );

        if (livros.rowCount > 0) {
            return res.status(400).json({
                erro: 'Não é possível excluir a categoria, pois existem livros associados a ela.'
            });
        }

        await pool.query('DELETE FROM categorias WHERE id = $1', [id]);

        return res.status(200).json({ mensagem: 'Categoria excluída com sucesso.' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao excluir categoria.' });
    }
};

module.exports = { criarCategoria, listarCategorias, excluirCategoria };