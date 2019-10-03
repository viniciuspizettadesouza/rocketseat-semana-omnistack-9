const express = require('express')
const routes = require('./routes')

const app = express()

// GET, POST, PUT, DELETE
// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)

// Sequelize para usar banco de dados SQL

app.use(express.json())
app.use(routes)

app.listen(3333)