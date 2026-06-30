const express = require('express');
const cors = require('cors');
const livroRoutes = require('./modules/livro/livroRoutes'); 
require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.use(livroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor MVC rodando redondo na porta ${PORT}`);
});