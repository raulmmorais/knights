const restful = require('node-restful')
const mongoose = restful.mongoose

const weaponsSchema = new mongoose.Schema({
	name:{type: String, required: true},
	mod:{type: Number, min: 0, max: 99, required: true},
	attr:{type: String, required: true},
	equipped:{type: Boolean, required: true},
})

const attributesSchema = new mongoose.Schema({
	strength: {type: Number, min: 0, max: 99},
	dexterity: {type: Number, min: 0, max: 99},
	constitution: {type: Number, min: 0, max: 99},
	intelligence: {type: Number, min: 0, max: 99},
	wisdom: {type: Number, min: 0, max: 99},
	charisma: {type: Number, min: 0, max: 99}
})

const knightSchema = new mongoose.Schema({
	name:{type: String, required: true},
	nickname:{type: String, required: true},
	birthday:{type: String, required: true},
	weapons:[weaponsSchema],
	attributes: [attributesSchema],
	keyAttribute: {type: String}
})

module.exports = restful.model('Knight', knightSchema)