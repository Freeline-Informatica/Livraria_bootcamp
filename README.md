## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone <url-do-backend>
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env`.

```bash
cp .env.example .env
```

ou crie manualmente um arquivo `.env` utilizando o conteúdo do `.env.example`.

### 4. Inicie o banco de dados

```bash
docker compose up -d
```

### 5. Execute o servidor

```bash
npm run dev
```

### 6. Como criar ou atualizar o banco de dados
A criação das tabelas e a estruturação do banco de dados ocorrem de forma **automática**. 
Assim que o servidor Node.js é iniciado pela primeira vez (`npm run dev`), o script interno `startDB()` é acionado. Ele se conecta ao PostgreSQL e executa as queries de `CREATE TABLE IF NOT EXISTS`, garantindo que o banco esteja pronto para uso imediatamente, sem necessidade de rodar scripts SQL manualmente.

### 7. A API estará disponível em

```
http://localhost:3000
```

### 8. Repositorio FrontEnd

💡 **Aviso Importante:** Este repositório contém apenas a **API (Back-end)** do projeto. 
A interface visual completa, desenvolvida em Vue 3 e Tailwind CSS, encontra-se em um repositório dedicado.
 
🔗 **[Clique aqui para acessar o repositório do Front-end](https://github.com/renato-chagas/Livraria_bootcamp-front)**
