const express = require('express');
const cors = require('cors');
const path = require('path'); 
const livroRoutes = require('./modules/livro/livroRoutes'); 
require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/livros', livroRoutes);

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/lista', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'lista.html'));
});

app.get('/editar', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'editar.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});