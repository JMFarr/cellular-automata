import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cellularAutomataReducer from './reducers'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import createRuleset from './createRuleset'

let initialState = {
	ruleset: createRuleset()
}

let store = createStore(cellularAutomataReducer, initialState)

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
)

registerServiceWorker()
