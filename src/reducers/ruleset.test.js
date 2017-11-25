import ruleset from './ruleset'
import deepfreeze from 'deep-freeze'

it('toggles a rule', () => {
	let state = { 
		r000: false, 
		r101: false 
	}
	let action = { 
		type: 'TOGGLE_RULE', 
		ruleName: 'r101'
	}

	state = deepfreeze(state)

	let nextState = ruleset(state, action)
	let expectedState = { 
		r000: false, 
		r101: true 
	}

	expect(nextState).toEqual(expectedState)
})

it('adds a rule', () => {
	let state = { r000: false }
	let action = { 
		type: 'ADD_RULE', 
		rule: {
			r101: true
		}
	}

	state = deepfreeze(state)

	let nextState = ruleset(state, action)
	let expectedState = { 
		r000: false, 
		r101: true 
	}

	expect(nextState).toEqual(expectedState)
})