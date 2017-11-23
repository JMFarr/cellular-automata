import React, { Component } from 'react'
import Rule from './Rule'

class RuleSelector extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		return (
			<div>
				<Rule previousCellStates={[1,1,1]} />
				<Rule previousCellStates={[1,1,0]} />
				<Rule previousCellStates={[1,0,1]} />
				<Rule previousCellStates={[1,0,0]} />
				<Rule previousCellStates={[0,1,1]} />
				<Rule previousCellStates={[0,1,0]} />
				<Rule previousCellStates={[0,0,1]} />
				<Rule previousCellStates={[0,0,0]} />
			</div>
		)
	}
}

export default RuleSelector