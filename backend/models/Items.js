const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./Item')

const itemsSchema = new Schema(
	{
		items: [Item.schema],
	},
	{
		timestamps: true,
	}
)

const Items = mongoose.model('Items', itemsSchema)
module.exports = Items
