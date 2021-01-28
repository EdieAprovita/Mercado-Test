const axios = require('axios')
const asynHandler = require('express-async-handler')

exports.getProducts = asynHandler(async (req, res) => {
	try {
		const { query, limit, page } = req.query
		const products = await axios.get(
			API_URL + `/sites/MLA/search?q=${query}&limit=${limit}`
		)
		res.status(200).json({ products })
	} catch (error) {
		res.status(400).json({ message: `${error}` })
	}
})

exports.getCurrency = asynHandler(async (req, res) => {
	try {
		const { id } = req.params
		const currency = await axios.get(API_URL + `/currencies/${id}`)
		res.status(200).json({ currency })
	} catch (error) {
		res.status(400).json({ message: `${error}` })
	}
})

exports.getCategories = asynHandler(async (req, res) => {
	try {
		const { id } = req.params
		const categories = await axios.get(API_URL + `/categories/${id}`)
		res.status(200).json({ categories })
	} catch (error) {
		res.status(400).json({ message: `${error}` })
	}
})
