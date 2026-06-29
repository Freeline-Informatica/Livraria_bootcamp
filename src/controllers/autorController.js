const { pool } = require('../config/db');

const criarAutor = async (req, res) => {
    try {
        const { nome } = req.body;
        
        if (!nome) {
            return res.status(400).json({ erro: 'O nome do autor é obrigatório.' });
        }

        const novoAutor = await pool.query(
            'INSERT INTO autores (nome) VALUES ($1) RETURNING *',
            [nome]
        );

        res.status(201).json({ 
            mensagem: 'Autor cadastrado com sucesso!', 
            autor: novoAutor.rows[0] 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro interno ao cadastrar o autor.' });
    }
};

const listarAutores = async (req, res) => {
    try {
        const autores = await pool.query('SELECT * FROM autores ORDER BY nome ASC');
        res.status(200).json(autores.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar autores.' });
    }
};

module.exports = { criarAutor, listarAutores };