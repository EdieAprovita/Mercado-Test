const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = require('./Item')
const Author = require('./Author')

const searchById = new Schema(
	{
		author: Author.schema,
		item: Item.schema,
	},
	{
		timestamps: true,
	}
)

const SearchById = mongoose.model('SearchById', searchById)
module.exports = SearchById
