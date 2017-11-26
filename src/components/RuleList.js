import React from 'react'
import Rule from './Rule'

const RuleList = ({ruleset, toggleRule}) => {
	let rules = ruleset.map((rule) => (
		<Rule
			rule={rule} 
			toggleRule={toggleRule}
		/>
	))
	return (
		<div>
			{ rules }
		</div>
	)
}

export default RuleList