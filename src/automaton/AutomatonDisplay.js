import React, { Component }from 'react'
import renderCellsIntoCanvas from './renderCellsIntoCanvas'
import './AutomatonDisplay.css'


class AutomatonDisplay extends Component {
	constructor({height, width, cells}) {
		super()
		this.height = height
		this.width = width
		this.cells = cells
	}
	componentDidMount() {
		const canvas = document.getElementById('automatonDisplay')
		renderCellsIntoCanvas(this.cells, canvas)
	}	
	render() {
		return <canvas id="automatonDisplay" height={this.height} width={this.width}></canvas>
	}
}

export default AutomatonDisplay