import React, { Component } from 'react'
import Cell from './Cell'
import './Rule.css'

class Rule extends Component {
	constructor({previousCellStates}) {
		super()
		this.previousCells = previousCellStates.map((state) => <Cell state={state} />)
		this.state = {
			nextCellState: 0
		}

		this.handleClick = this.handleClick.bind(this)
		this.toggleNextCellState = this.toggleNextCellState.bind(this)		
	}
	handleClick(e) {
		console.log('handleClick')
		this.toggleNextCellState()
	}
	toggleNextCellState() {
		this.setState({ 
			nextCellState: !this.state.nextCellState
		})
	}
	render() {
		return (
			<div className="rule">
				{this.previousCells}
				<div className='rule-toggle' onClick={this.handleClick}>
					<Cell state={this.state.nextCellState} />
				</div>
			</div>
		)
	}
}

export default Rule