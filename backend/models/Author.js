const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema(
	{
		name: String,
		lastname: String,
	},
	{
		timestamps: true,
	}
)

const Author = mongoose.model('Author', authorSchema)
module.exports = Author
