import React from 'react'
import Rule from './Rule'

const RuleList = ({ruleset, toggleRule}) => {
	let rules = ruleset.map((rule) => (
		<Rule
			key={rule.id}
			rule={rule} 
			toggleRule={toggleRule}
		/>
	))
	return (
		<div
			style={{
			}}
		>
			{ rules }
		</div>
	)
}

export default RuleList