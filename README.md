# 🛒 Projeto CRUD de Produtos – Node.js + MySQL

Este é um projeto simples de CRUD (Create, Read, Update, Delete) de produtos, utilizando uma arquitetura MVC e as seguintes tecnologias:

    Frontend: HTML, CSS e JavaScript puro

    Backend: Node.js com Express

    Banco de Dados: MySQL

# 🚀 Como Rodar o Projeto

Para configurar e executar o projeto em sua máquina, siga os passos abaixo.

# 1️⃣ Clone o Repositório

Abra seu terminal e execute os comandos:
Bash

    git clone https://github.com/viniciusmachadofragamatos/NodeProject.git
    cd NodeProject/backend

# 2️⃣ Instale as Dependências

Dentro do diretório backend, instale os pacotes necessários:
Bash

    npm install

# 3️⃣ Configure o Arquivo .env

Crie uma cópia do arquivo de exemplo e configure suas credenciais:
Bash

    cp .env.example .env

Abra o novo arquivo .env e substitua sua_senha_aqui pela sua senha real do MySQL:
Snippet de código

    DB_PASS=sua_senha_aqui

# 4️⃣ Crie o Banco de Dados e a Tabela

Acesse o MySQL no terminal:
Bash

    sudo mysql -u root -p

Em seguida, execute os comandos SQL para criar o banco de dados e a tabela produto:
SQL

    CREATE DATABASE ecolojia;
    USE ecolojia;
    CREATE TABLE produto(
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10,2) 
    );

# 5️⃣ Execute o Servidor

Inicie o servidor Node.js:
Bash

    npm start

O servidor estará rodando em: 👉 http://localhost:3000

# 📂 Estrutura do Projeto

A organização do projeto segue o padrão MVC (Model-View-Controller):

NodeProject/
├── backend/

│   ├── server.js          # Arquivo principal de inicialização

│   ├── routes/            # Define as rotas da API

│   ├── controllers/       # Lógica de negócio das rotas (C da MVC)

│   ├── models/            # Interação com o banco de dados (M da MVC)

│   ├── config/            # Configurações, como a conexão com o DB

│   ├── public/            # Arquivos estáticos (HTML, CSS, JS do frontend - V da MVC)

│   └── .env.example

└── README.md

📌 Funcionalidades

O projeto implementa as operações básicas de gerenciamento de produtos:

    ✔️ Criar produtos

    ✔️ Listar produtos

    ✔️ Editar produtos

    ✔️ Excluir produtos

    ✔️ Interface simples em HTML + CSS

    ✔️ Backend estruturado em MVC

    ✔️ Conexão segura ao DB via arquivo .env

🙋 Autor

Projeto desenvolvido por Vinicius, Samuel e Marcos.
