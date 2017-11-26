import React from 'react'
import RulesetController from '../containers/RulesetController'
import AutomatonDisplay from '../containers/AutomatonDisplay'

const App = () => (
	<div
		style={{
			width: '100%',
		}}
	>
		<div
			style={{
				maxWidth: '500px',
				margin: '0 auto'
			}}
		>
			<RulesetController />
			<AutomatonDisplay />
		</div>
	</div>
)

export default App