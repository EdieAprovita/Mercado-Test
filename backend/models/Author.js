const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema(
	{
		name: 'Edgar',
		lastname: 'Chavero',
	},
	{
		timestamps: true,
	}
)

const Author = mongoose.model('Author', authorSchema)
module.exports = Author
