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
		const cellStates = []
		cellStates.push(randomizedCellRow(100))
		for(let i = 0; i < 500-1; i++)
			cellStates.push(nextRow(cellStates[i]))

		drawCells(ctx, cellStates)
	}	
	render() {
		return <canvas id="automatonDisplay" height={this.height} width={this.width}></canvas>
	}
}

function drawCells(ctx, cellStates) {
	const cellSize = 5;
	const activeStyle = "#000000"
	const inactiveStyle = "#00b6ff"

	for(let i = 0; i < cellStates.length; i++) {
		for(let j = 0; j < cellStates[i].length; j++) {
			if(cellStates[i][j] === 1) 
				ctx.fillStyle = activeStyle
			else
				ctx.fillStyle = inactiveStyle
			ctx.fillRect(j*cellSize, i*cellSize, cellSize, cellSize)
		}
	}
}

function randomizedCellRow(numberOfCells) {
	let cellStates = []
	for(let i = 0; i < numberOfCells; i++)
		cellStates.push(randomBinary())
	return cellStates	
}

function nextRow(prevCellStates){
	let nextStates = []

	for(let i = 0; i < prevCellStates.length; i++){		
		let left = prevCellStates[i-1]
		let middle = prevCellStates[i]
		let right = prevCellStates[i+1]

		if(left == null)
			left = prevCellStates[prevCellStates.length-1]
		if(right == null)
			right = prevCellStates[0]		
		nextStates.push(nextState(left, middle, right))
	}
	
	return nextStates

}

function nextState(left, middle, right) {
	
	let nextState = 0
	const statesString = '' + left + middle + right
	const activeRules = [
		'111',
		'101',
		'010',
		'001'
	]

	if(activeRules.indexOf(statesString) > -1)
		nextState = 1
	
	return nextState

}

function randomBinary() {
	return Math.floor(Math.random()*2)
}
export default AutomatonDisplay