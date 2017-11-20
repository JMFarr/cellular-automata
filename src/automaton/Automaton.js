import React from 'react'
import AutomatonDisplay from './AutomatonDisplay'
import generateRows from './generateRows'

const Automaton = () => {
	const ruleset = [
		'110',
		'100',
		'011',
		'001'
	]
	const firstRow = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	const cells = generateRows(200, firstRow, ruleset)
	return (
		<div>
			<AutomatonDisplay height='1000' width='1000' cells={cells}/>
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