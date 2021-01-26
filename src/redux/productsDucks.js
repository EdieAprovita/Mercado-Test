import axios from 'axios'

let URL = 'https://api.mercadolibre.com/sites/MLA/search?q='

//CONSTANTS

const initialData = {
	products: [],
	loading: false,
	message: '',
}

//TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'

//REDUCERS
export default function productsReducer(state = initialData, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return { ...state, loading: true }

		case GET_PRODUCTS_ERROR:
			return { ...state, loading: false, message: action.error }
		default:
			return state
	}
}

//ACTIONS
export const getProducts = () => async (dispatch, getState) => {
	const res = await axios.get(`${URL}`)
	dispatch({
		type: GET_PRODUCTS,
		payload: res.data.products,
	})
}

export const getProductsError = error => ({
	type: GET_PRODUCTS_ERROR,
	error,
})
