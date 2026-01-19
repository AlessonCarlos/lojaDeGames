# 🎮 Loja de Games - Backend API

Backend completo para uma **Loja de Games**, desenvolvido com **NestJS**, **TypeORM** e **MySQL**. Esta API permite o gerenciamento de **produtos** e **categorias de jogos**, oferecendo operações **CRUD completas**, validação de dados e relacionamento entre entidades.

---

## 📋 Tecnologias Utilizadas

* **NestJS** – Framework Node.js progressivo
* **TypeORM** – ORM para TypeScript/JavaScript
* **MySQL** – Banco de dados relacional
* **TypeScript** – Superset do JavaScript com tipagem estática
* **Class-validator** – Validação de dados
* **Class-transformer** – Transformação de objetos

---

## 🚀 Funcionalidades

### 🔧 CRUD Completo para Produtos

* ✅ `GET /produtos` – Listar todos os produtos
* ✅ `GET /produtos/:id` – Buscar produto por ID
* ✅ `GET /produtos?titulo=valor` – Buscar produtos por título
* ✅ `POST /produtos` – Criar novo produto
* ✅ `PUT /produtos/:id` – Atualizar produto existente
* ✅ `DELETE /produtos/:id` – Remover produto

---

### 🏷️ CRUD Completo para Categorias

* ✅ `GET /categorias` – Listar todas as categorias
* ✅ `GET /categorias/:id` – Buscar categoria por ID
* ✅ `GET /categorias?nome=valor` – Buscar categorias por nome
* ✅ `POST /categorias` – Criar nova categoria
* ✅ `PUT /categorias/:id` – Atualizar categoria existente
* ✅ `DELETE /categorias/:id` – Remover categoria

---

## 🔗 Relacionamentos

* ✅ **One-to-Many** – Uma Categoria pode possuir vários Produtos
* ✅ **Many-to-One** – Um Produto pertence a uma Categoria

---

## 📁 Estrutura do Projeto

```text
src/
├── produtos/
│   ├── produto.entity.ts           # Entidade Produto
│   ├── produto.service.ts          # Lógica de negócio
│   ├── produto.controller.ts       # Rotas da API
│   ├── produto.module.ts           # Módulo Produto
│   └── dto/
│       ├── produto.dto.ts          # Data Transfer Objects
│       └── create-produto.dto.ts   # DTO para criação
├── categorias/
│   ├── categoria.entity.ts         # Entidade Categoria
│   ├── categoria.service.ts        # Lógica de negócio
│   ├── categoria.controller.ts     # Rotas da API
│   ├── categoria.module.ts         # Módulo Categoria
│   └── dto/
│       ├── categoria.dto.ts        # Data Transfer Objects
│       └── create-categoria.dto.ts # DTO para criação
├── app.module.ts                   # Módulo principal
└── main.ts                         # Ponto de entrada
```

---

## ▶️ Como Executar o Projeto

```bash
# Instalar as dependências
npm install

# Executar em modo desenvolvimento
npm run start:dev
```

> ⚠️ Certifique-se de configurar corretamente as variáveis de ambiente do banco de dados MySQL.

---

## 📌 Observações

* Projeto com foco em **boas práticas**, **organização modular** e **clareza de código**
* Ideal para estudos de **NestJS**, **TypeORM** e **APIs RESTful**

---

## 📄 Licença

Este projeto é destinado para fins educacionais e de aprendizado.
