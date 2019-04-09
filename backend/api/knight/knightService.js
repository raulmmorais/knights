const Knights = require('./knight')
const _ = require('lodash')

Knights.methods (['get', 'post', 'put', 'delete'])

Knights.updateOptions({
  new: true,
  runValidators: false
})

module.exports = Knights