# 🛒 Projeto CRUD de Produtos – Node.js + MySQL

Este é um projeto simples de CRUD (Create, Read, Update, Delete) de produtos usando:

- **Frontend:** HTML, CSS e JavaScript puro  
- **Backend:** Node.js + Express  
- **Banco:** MySQL  
- **Arquitetura:** MVC  

---

## 🚀 Como rodar o projeto

### 1️⃣ Clone o repositório

git clone https://github.com/viniciusmachadofragamatos/NodeProject.git

cd NodeProject/backend

# 2️⃣ Instale as dependências

npm install

# 3️⃣ Crie seu arquivo .env

Baseado no arquivo .env.example:

cp .env.example .env


Abra o arquivo .env e coloque sua senha real do MySQL:

DB_PASS=sua_senha_aqui

# 4️⃣ Crie o banco de dados no MySQL

Acesse o MySQL:

sudo mysql -u root -p


E execute:

CREATE DATABASE ecolojia;

USE ecolojia;

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2)
);

# 5️⃣ Execute o servidor
npm start


Servidor rodando em:
👉 http://localhost:3000

# 📂 Estrutura do projeto

NodeProject/
 ├── backend/

 │     ├── server.js
 
 │     ├── routes/
 
 │     ├── controllers/
 
 │     ├── models/
 
 │     ├── config/
 
 │     ├── public/
 
 │     └── .env.example
 
 └── README.md

# 📌 Funcionalidades

✔️ Criar produtos

✔️ Listar produtos

✔️ Editar produtos

✔️ Excluir produtos

✔️ Interface simples em HTML + CSS

✔️ Backend estruturado em MVC

✔️ Conexão segura via .env

# 🙋 Autor

Projeto desenvolvido por Vinicius.
