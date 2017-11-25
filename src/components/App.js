import React, { Component } from 'react'
import './App.css'
import Automaton from './Automaton'

class App extends Component {

	constructor() {
		super()
		this.ruleset = [
			'110',
			'100',
			'011',
			'001'
		]
	}
 	render() {
    	return (
      		<div className="App">
        		<Automaton ruleset={this.ruleset}/>
      		</div>
    	)
  	}
}

export default App
