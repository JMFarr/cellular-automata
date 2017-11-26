import generateRows, { generateNextRow } from './generateRows'
import createRuleset from '../createRuleset'

const mockRuleset = createRuleset()
mockRuleset[0].next = 1
mockRuleset[3].next = 1
mockRuleset[5].next = 1
mockRuleset[6].next = 1

it('creates the next row correctly', () => {
	
	const prevRow = [1,1,0,1,0,1,0,1,1,0,0,0]
	const expectedRow = [1,1,1,0,1,0,1,1,1,0,1,0]

	const newRow = generateNextRow(prevRow, mockRuleset)
	expect(newRow).toEqual(expectedRow)
})

it('makes correct number of rows', () => {
	const numberOfRows = 5

	const rowsReturned = generateRows(numberOfRows, [1,1,1], mockRuleset)

	expect(rowsReturned.length).toBe(numberOfRows)
})

it('uses the first row passed to it', () => {
	const mockFirstRow = [1,0,1]
	const rowsReturned = generateRows(2, mockFirstRow, mockRuleset)

	expect(rowsReturned[0]).toEqual(mockFirstRow)
})

it('outputs all rows corrects', () => {
	const mockFirstRow = [1,0,1]
	const numberOfRows = 4
	const expectedRows = [
		[1,0,1],
		[1,1,1],
		[0,0,0],
		[1,1,1]
	]

	const rows = generateRows(numberOfRows, mockFirstRow, mockRuleset)

	expect(rows).toEqual(expectedRows)

})