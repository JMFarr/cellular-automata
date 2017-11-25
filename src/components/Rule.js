import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'
import './Rule.css'

const Rule = ({ruleName, isActive}) => (
	<div>
		<Cell state={Number(ruleName.charAt(1))} />
		<Cell state={Number(ruleName.charAt(2))} />
		<Cell state={Number(ruleName.charAt(3))} />
		<br />
		<Cell state={isActive} />
	</div>
)

Rule.propTypes = {
	ruleName: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired
}

export default Rule