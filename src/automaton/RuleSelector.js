import React, { Component } from 'react'
import Rule from './Rule'

class RuleSelector extends Component {
	constructor() {
		super()
		this.ruleset = []
		this.updateRuleset = this.updateRuleset.bind(this)
	}
	updateRuleset(rule, shouldInclude) {
		if(this.ruleset.indexOf(rule) > -1) {
			this.ruleset.splice(this.ruleset.indexOf(rule), 1)
		} else {
			this.ruleset.push(rule)
		}
	}
	render() {
		return (
			<div>
				<Rule previousCellStates={[1,1,1]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[1,1,0]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[1,0,1]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[1,0,0]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[0,1,1]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[0,1,0]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[0,0,1]} updateRuleset={this.updateRuleset}/>
				<Rule previousCellStates={[0,0,0]} updateRuleset={this.updateRuleset}/>
			</div>
		)
	}
}

export default RuleSelector