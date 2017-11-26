import React from 'react'
import Cell from './Cell'

const Rule = ({rule, toggleRule}) => {
	let previousCells = rule.prev.map((active, key) => (
		<Cell key={key} active={active} />
	))
	return (
		<div 
			style={{
				display: 'inline-block'
			}}
		>
			{ previousCells }
			
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