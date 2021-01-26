import axios from 'axios'

let URL = 'https://api.mercadolibre.com/items/'

//CONSTANTS

const initialData = {
	details: [],
	loading: false,
	message: '',
}

//TYPES
const GET_DETAILS = 'GET_DETAILS'
const GET_DETAILS_ERROR = 'GET_DETAILS_ERROR'

//REDUCERS
export default function detailsReducers(state = initialData, action) {
	switch (action.type) {
		case GET_DETAILS:
			return { ...state, loading: true }

		case GET_DETAILS_ERROR:
			return { ...state, loading: true }
		default:
			return state
	}
}

//ACTIONS
export const getDetails = () => async (dispatch, getState) => {
	const res = await axios.get(`${URL}/details`)
	dispatch({
		type: GET_DETAILS,
		payload: res.data.details,
	})
}

export const getDetailsError = error => ({
	type: GET_DETAILS_ERROR,
	error,
})
