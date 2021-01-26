import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import descriptionReducer from './descriptionDucks'

const rootReducer = combineReducers({
	descriptions: descriptionReducer,
})

const composeEnhacers = window._REDUX_DEVTOOLS_COMPOSE_ || compose

export default function generateStore() {
	const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
	return store
}
