const mongoose = require('mongoose')
const Schema = mongoose.Schema

const priceSchema = new Schema(
	{
		currency: String,
		amount: Number,
		decimals: Number,
	},
	{
		timestamps: true,
	}
)

const itemSchema = new Schema(
	{
		id: String,
		title: String,
		price: [priceSchema],
		picture: String,
		condition: String,
		sold_quantity: Number,
		description: String,
	},
	{
		timestamps: true,
	}
)


const Item = mongoose.model('Item', itemSchema)
module.exports = Item
