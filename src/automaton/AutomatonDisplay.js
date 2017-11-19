import React, { Component }from 'react'
import './AutomatonDisplay.css'

class AutomatonDisplay extends Component {
	constructor({height, width}) {
		super()
		this.height = height
		this.width = width
	}
	componentDidMount() {
		const canvas = document.getElementById('automatonDisplay')
		const ctx = canvas.getContext('2d')
		ctx.fillStyle = "#FF0000"
		ctx.fillRect(0,0,5,5)
	}	
	render() {
		return <canvas id="automatonDisplay" height={this.height} width={this.width}></canvas>
	}
}

export default AutomatonDisplay