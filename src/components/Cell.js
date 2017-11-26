import React from 'react'

const Cell = ({active}) => {
	let color = active ? 'black' : 'blue' 
	return (
		<div
			style={{
				backgroundColor: color,
				margin: '5px',
				padding: '0',
				height: '20px',
				width: '20px',
				display: 'inline-block'
			}}
		>
		</div>
	)
}

export default Cell