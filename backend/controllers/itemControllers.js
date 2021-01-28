const axios = require('axios')
const asynHandler = require('express-async-handler')

exports.getItem = asynHandler(async (req, res) => {
	try {
		const { id } = req.params
		const item = await axios.get(API_URL + `/items/${id}`)
		res.status(200).json({ item })
	} catch (error) {
		res.status(400).json({ message: `${error}` })
	}
})

exports.getItemDescription = asynHandler(async (req, res) => {
	try {
		const { id } = req.params
		const description = await axios.get(API_URL + `/items/${id}/description`)
		res.status(200).json({ description })
	} catch (error) {
		res.status(400).json({ message: `${error}` })
	}
})
