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

A API estará disponível em

```
http://localhost:3000
```

### Repositorio FrontEnd

💡 **Aviso Importante:** Este repositório contém apenas a **API (Back-end)** do projeto. 
A interface visual completa, desenvolvida em Vue 3 e Tailwind CSS, encontra-se em um repositório dedicado.
 
🔗 **[Clique aqui para acessar o repositório do Front-end](https://github.com/renato-chagas/Livraria_bootcamp-front)**
