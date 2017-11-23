import React, { Component }from 'react'
import renderCellsIntoCanvas from './renderCellsIntoCanvas'
import './AutomatonDisplay.css'


class AutomatonDisplay extends Component {
	constructor({cells}) {
		super()		
		this.cells = cells
	}
	componentDidMount() {
		const canvas = document.getElementById('automatonDisplay')
		renderCellsIntoCanvas(this.cells, canvas)
	}	
	render() {
		return <canvas id="automatonDisplay" height='1000' width='1000'></canvas>
	}
}

export default AutomatonDisplay