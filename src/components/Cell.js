import React from 'react'

const Cell = ({active}) => {
	let color = active ? '#070707' : '#f4f4f4' 
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