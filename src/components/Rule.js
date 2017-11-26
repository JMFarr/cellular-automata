import React from 'react'
import Cell from './Cell'

const Rule = ({rule, toggleRule}) => {
	let previousCells = rule.prev.map((active, key) => (
		<Cell key={key} active={active} />
	))
	return (
		<div 
			style={{
				display: 'inline-block',
				backgroundColor: '#777777',
				margin: '8px',
				padding: '6px',
				borderRadius: '2px'

			}}
		>
			{ previousCells }
			<hr />
			<p
				style={{
					float: 'left',
					lineHeight: '0px',
					color: '#f4f4f4'
				}}
			>
				Next:
			</p>
			<div 
				onClick={() => {
					toggleRule(rule.id)
				}}
				style={{
					float: 'left',
					margin: '0px',
					padding: '0px',
					maxHeight: '30px'
				}}
			>
				<Cell active={rule.next} />
			</div>
		</div>
	)
}

export default Rule