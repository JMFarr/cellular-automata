import React from 'react'

const Cell = ({active}) => {
	let color = active ? 'black' : 'blue' 
	return (
		<div
			style={{
				backgroundColor: color,
				margin: '8px',
				padding: '0',
				height: '30px',
				width: '30px',
				display: 'inline-block'
			}}
		>
		</div>
	)
}

export default Cell