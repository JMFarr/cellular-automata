import React, { Component } from 'react'
import Cell from './Cell'
import './Rule.css'

class Rule extends Component {
	constructor({previousCellStates, updateRuleset}) {
		super()
		this.previousCellStates = previousCellStates
		this.previousCells = previousCellStates.map((state) => <Cell state={state} />)
		this.updateRuleset = updateRuleset
		this.state = {
			nextCellState: 0
		}

		this.handleClick = this.handleClick.bind(this)
		this.toggleNextCellState = this.toggleNextCellState.bind(this)
		this.getRule = this.getRule.bind(this)
	}
	handleClick(e) {
		console.log('handleClick')
		this.toggleNextCellState()
		this.updateRuleset(this.getRule(), this.state.nextCellState)
	}
	toggleNextCellState() {
		this.setState({ 
			nextCellState: !this.state.nextCellState
		})
	}
	getRule() {
		return `${this.previousCellStates[0]}${this.previousCellStates[1]}${this.previousCellStates[2]}`
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