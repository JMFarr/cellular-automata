import React, { Component }from 'react'
import './AutomatonDisplay.css'

class AutomatonDisplay extends Component {
	constructor({height, width, ruleset}) {
		super()
		this.height = height
		this.width = width
		this.ruleset
	}
	componentDidMount() {
		const canvas = document.getElementById('automatonDisplay')
	}	
	render() {
		return <canvas id="automatonDisplay" height={this.height} width={this.width}></canvas>
	}
}

export default AutomatonDisplay