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

module.exports = { criarCategoria, listarCategorias };