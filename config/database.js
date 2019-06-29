const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance',{useNewUrlParser :  true })


mongoose.Error.messages.general.required = "O atributo '{PATH}' é Obrigatorio."
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite máximo permitido que é  de '{MAX}'."
mongoose.Error.messages.Number.min = "O {VALUE} informado é maior que o limite mínimo de '{MIN}'."
mongoose.Error.messages.String.enum = "O {VALUE} não é valido para o atributo '{PATH}'"
