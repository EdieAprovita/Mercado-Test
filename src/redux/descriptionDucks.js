import axios from 'axios'

let URL = 'https://api.mercadolibre.com/items/'

//CONSTANTS

const initialData = {
	description: [],
	message: '',
}

//TYPES
const GET_DESCRIPTION = 'GET_DESCRIPTION'
const GET_DESCRIPTION_ERROR = 'GET_DESCRIPTION_ERROR'

//REDUCERS
export default function detailsReducers(state = initialData, action) {
	switch (action.type) {
		case GET_DESCRIPTION:
			return { ...state, description: action.payload }

		case GET_DESCRIPTION_ERROR:
			return { ...state, message: action.error }
		default:
			return state
	}
}

//ACTIONS
export const getDescriptions = () => async (dispatch, getState) => {
	const res = await axios.get(`${URL}/description`)
	dispatch({
		type: GET_DESCRIPTION,
		payload: res.data.description,
	})
}

export const getDescriptionsError = error => ({
	type: GET_DESCRIPTION_ERROR,
	error,
})
