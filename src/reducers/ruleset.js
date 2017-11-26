const ruleset = (state = [], action) => {
	switch(action.type) {
		case 'TOGGLE_RULE':
			let nextState = [ ...state ]
			nextState[action.id].next = 1 - state[action.id].next
			return nextState
		default:
			return state
	}
}

export default ruleset