const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/teste', async(req, res) => {
    try {
        const resultado = await db.query('select now()');
        res.json({
            status: "Sucesso!",
            mensagem: "O app.js conectou ao db.js, que acessou o PostgreSQL!",
            horario_banco: resultado.rows[0].now
        });
    } catch (erro) {
        console.error("Erro na conexão:", erro);
        res.status(500).json({ erro: "Não foi possível conectar ao banco de dados." });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando redondo na porta ${PORT}`);
});