import createRuleset from './createRuleset'

it('creates a ruleset with correct rules', () => {
	const ruleset = createRuleset()
	const expectedFirstRule = {
		id: 0,
		prev: [0,0,0],
		next:0
	}
	const expectedFifthRule = {
		id: 4,
		prev: [1,0,0],
		next:0
	}
	const expectedLastRule = {
		id: 7,
		prev: [1,1,1],
		next:0
	}

	expect(ruleset[0]).toEqual(expectedFirstRule)
	expect(ruleset[4]).toEqual(expectedFifthRule)
	expect(ruleset[7]).toEqual(expectedLastRule)
})