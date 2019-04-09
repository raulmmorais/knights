const mongoose = require('mongoose');

var options = {useNewUrlParser: true};
var mongodbUri = 'mongodb://raul.morais:123Virtual@ds135456.mlab.com:35456/db_knights';
module.exports = mongoose.connect(mongodbUri, options);

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE} informado é menor que o mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE} informado é maior que o máximo de '{MAX}'."