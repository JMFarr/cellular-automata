import { toggleRule, addRule } from './index'

it('creates the toggleRule action correctly', () => {
	const ruleName = 'r101'
	let action = toggleRule(ruleName)
	let expectedAction = {
		type: "TOGGLE_RULE",
		ruleName
	}

	expect(action).toEqual(expectedAction)
})

it('creates addRule action correctly', () => {
	const rule = { r101: 0 }
	let action = addRule(rule)
	let expectedAction = {
		type: "ADD_RULE",
		rule
	}

	expect(action).toEqual(expectedAction)
})