import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import detailsReducer from './detailsDucks'
import descriptionsReducer from './descriptionDucks'
import productsReducer from './productsDucks'

const rootReducer = combineReducers({
	details: detailsReducer,
	descriptions: descriptionsReducer,
	products: productsReducer,
})

const composeEnhacers = window._REDUX_DEVTOOLS_COMPOSE_ || compose

export default function generateStore() {
	const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
	return store
}
