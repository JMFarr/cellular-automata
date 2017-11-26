import React, { Component } from 'react'
import renderCellsIntoCanvas from './renderCellsIntoCanvas'

class AutomatonCanvas extends Component {
	constructor({cells}) {
		super()
		this.cells = cells
	}

	componentDidMount() {
		renderCellsIntoCanvas(this.cells, this.canvas)
	}

	render() {
		return (
			<canvas 
				width='500px' 
				height='500px'
				ref={(node) => {
					this.canvas = node
				}}
			></canvas>
		)
	}

}

export default AutomatonCanvas