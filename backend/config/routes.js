const express = require('express')

module.exports = function(server){
	
	const router = express.Router()
	server.use('/api', router)
	
	const knightService = require('../api/knight/knightService')
	knightService.register(router, '/knights')
	
	
}