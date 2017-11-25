const ruleset = (state = {}, action) => {
	switch(action.type) {
		case 'TOGGLE_RULE':
			let nextState = { ...state }
			nextState[action.ruleName] = !state[action.ruleName]
			return nextState
		case 'ADD_RULE':
			let { rule } = action 
			return { ...state, ...rule}
		default:
			return state
	}
}

export default ruleset