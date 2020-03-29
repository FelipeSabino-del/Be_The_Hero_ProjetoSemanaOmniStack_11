const express = require("express");
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar informações no back-end
 * PUT: Atualizar informações no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após "?" - Filtragem -
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou atualizar informações
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDb, etc
 */

/**
  * Driver: SELECT * FROM users
  * Query Builder: table('user'),select('*').where()
  */


module.exports = app;
