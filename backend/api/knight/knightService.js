const Knight = require('./knight')
const _ = require('lodash');

Knight.methods(['get', 'post', 'put', 'delete'])

Knight.updateOptions({
  new: true,
  runValidators: true
})

Knight.after('post', sendErrorOrNext).after('put', sendErrorOrNext)

function sendErrorOrNext(req, res, next){
  const bundle = res.locals.bundle

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }else{
    next()
  }
}

function parseErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

Knight.route('count', function(req, res, next){
  Knight.count(function(error, value){
    if (error) {
      res.status(500).json({errors:[error]})
    }else {
      res.json({value})
    }
  })
})
module.exports = Knight