import axios from 'axios'

const URL = axios.create({ baseURL: 'https://api.mercadolibre.com/items/' })

//CONSTANTS

const initialData = {
	description: [],
	status: 'pending',
	error: undefined,
}

//TYPES

const GET_DESCRIPTION_ERROR = 'GET_DESCRIPTION_ERROR'
const GET_DESCRIPTION_SUCCESS = 'GET_DESCRIPTION_SUCCESS'

//REDUCERS

export default function descriptionReducer(state = initialData, action) {
	switch (action.type) {
		case GET_DESCRIPTION_SUCCESS:
			return { ...state, status: 'success', description: action.payload }
		case GET_DESCRIPTION_ERROR:
			return { ...state, status: 'error', error: action.error }
		default:
			return state
	}
}

//ACTIONS

export const getDescription = () => async (dispatch, getState) => {
	const res = await axios.get(`${URL}/description`)
	dispatch({
		type: GET_DESCRIPTION_SUCCESS,
		payload: res.data.results,
	})
}

export const getDescriptionError = error => ({
	type: GET_DESCRIPTION_ERROR,
	error,
})
