import React, { Component } from 'react'
import renderCellsIntoCanvas from './renderCellsIntoCanvas'
import generateRows from './generateRows'

class AutomatonCanvas extends Component {
	constructor({ruleset}) {
		super()
		this.ruleset = ruleset
		this.randomFirstRow = this.randomFirstRow.bind(this)
	}
	componentDidMount() {
		this.ctx = this.canvas.getContext('2d')
		renderCellsIntoCanvas(
			generateRows(100, this.randomFirstRow(), this.ruleset), 
			this.ctx
		)
	}
	componentDidUpdate() {
		renderCellsIntoCanvas(
			generateRows(100, this.randomFirstRow(), this.ruleset), 
			this.ctx
		)
	}
	randomBinary() {
		return Math.floor(Math.random()*2)
	}
	randomFirstRow () {
		let row = []
		for(let i = 0; i < 100; i++)
			row.push(this.randomBinary())
		return row
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