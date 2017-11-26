import React from 'react'
import Cell from './Cell'

const Rule = ({rule, toggleRule}) => {
	let previousCells = rule.prev.map((active) => (
		<Cell active={active} />
	))
	return (
		<div>
			{ previousCells }
			<br />
			<div 
				onClick={() => {
					toggleRule(rule.id)
				}}
			>
				<Cell active={rule.next} />
			</div>
		</div>
	)
}

export default Rule