const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://oministack:oministack@cluster0-jfie4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(express.json());

//tipos de parametros

//Query Params:request.query(Filtros, ordenação, paginação,...)
//Route Params:request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para ciação ou alteração de um registro)

//MongoDB (Não-relacional)

app.use(routes);

app.listen(3333);