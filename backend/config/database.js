const mongoose = required('mongoose')

var options = {useNewUrlParser: true};
var mongodbUri = 'mongodb://raul.morais:123Virtual@ds135456.mlab.com:35456/db_knights';
module.exports = mongoose.connect(mongodbUri, options);