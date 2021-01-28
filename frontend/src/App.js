import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Description from './pages/Description'
import Search from './pages/Search'

import generateStore from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
	const store = generateStore()
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route exact path='/items'>
						<Search />
					</Route>
					<Route exact path='/items/:id'>
						<Description />
					</Route>
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
