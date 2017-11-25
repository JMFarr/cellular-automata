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
				<Rule ruleName='r101'/>
				
			</div>
		)
	}
}

export default RuleSelector