import axios from 'axios'

const URL = 'https://api.mercadolibre.com/items/'

//CONSTANTS

const initialData = {
	details: [],
	loading: false,
	error: undefined,
}

//TYPES

const GET_DETAILS = 'GET_DETAILS'
const GET_DETAILS_ERROR = 'GET_DETAILS_ERROR'

//REDUCERS

export default function detailsReducer(state = initialData, action) {
	switch (action.type) {
		case GET_DETAILS:
			return { ...state, loading: true, details: action.payload }
		case GET_DETAILS_ERROR:
			return { ...state, loading: false, error: action.error }
		default:
			return state
	}
}

//ACTIONS

export const getDetails = () => async (dispatch, getState) => {
	const res = await axios.get(`${URL}`)
	dispatch({
		type: GET_DETAILS,
		payload: res.data.results,
	})
}

export const getDetailsError = error => ({
	type: GET_DETAILS_ERROR,
	error,
})
