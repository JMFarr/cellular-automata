import { toggleRule, addRule } from './index'

it('creates the toggleRule action correctly', () => {
	const id = 0
	let action = toggleRule(id)
	let expectedAction = {
		type: "TOGGLE_RULE",
		id
	}
	expect(action).toEqual(expectedAction)
})
