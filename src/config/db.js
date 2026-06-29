const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

const startDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS autores (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL
            );
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS categorias (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL
            );
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS livros (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                isbn VARCHAR(50) UNIQUE NOT NULL,
                preco NUMERIC(10, 2) NOT NULL CHECK (preco > 0),
                quantidade_estoque INTEGER NOT NULL CHECK (quantidade_estoque >= 0),
                autor_id INTEGER NOT NULL REFERENCES autores(id),
                categoria_id INTEGER NOT NULL REFERENCES categorias(id),
                ativo BOOLEAN DEFAULT TRUE,
                criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log('Tabelas verificadas/criadas com sucesso sequencial!');
    } catch (error) {
        console.error('Erro crítico ao criar tabelas no banco:', error);
    }
};

module.exports = { pool, startDB };