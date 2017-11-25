import React from 'react'
import AutomatonDisplay from './AutomatonDisplay'
import generateRows from './generateRows'
import RuleSelector from './RuleSelector'

const Automaton = ({ruleset, firstRow}) => {
	firstRow = firstRow || randomizedRow(200);
	let cells = generateRows(200, firstRow, ruleset)

	return (
		<div>
			<RuleSelector />
			<AutomatonDisplay height={1000} width={1000} cells={cells}/>
		</div>
	)
}

function randomizedRow(length) {
	const row = []

	for(let i = 0; i < length; i++)
		row.push(randomBinary())

	return row
}

function randomBinary() {
	return Math.floor(Math.random()*2)
}

export default Automaton