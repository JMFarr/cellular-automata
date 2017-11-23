import React, { Component } from 'react'
import Cell from './Cell'
import './Rule.css'

class Rule extends Component {
	constructor({previousCellStates}) {
		super()
		this.previousCells = previousCellStates.map((state) => {
			return <Cell state={state} />
		})
		this.state = {
			nextCellState: 0
		}
	}
	render() {
		return (
			<div className="rule">
				{this.previousCells}
				<div className='rule-toggle'>
					<Cell state={this.nextCellState} />
				</div>
			</div>
		)
	}
}

export default Rule