const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./Item')
const Author = require('./Author')

const searchSchema = new Schema(
	{
		author: Author.schema,
		categories: [String],
		items: [Item.schema],
	},
	{
		timestamps: true,
	}
)

const Search = mongoose.model('Search', searchSchema)
module.exports = Search
