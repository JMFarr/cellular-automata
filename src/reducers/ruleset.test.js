import ruleset from './ruleset'
import createRuleset from '../createRuleset'

it('toggles a rule', () => {
	let state = createRuleset()
	let action = { 
		type: 'TOGGLE_RULE', 
		id: 5
	}

	let nextState = ruleset(state, action)
	let expectedFifthRule = {
		id: 5,
		prev: [1,0,1],
		next: 1
	} 

	expect(nextState[5]).toEqual(expectedFifthRule)
})