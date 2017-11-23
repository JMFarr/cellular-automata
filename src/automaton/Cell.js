import React from 'react'
import './Cell.css'

const Cell = ({state}) => {
	const className = state ? 'cell active' : 'cell inactive'
	return <div className={className}></div>
}

export default Cell