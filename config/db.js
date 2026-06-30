require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',  // Deixe fixo como string para forçar o container do banco
  database: 'livrariasabitirucs',
  password: process.env.DB_PASSWORD, // Pode manter este
  port: 5432
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};